import { ILeftSidebarDroppingItem } from "./left-sidebar-item.type";

export type TGridItemVariant =
  | "title"
  | "text"
  | "image"
  | "profileHeadline"
  | "link";

export type IGridItemConfigs = {
  [key in TGridItemVariant]: ILeftSidebarDroppingItem;
};

export type TGridItemSizeVariant =
  | "H-1_W-100"
  | "H-1_W-4"
  | "H-2_W-2"
  | "H-2_W-100"
  | "H-2_W-4"
  | "H-4_W-2"
  | "H-4_W-4";

export type IGridItem = {
  sizeVariant: TGridItemSizeVariant;
  id: string;
  variant: TGridItemVariant;
};
