import { NextRequest, NextResponse } from 'next/server';
export async function POST(req:NextRequest){const r=NextResponse.redirect(new URL('/',req.url));r.cookies.set('gnr_logged_in','',{path:'/',maxAge:0});r.cookies.set('gnr_terms','',{path:'/',maxAge:0});return r}
