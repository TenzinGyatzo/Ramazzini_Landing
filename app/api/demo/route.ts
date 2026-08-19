import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { isFormType, type FormType } from "@/lib/analytics";

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

  if (String(lead.form_confirm || "").trim()) {
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

    const profile = readField(lead, "profile");
    const volume = readField(lead, "volume");
    const message = readField(lead, "message");
    const formOriginLabel =
      source === "Hero video lead"
        ? "Formulario compacto"
        : "Formulario completo";
    const bookingUrl =
      process.env.NEXT_PUBLIC_CAL_URL ||
      "https://cal.com/ramazzini/demo-personalizada-de-ramazzini";

    const results = await Promise.all([
      resend.emails.send({
        from,
        to: notifyTo,
        replyTo: email,
        subject: `Nuevo prospecto interesado en una demo: ${name}`,
        html: `
            <!DOCTYPE html>
            <html lang="es">
              <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Nuevo prospecto interesado en una demo</title>
                <style>
                  @media only screen and (max-width: 600px) {
                    .email-heading {
                      font-size: 22px !important;
                      line-height: 1.3 !important;
                    }
                    .email-container {
                      width: 100% !important;
                    }
                    .email-body {
                      padding: 28px 20px !important;
                    }
                  }
                </style>
              </head>
              <body style="margin:0;padding:0;background-color:#f4f6f8;">
                <div style="display:none;font-size:1px;color:#f4f6f8;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;">
                  ${escapeHtml(name)} compartió sus datos desde el ${escapeHtml(formOriginLabel)}.
                </div>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f6f8;margin:0;padding:24px 12px;">
                  <tr>
                    <td align="center">
                      <table role="presentation" class="email-container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background-color:#ffffff;border:1px solid #e3e8ef;border-radius:8px;">
                        <tr>
                          <td class="email-body" style="padding:36px 32px;font-family:Arial,Helvetica,sans-serif;color:#0b1326;font-size:16px;line-height:1.5;">
                            <p style="margin:0 0 12px;">
                              <span style="display:inline-block;padding:6px 10px;border-radius:999px;background-color:#eef8eb;border:1px solid #cfe9c8;color:#2f6b2a;font-size:12px;font-weight:700;line-height:1;">
                                ${escapeHtml(formOriginLabel)}
                              </span>
                            </p>
                            <h1 class="email-heading" style="margin:0 0 16px;font-family:Arial,Helvetica,sans-serif;font-size:26px;line-height:1.3;font-weight:700;color:#0b1326;">
                              Nuevo prospecto interesado en una demo
                            </h1>
                            <p style="margin:0 0 20px;color:#0b1326;">
                              Un prospecto compartió sus datos para continuar con el proceso de agendar una demo de Ramazzini.
                            </p>
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 28px;background-color:#f3faf7;border:1px solid #d7ebe3;border-radius:8px;">
                              <tr>
                                <td style="padding:14px 16px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:#355a52;">
                                  Este envío no confirma que exista una reservación. Si el prospecto elige y confirma un horario, recibirás la notificación correspondiente de Cal.com.
                                </td>
                              </tr>
                            </table>
                            <h2 style="margin:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.4;font-weight:700;color:#015e66;text-transform:uppercase;letter-spacing:0.04em;">
                              Datos del prospecto
                            </h2>
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 28px;border-top:1px solid #e3e8ef;">
                              ${emailDataRow("Nombre", name)}
                              ${emailDataRow("Correo electrónico", email)}
                              ${emailDataRow("WhatsApp", phone)}
                              ${emailDataRow("Perfil", profile)}
                              ${emailDataRow("Volumen mensual", volume)}
                              ${emailDataRow("Mensaje", message)}
                            </table>
                            <h2 style="margin:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.4;font-weight:700;color:#015e66;text-transform:uppercase;letter-spacing:0.04em;">
                              Información del envío
                            </h2>
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0;border-top:1px solid #e3e8ef;">
                              ${emailDataRow("Formulario de origen", formOriginLabel)}
                              ${emailDataRow("Formulario enviado", submittedAt)}
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </body>
            </html>
          `,
      }),
      resend.emails.send({
        from,
        to: email,
        subject: "Recibimos tu solicitud de demo de Ramazzini",
        html: `
            <!DOCTYPE html>
            <html lang="es">
              <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Recibimos tu solicitud de demo de Ramazzini</title>
                <style>
                  @media only screen and (max-width: 600px) {
                    .email-heading {
                      font-size: 23px !important;
                      line-height: 1.3 !important;
                    }
                    .email-container {
                      width: 100% !important;
                    }
                    .email-body {
                      padding: 28px 20px !important;
                    }
                  }
                </style>
              </head>
              <body style="margin:0;padding:0;background-color:#f4f6f8;">
                <div style="display:none;font-size:1px;color:#f4f6f8;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;">
                  Recibimos tus datos. Elige el horario que mejor te funcione para conocer Ramazzini.
                </div>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f6f8;margin:0;padding:24px 12px;">
                  <tr>
                    <td align="center">
                      <table role="presentation" class="email-container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background-color:#ffffff;border:1px solid #e3e8ef;border-radius:8px;">
                        <tr>
                          <td class="email-body" style="padding:40px 36px;font-family:Arial,Helvetica,sans-serif;color:#0b1326;font-size:16px;line-height:1.5;">
                            <h1 class="email-heading" style="margin:0 0 24px;font-family:Arial,Helvetica,sans-serif;font-size:27px;line-height:1.3;font-weight:700;color:#0b1326;">
                              Gracias por tu interés en Ramazzini
                            </h1>
                            <p style="margin:0 0 16px;">Hola, ${escapeHtml(name)}:</p>
                            <p style="margin:0 0 16px;">
                              Recibimos tus datos y tu interés en conocer Ramazzini.
                            </p>
                            <p style="margin:0 0 24px;">
                              Si todavía no has elegido una fecha y hora, completa la reservación de tu demo personalizada de 45 minutos:
                            </p>
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px;">
                              <tr>
                                <td align="center" bgcolor="#97d68b" style="border-radius:8px;background-color:#97d68b;">
                                  <a href="${escapeHtml(bookingUrl)}" style="display:inline-block;padding:14px 28px;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:700;line-height:1.25;color:#06240a;text-decoration:none;border-radius:8px;min-width:180px;text-align:center;">
                                    Agendar mi demo
                                  </a>
                                </td>
                              </tr>
                            </table>
                            <p style="margin:0 0 16px;">
                              Si ya confirmaste un horario, no necesitas volver a agendar. Recibirás los detalles de tu reservación por separado.
                            </p>
                            <p style="margin:0 0 12px;">
                              Mientras tanto, si deseas conocer Ramazzini por tu cuenta, puedes comenzar una prueba gratuita de 15 días.
                            </p>
                            <p style="margin:0 0 24px;">
                              <a href="${escapeHtml(appUrl)}" style="color:#015e66;font-size:16px;font-weight:600;text-decoration:underline;">
                                Comenzar prueba gratuita
                              </a>
                            </p>
                            <p style="margin:0 0 24px;">
                              Nos dará gusto mostrarte cómo Ramazzini puede ayudarte a gestionar exámenes médicos laborales con mayor rapidez, orden y consistencia.
                            </p>
                            <p style="margin:0 0 28px;">Equipo Ramazzini</p>
                            <p style="margin:0;padding-top:20px;border-top:1px solid #e3e8ef;font-size:13px;line-height:1.5;color:#5b677a;">
                              Recibiste este correo porque compartiste tus datos para conocer Ramazzini y agendar una demo.
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </body>
            </html>
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

  const formType = readField(lead, "form_type");
  return redirectToThanks(
    request,
    "enviado",
    isFormType(formType)
      ? { formType, conversionId: crypto.randomUUID() }
      : undefined,
  );
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

function redirectToThanks(
  request: NextRequest,
  status: string,
  extras?: { formType: FormType; conversionId: string },
) {
  const url = new URL("/gracias", request.nextUrl.origin);
  url.searchParams.set("estado", status);

  if (status === "enviado" && extras) {
    url.searchParams.set("form_type", extras.formType);
    url.searchParams.set("conversion_id", extras.conversionId);
  }

  return NextResponse.redirect(url, 303);
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

function emailDataRow(label: string, value: string) {
  if (!value) {
    return "";
  }

  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #e3e8ef;font-family:Arial,Helvetica,sans-serif;">
        <div style="font-size:12px;line-height:1.4;color:#5b677a;margin:0 0 4px;">
          ${escapeHtml(label)}
        </div>
        <div style="font-size:16px;line-height:1.5;color:#0b1326;font-weight:600;">
          ${escapeHtml(value)}
        </div>
      </td>
    </tr>
  `;
}
