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
    name: "[Founder / Growth Lead]",
    role: "Founder & Growth Strategist",
    bio: "Obsessed with unit economics, direct-response advertising, and building scalable marketing engines for high-growth brands.",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    linkedin: "https://linkedin.com"
  },
  {
    id: "team-2",
    name: "[Creative Director]",
    role: "Head of Performance Creative",
    bio: "Specializes in scroll-stopping video hooks, direct-response copy, and high-velocity UGC ad frameworks.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    linkedin: "https://linkedin.com"
  },
  {
    id: "team-3",
    name: "[Media Buying Lead]",
    role: "Lead Performance Buyer",
    bio: "Manages multi-channel acquisition across Meta, Google, and TikTok with a laser focus on ROAS and CAC reduction.",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    linkedin: "https://linkedin.com"
  }
];
