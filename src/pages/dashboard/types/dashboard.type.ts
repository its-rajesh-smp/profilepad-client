export type DashboardCardType = "image" | "text";

export interface IDashboardCard {
  id: string;
  type: DashboardCardType;
}
