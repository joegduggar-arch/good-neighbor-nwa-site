import { NextRequest, NextResponse } from 'next/server';
export async function POST(req:NextRequest){const r=NextResponse.redirect(new URL('/portal',req.url));r.cookies.set('gnr_terms','1',{path:'/',httpOnly:false});return r}
