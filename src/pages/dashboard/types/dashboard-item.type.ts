import { ISidebarDroppingItem } from "./left-sidebar-item.type";

export type TDashboardGridCard =
  | "title"
  | "text"
  | "image"
  | "profile"
  | "link";

export type IDashboardCardConfigs = {
  [key in TDashboardGridCard]: ISidebarDroppingItem;
};
