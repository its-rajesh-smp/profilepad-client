import { TDashboardCard } from "./dashboard-item.types";

export interface ILeftSidebarItem {
  id: string;
  w: number;
  h: number;
  variant: TDashboardCard;
  icon?: React.ReactNode;
  title?: string;
}
