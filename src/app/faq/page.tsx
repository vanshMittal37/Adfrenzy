import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Frequently Asked Questions — SparkMedia.ad",
  description: "Straightforward answers to questions about our growth services, creative throughput, and pricing models."
};

export default function FAQPage() {
  return (
    <div className="pt-20">
      <FAQAccordion />
      <FinalCTA />
    </div>
  );
}
