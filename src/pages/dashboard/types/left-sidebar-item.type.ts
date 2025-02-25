import { TGridItemVariant } from "./dashboard-item.type";

export interface ILeftSidebarCard {
  variant: TGridItemVariant;
  icon?: React.ReactNode;
  title?: string;
  isComingSoon?: boolean;
}

export interface ILeftSidebarDroppingItem {
  i: string;
  w: number;
  h: number;
}
