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
  vps: "https://www.hostinger.in/cart?product=vps%3Avps_kvm_2&period=24&referral_type=cart_link&REFERRALCODE=CHETAN&referral_id=019caf17-e4fc-72a3-84c7-e7e1fd2fd721",  
  hostinger: "https://www.hostinger.in/cart?product=vps%3Avps_kvm_2&period=24&referral_type=cart_link&REFERRALCODE=CHETAN&referral_id=019caf17-e4fc-72a3-84c7-e7e1fd2fd721"

};
