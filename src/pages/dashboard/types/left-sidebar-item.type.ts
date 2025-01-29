import { TDashboardGridCard } from "./dashboard-item.type";

export interface ILeftSidebarCard {
  variant: TDashboardGridCard;
  icon?: React.ReactNode;
  title?: string;
}

export interface ISidebarDroppingItem {
  i: string;
  w: number;
  h: number;
}
