# Good Neighbor NWA — Black & Gold Starter (Next.js + Tailwind)

- Public IDX-style search (mock data for now)
- Private VOW-style client portal with Terms acceptance
- NABOR-style disclaimer component, brokerage attribution line
- Black & Gold theme baked in
- Stubs for RESO Web API ingestion (Spark/Trestle/direct)

## Quick start
1) Ensure Node 18+ and npm or pnpm.
2) `npm i`
3) `cp .env.example .env.local`
4) `npm run dev` → open http://localhost:3000

## Deploy
- Push to GitHub and import into Vercel, or `vercel` CLI.
- Add env vars in Vercel: BROKERAGE_NAME, MLS_NAME

## Customize
- Edit colors in `tailwind.config.js`.
- Update copy in `src/app/page.tsx` and `src/components/TermsModal.tsx`.
- Replace mock data in `src/lib/data.ts` with live RESO queries when ready.
