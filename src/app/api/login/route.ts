import { NextRequest, NextResponse } from 'next/server';
export async function POST(req:NextRequest){const f=await req.formData();const e=String(f.get('email')||'');const r=NextResponse.redirect(new URL('/portal',req.url));if(e)r.cookies.set('gnr_logged_in','1',{path:'/',httpOnly:false});return r}
