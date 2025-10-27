import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const email = String(form.get("email") || "");
  const res = NextResponse.redirect(new URL("/portal", req.url));
  if (email) {
    res.cookies.set("gnr_logged_in", "1", { path: "/", httpOnly: false });
  }
  return res;
}
