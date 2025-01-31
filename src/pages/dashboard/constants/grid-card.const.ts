import { IGridItemConfigs } from "../types/dashboard-item.type";
import { ILeftSidebarDroppingItem } from "../types/left-sidebar-item.type";

const defaultLayoutConfig: ILeftSidebarDroppingItem = {
  h: 1,
  i: "",
  w: 100,
};

export const gridItemConfigs: IGridItemConfigs = {
  text: { ...defaultLayoutConfig },
  image: {
    ...defaultLayoutConfig,
  },
  link: {
    ...defaultLayoutConfig,
    h: 2,
    w: 2,
  },
  profileHeadline: {
    ...defaultLayoutConfig,
    h: 2,
    w: 100,
  },
  title: {
    ...defaultLayoutConfig,
  },
};
