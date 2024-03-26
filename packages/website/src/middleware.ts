import { WEBSITE_COOKIE_TOKEN_KEY } from "@common/config";
import { NextRequest } from "next/server";
import { http } from "./common/http";

async function checkToken(token: string) {
  const { data } = await http.get<{ data: boolean }>(`/api/auth/check-token/${token}`)
  return data
}

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get(WEBSITE_COOKIE_TOKEN_KEY)?.value
  if (req.nextUrl.pathname.startsWith('/dashboard') && !token) {
    return Response.redirect(new URL('/403', req.url));
  }
  if (!(await checkToken(token!))) {
    return Response.redirect(new URL('/403', req.url));
  }
}

export const config = {
  matcher: '/dashboard/:path*'
}