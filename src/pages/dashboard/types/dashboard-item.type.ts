import { ILeftSidebarDroppingItem } from "./left-sidebar-item.type";

export type TGridItemVariant =
  | "title"
  | "text"
  | "image"
  | "profileHeadline"
  | "link"
  | "workExperience";

export type IGridItemConfigs = {
  [key in TGridItemVariant]: ILeftSidebarDroppingItem;
};

export type TGridItemSizeVariant =
  | "1x100"
  | "1x4"
  | "2x2"
  | "2x100"
  | "2x4"
  | "4x4";

export type IGridItem = {
  sizeVariant: TGridItemSizeVariant;
  id: string;
  variant: TGridItemVariant;
  colorVariant?: string;
  metadata?: any;
};

export type TGridItemSettingInputType =
  | "color"
  | "position"
  | "design"
  | "src"
  | "href"
  | "item";

export type IGridItemSettings = {
  [key in TGridItemVariant]: IGridItemSetting[];
};

export interface IGridItemSetting {
  type: TGridItemSettingInputType;
  availableDesigns?: TGridItemSizeVariant[];
  title: string;
  stylesToUpdate?: string;
  fieldToUpdate?: string;
}

export type GridItemColorStyles = {
  backgroundColor: string;
  secondaryBackgroundColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  iconColor: string;
  borderColor: string;
};
