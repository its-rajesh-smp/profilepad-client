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
      title: "Color Variant",
    },
    {
      type: "src",
      title: "Image Url",
      fieldToUpdate: "profileImgSrc",
    },
    {
      type: "design",
      title: "Design",
      availableDesigns: ["2x100", "2x4"],
    },
  ],
  title: [
    {
      type: "color",
      title: "Color Variant",
    },
    {
      type: "position",
      title: "Text Position",
      stylesToUpdate: "primaryTextTextAlign",
    },
    {
      type: "design",
      title: "Design",
      availableDesigns: ["1x4", "1x100"],
    },
  ],
  text: [],
  image: [],
  link: [
    {
      type: "color",
      title: "Color Variant",
    },
    {
      type: "src",
      title: "Website Url",
      fieldToUpdate: "href",
    },
    {
      type: "src",
      title: "Preview Image Url",
      fieldToUpdate: "previewImgSrc",
    },
    {
      type: "design",
      title: "Design",
      availableDesigns: ["1x4", "2x2", "4x4"],
    },
  ],
};
