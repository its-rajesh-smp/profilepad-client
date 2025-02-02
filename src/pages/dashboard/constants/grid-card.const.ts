import {
  IGridItemConfigs,
  IGridItemSettings,
} from "../types/dashboard-item.type";
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

export const gridItemSettings: IGridItemSettings = {
  profileHeadline: [
    {
      type: "color",
      title: "Text Color",
      stylesToUpdate: "card->color",
    },
    {
      type: "color",
      title: "Background Color",
      stylesToUpdate: "card->backgroundColor",
    },
    {
      type: "src",
      title: "Image Url",
    },
    {
      type: "design",
      title: "Design",
      availableDesigns: ["H-2_W-100", "H-2_W-4"],
    },
  ],
  title: [
    {
      type: "color",
      title: "Text Color",
      stylesToUpdate: "primaryText->color",
    },
    {
      type: "color",
      title: "Background Color",
      stylesToUpdate: "card->backgroundColor",
    },
    {
      type: "position",
      title: "Text Position",
      stylesToUpdate: "primaryText->textAlign",
    },
    {
      type: "design",
      title: "Design",
      availableDesigns: ["H-1_W-4", "H-1_W-100"],
    },
  ],
  text: [],
  image: [],
  link: [],
};
