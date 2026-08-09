export interface MetricTickerItem {
  label: string;
  value: string;
}

export const metricsData: MetricTickerItem[] = [
  { label: "Brands Scaled", value: "[XX]+" },
  { label: "Campaigns Deployed", value: "[XX]+" },
  { label: "Creatives Delivered / Mo", value: "[XX]+" },
  { label: "Blended ROAS Average", value: "[XX.Xx]x" },
  { label: "Client Retention Rate", value: "[XX]%" },
  { label: "Revenue Influenced", value: "₹[XX]Cr+" },
  { label: "Average CAC Reduction", value: "-[XX]%" }
];
