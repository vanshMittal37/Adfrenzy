export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "What do you actually do?",
    answer: "Full-funnel growth for D2C brands. Paid media on Meta and Google, performance creative and UGC, website design and development, CRO, and SEO. One team runs all of it so the pieces stop blaming each other."
  },
  {
    id: "faq-2",
    question: "Do I have to buy everything?",
    answer: "No. Start where it hurts. Some brands come in for media, some for a site rebuild. Most end up using more once they see how the parts feed each other."
  },
  {
    id: "faq-3",
    question: "How fast will we see something?",
    answer: "First few weeks we protect what's already working and fix the obvious leaks. Real signal in three to four weeks. Compounding by the end of the first quarter. Anyone promising results in week one is selling you something."
  },
  {
    id: "faq-4",
    question: "What size brands do you work with?",
    answer: "Brands already spending and serious about scaling. If you're pre-revenue and figuring out the product, we're not the right fit yet, and we'll tell you that on the call."
  },
  {
    id: "faq-5",
    question: "Our numbers swing every month. Can you actually fix that?",
    answer: "Usually yes, and usually it's structural. Swings come from one ad carrying the account, budgets moved in big jumps, and a creative pipeline that only refills after something dies. Fix those three and the graph flattens out. Not flat as in slow. Flat as in you can forecast it."
  },
  {
    id: "faq-6",
    question: "How do you handle creative fatigue?",
    answer: "We replace ads before they die, not after. Every account runs on a hook bank and a weekly ship schedule, so there's always a tested backup ready when frequency climbs and CTR starts sliding."
  },
  {
    id: "faq-7",
    question: "Will you build a funnel specific to my brand?",
    answer: "That's the whole point. Your consideration cycle, your AOV and your margin decide the structure. A jewellery brand and a supplements brand should not be running the same funnel, and on our accounts they don't."
  },
  {
    id: "faq-8",
    question: "How many creatives do we get?",
    answer: "[X] a month, built to convert. Volume matters because you cannot predict the winner, you can only find it faster."
  },
  {
    id: "faq-9",
    question: "Am I locked into a contract?",
    answer: "[Standard term is X months, then rolling.] No handcuffs after that. The work should keep us there."
  },
  {
    id: "faq-10",
    question: "Who actually works on my account?",
    answer: "A senior strategist, a media buyer and a creative lead. No junior handoff after the pitch."
  },
  {
    id: "faq-11",
    question: "How involved do I need to be?",
    answer: "One call a week and quick answers on approvals. That's it. We run it like an operating partner, not a vendor waiting for instructions."
  },
  {
    id: "faq-12",
    question: "Do you work with brands outside India?",
    answer: "Yes. We currently run accounts across [markets], and pricing is quoted in [currency] for international brands."
  }
];
