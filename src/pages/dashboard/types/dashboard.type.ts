export type DashboardCardType = "image" | "text" | "link";

export interface IDashboardCard {
  id: string;
  type: DashboardCardType;
  link?: string;
  text?: string;
}
