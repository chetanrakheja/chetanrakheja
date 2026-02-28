/**
 * Short link / affiliate redirect map.
 *
 * Each key becomes a direct URL on the site:
 *   chetanrakheja.com/aicredits  →  https://aicredits.in
 *   chetanrakheja.com/linkedin   →  https://linkedin.com/in/chetanrakheja
 *
 * Existing routes (/blog, /) always take priority over these.
 * To add a new link, just add an entry below.
 */
export const links: Record<string, string> = {
  // ── Own products ──────────────────────────────────────────────
  aicredits: "https://aicredits.in",
  masterprompting: "https://masterprompting.net",
  payviaupi: "https://payviaupi.vercel.app",
  cv: "/ChetanRakheja_CV.pdf",
  resume: "/ChetanRakheja_CV.pdf",

  // ── Social / profiles ────────────────────────────────────────
  linkedin: "https://linkedin.com/in/chetanrakheja",
  github: "https://github.com/chetanrakheja",
  email: "mailto:rakhejachetan@gmail.com",

  // ── Affiliate links (add your ref params here) ───────────────
  // openai:      "https://openai.com/?ref=chetanrakheja",
  // anthropic:   "https://anthropic.com/?ref=chetanrakheja",
  // vercel:      "https://vercel.com/signup?ref=chetanrakheja",
};
