import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const contactFields = ["name", "email", "phone"] as const;
const operationFields = ["profile", "volume"] as const;
const rateLimitWindowMs = 60 * 60 * 1000;
const maxRequestsPerWindow = 20;
const requestCounts = new Map<string, { count: number; resetAt: number }>();

const maxLengths = {
  name: 100,
  email: 254,
  phone: 30,
  profile: 100,
  volume: 100,
  message: 1000,
  source: 100,
} as const;

export async function POST(request: NextRequest) {
  if (isRateLimited(request)) {
    return redirectToThanks(request, "limite");
  }

  let lead: Record<string, FormDataEntryValue>;

  try {
    const formData = await request.formData();
    lead = Object.fromEntries(formData.entries());
  } catch {
    return redirectToThanks(request, "error");
  }

  if (String(lead.website || "").trim()) {
    return redirectToThanks(request, "enviado");
  }

  const source = readField(lead, "source");
  const requiredFields =
    source === "Hero video lead"
      ? contactFields
      : [...contactFields, ...operationFields];

  for (const field of requiredFields) {
    if (!readField(lead, field)) {
      return redirectToThanks(request, "incompleto");
    }
  }

  for (const [field, maxLength] of Object.entries(maxLengths)) {
    if (readField(lead, field).length > maxLength) {
      return redirectToThanks(request, "incompleto");
    }
  }

  const name = readField(lead, "name");
  const email = readField(lead, "email").toLowerCase();
  const phone = readField(lead, "phone");

  if (!isValidEmail(email) || !isValidPhone(phone)) {
    return redirectToThanks(request, "incompleto");
  }

  const resendKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM || "Ramazzini <soporte@ramazzini.app>";
  const notifyTo = process.env.DEMO_NOTIFY_TO || "soporte@ramazzini.app";
  const appUrl =
    process.env.NEXT_PUBLIC_APP_URL || "https://ramazzini.app/auth/onboarding";

  if (!resendKey) {
    console.error("RESEND_API_KEY no está configurada");
    return redirectToThanks(request, "error");
  }

  try {
    const resend = new Resend(resendKey);
    const submittedAt = new Intl.DateTimeFormat("es-MX", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "America/Mazatlan",
    }).format(new Date());

    const profile = readField(lead, "profile") || "No capturado";
    const volume = readField(lead, "volume") || "No capturado";
    const message =
      readField(lead, "message") || "Sin comentarios adicionales.";
    const bookingUrl =
      process.env.NEXT_PUBLIC_CAL_URL ||
      "https://cal.com/ramazzini/demo-personalizada-de-ramazzini";

    const results = await Promise.all([
      resend.emails.send({
        from,
        to: notifyTo,
        replyTo: email,
        subject: `Nueva demo Ramazzini - ${name}`,
        html: `
            <div style="font-family:Arial,sans-serif;color:#0b1326;line-height:1.5">
              <h1>Nueva solicitud de demo</h1>
              <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
              <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
              <p><strong>WhatsApp:</strong> ${escapeHtml(phone)}</p>
              <p><strong>Perfil:</strong> ${escapeHtml(profile)}</p>
              <p><strong>Volumen:</strong> ${escapeHtml(volume)}</p>
              <p><strong>Mensaje:</strong> ${escapeHtml(message)}</p>
              <p><strong>Fecha:</strong> ${escapeHtml(submittedAt)}</p>
            </div>
          `,
      }),
      resend.emails.send({
        from,
        to: email,
        subject: "Recibimos tu solicitud de demo de Ramazzini",
        html: `
            <div style="font-family:Arial,sans-serif;color:#0b1326;line-height:1.6;max-width:640px">
              <h1>Hola ${escapeHtml(name)}, gracias por escribirnos.</h1>
              <p>Recibimos tus datos para preparar una demo personalizada de 45 minutos.</p>
              <p>Si todavía no elegiste horario, puedes reservar tu fecha aquí: <a href="${escapeHtml(bookingUrl)}">${escapeHtml(bookingUrl)}</a></p>
              <p>También puedes iniciar tu prueba gratuita aquí: <a href="${escapeHtml(appUrl)}">${escapeHtml(appUrl)}</a></p>
              <p>Nos vemos pronto,<br/>Equipo Ramazzini</p>
            </div>
          `,
      }),
    ]);

    if (results.some((result) => result.error)) {
      throw new Error("Resend devolvió un error al enviar la solicitud");
    }
  } catch (error) {
    console.error("No se pudo enviar la solicitud de demo por Resend", error);
    return redirectToThanks(request, "error");
  }

  return redirectToThanks(request, "enviado");
}

function readField(lead: Record<string, FormDataEntryValue>, field: string) {
  const value = lead[field];
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

function redirectToThanks(_request: NextRequest, status: string) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://get.ramazzini.app";

  return NextResponse.redirect(
    new URL(`/gracias?estado=${encodeURIComponent(status)}`, siteUrl),
    303,
  );
}

function isRateLimited(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientIp =
    forwardedFor?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  const now = Date.now();
  const current = requestCounts.get(clientIp);

  if (!current || current.resetAt <= now) {
    requestCounts.set(clientIp, {
      count: 1,
      resetAt: now + rateLimitWindowMs,
    });
    return false;
  }

  current.count += 1;

  if (requestCounts.size > 500) {
    for (const [ip, record] of requestCounts) {
      if (record.resetAt <= now) requestCounts.delete(ip);
    }
  }

  return current.count > maxRequestsPerWindow;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
