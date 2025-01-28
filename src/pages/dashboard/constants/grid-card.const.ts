import { IDashboardCardConfigs } from "../types/dashboard-item.type";
import { ISidebarDroppingItem } from "../types/left-sidebar-item.type";

const defaultLayoutConfig: ISidebarDroppingItem = {
  h: 1,
  i: "",
  w: 100,
  variant: "text",
};

export const defaultGridLayoutItemConfig = {
  isResizable: false,
};

export const gridLayoutConfig: IDashboardCardConfigs = {
  text: { ...defaultLayoutConfig },
  image: {
    ...defaultLayoutConfig,
  },
  link: {
    ...defaultLayoutConfig,
    h: 2,
    w: 2,
  },
  profile: {
    ...defaultLayoutConfig,
    h: 2,
    w: 100,
  },
  title: {
    ...defaultLayoutConfig,
  },
};
