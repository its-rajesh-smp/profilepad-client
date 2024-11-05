export type DashboardCardType = "image" | "text" | "link" | "section" | "empty";

export interface IDashboardCard {
  id: string;
  type: DashboardCardType;
  src?: string;
  url?: string;
  text?: string;
  index?: number;
}
