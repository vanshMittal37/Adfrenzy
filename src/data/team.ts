export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  linkedin?: string;
}

export const teamData: TeamMember[] = [
  {
    id: "team-1",
    name: "Growth Strategy Lead",
    role: "Founder & Growth Strategist",
    bio: "Obsessed with unit economics, direct-response advertising, and building scalable marketing engines for high-growth D2C brands.",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    linkedin: "https://www.linkedin.com/company/ad-frenzy-media/"
  },
  {
    id: "team-2",
    name: "Performance Creative Lead",
    role: "Head of Performance Creative",
    bio: "Specializes in scroll-stopping video hooks, direct-response copy, and high-velocity UGC ad frameworks.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    linkedin: "https://www.linkedin.com/company/ad-frenzy-media/"
  },
  {
    id: "team-3",
    name: "Media Acquisition Lead",
    role: "Lead Performance Buyer",
    bio: "Manages multi-channel acquisition across Meta and Google Ads with a laser focus on ROAS and CAC reduction.",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    linkedin: "https://www.linkedin.com/company/ad-frenzy-media/"
  }
];

