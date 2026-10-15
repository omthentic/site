/**
 * The canonical host. omthentic.ai redirects to www, so every address a search
 * engine reads (metadataBase, canonicals, sitemap, robots, JSON-LD @ids) uses
 * the www form. A constant on purpose: an env var that drifts would put
 * redirecting URLs back into the sitemap.
 */
export const SITE_URL = "https://www.omthentic.ai";

/** Shanaka's profile on this site, and the @ids shared with his other sites. */
export const SHANAKA_PATH = "/shanaka-jayakody";
export const SHANAKA_URL = `${SITE_URL}${SHANAKA_PATH}`;
export const IDS = {
  person: `${SHANAKA_URL}#person`,
  profilePage: `${SHANAKA_URL}#profilepage`,
  headshot: `${SHANAKA_URL}#headshot`,
  omthentic: `${SITE_URL}/#organization`,
  website: `${SITE_URL}/#website`,
  interviewMd: "https://www.interviewmd.org/#organization",
  medWithPurpose: "https://www.medwithpurpose.com/#organization",
  prepBond: "https://www.prepbond.com.au/#organization",
  shareTree: "https://sharetree.org/#organization",
} as const;
