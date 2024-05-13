import { NextRequest, NextResponse, userAgent } from "next/server";

export default function middleware(request: NextRequest) {
  const { ua } = userAgent(request);
  if (ua !== "Playwright") {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }
}

export const config = {
  matcher: "/",
};
