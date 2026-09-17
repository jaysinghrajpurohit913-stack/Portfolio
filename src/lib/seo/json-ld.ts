import { profile } from "@/data/profile";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: siteUrl,
    jobTitle: "Software · AI · Robotics",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profile.education.institution,
    },
    sameAs: [profile.links.github, profile.links.linkedin],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${profile.name} — Portfolio`,
    url: siteUrl,
  };
}
