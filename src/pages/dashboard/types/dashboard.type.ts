export type DashboardCardType = "image" | "text" | "link";

export interface IDashboardCard {
  id: string;
  type: DashboardCardType;
  src?: string;
  url?: string;
  text?: string;
}
