import { BiLogoGithub, BiUser } from "react-icons/bi";
import {
  IGridItemConfigs,
  IGridItemSettings,
} from "../types/dashboard-item.type";
import {
  ILeftSidebarCard,
  ILeftSidebarDroppingItem,
} from "../types/left-sidebar-item.type";

const defaultLayoutConfig: ILeftSidebarDroppingItem = {
  h: 1,
  i: "",
  w: 100,
};

export const gridItemConfigs: IGridItemConfigs = {
  text: { ...defaultLayoutConfig, h: 2, w: 2 },
  image: {
    ...defaultLayoutConfig,
    h: 2,
    w: 2,
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
      type: "design",
      title: "Design",
      availableDesigns: ["1x4", "1x100"],
    },
  ],
  text: [
    {
      type: "color",
      title: "Color Variant",
    },
    {
      type: "design",
      title: "Design",
      availableDesigns: ["2x2", "4x4"],
    },
  ],
  image: [
    {
      type: "color",
      title: "Color Variant",
    },
    {
      type: "src",
      title: "Image Url",
      fieldToUpdate: "href",
    },
    {
      type: "design",
      title: "Design",
      availableDesigns: ["2x2", "4x4"],
    },
  ],
  link: [
    {
      type: "color",
      title: "Color Variant",
    },
    {
      type: "href",
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

export const leftSidebarCards: ILeftSidebarCard[][] = [
  [
    {
      variant: "title",
    },
  ],
  [
    {
      variant: "profileHeadline",
    },
  ],
  [
    {
      variant: "link",
      title: "Link",
      icon: <BiUser />,
    },
    {
      variant: "link",
      title: "Github",
      icon: <BiLogoGithub />,
    },
  ],
  [
    {
      variant: "image",
    },
    {
      variant: "text",
    },
  ],
];
