import { ISidebarDroppingItem } from "./left-sidebar-item.type";

export type TDashboardGridCard =
  | "title"
  | "text"
  | "image"
  | "profileHeadline"
  | "link";

export type IDashboardCardConfigs = {
  [key in TDashboardGridCard]: ISidebarDroppingItem;
};

export type TDashboardGridItemSize =
  | "H-1_W-100"
  | "H-1_W-4"
  | "H-2_W-2"
  | "H-2_W-100"
  | "H-2_W-4"
  | "H-4_W-2"
  | "H-4_W-4";

export type TDashboardGridItem = {
  sizeType: TDashboardGridItemSize;
  id: string;
};
