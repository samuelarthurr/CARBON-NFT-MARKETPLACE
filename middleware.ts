import { type NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // For now, allow all requests through since we're using mock auth
  // In production, you can add route protection based on cookies/session
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
