import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const res = NextResponse.redirect(new URL("/", req.url));
  res.cookies.set("gnr_logged_in", "", { path: "/", maxAge: 0 });
  res.cookies.set("gnr_terms", "", { path: "/", maxAge: 0 });
  return res;
}
