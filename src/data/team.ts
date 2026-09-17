export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  iconType: "strategy" | "creative" | "media";
  linkedin?: string;
}

export const teamData: TeamMember[] = [
  {
    id: "team-1",
    name: "Growth Strategy",
    role: "Full-Funnel Growth & P&L",
    bio: "Focused on unit economics, direct-response advertising, and building scalable marketing engines for high-growth D2C brands.",
    iconType: "strategy",
    linkedin: "https://www.linkedin.com/company/ad-frenzy-media/"
  },
  {
    id: "team-2",
    name: "Performance Creative",
    role: "UGC & Direct Response",
    bio: "Specializes in scroll-stopping video hooks, direct-response copy, and high-velocity UGC ad frameworks.",
    iconType: "creative",
    linkedin: "https://www.linkedin.com/company/ad-frenzy-media/"
  },
  {
    id: "team-3",
    name: "Media Acquisition",
    role: "Paid Social & Search Scaling",
    bio: "Manages multi-channel acquisition across Meta and Google Ads with a laser focus on ROAS and contribution margin.",
    iconType: "media",
    linkedin: "https://www.linkedin.com/company/ad-frenzy-media/"
  }
];
