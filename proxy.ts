import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const forced = request.nextUrl.searchParams.get("variant");
  const existing = request.cookies.get("ramazzini_campaign_variant")?.value;
  const variant =
    forced === "a" || forced === "b"
      ? forced
      : existing === "a" || existing === "b"
        ? existing
        : crypto.getRandomValues(new Uint8Array(1))[0] < 128
          ? "a"
          : "b";

  const headers = new Headers(request.headers);
  headers.set("x-campaign-variant", variant);
  const response = NextResponse.next({ request: { headers } });
  response.cookies.set("ramazzini_campaign_variant", variant, {
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    sameSite: "lax",
    secure: request.nextUrl.protocol === "https:",
    httpOnly: true,
  });
  return response;
}

export const config = { matcher: ["/campana", "/campana/"] };
