import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const res = NextResponse.redirect(new URL("/portal", req.url));
  res.cookies.set("gnr_terms", "1", { path: "/", httpOnly: false });
  return res;
}
