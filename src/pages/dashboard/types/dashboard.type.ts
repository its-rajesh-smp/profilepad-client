export type DashboardCardType =
  | "image"
  | "text"
  | "link"
  | "section"
  | "empty"
  | "html";

export interface IDashboardCard {
  id: string;
  type: DashboardCardType;
  src?: string;
  url?: string;
  text?: string;
  index?: number;
  style?: React.CSSProperties;
  metadata?: IMetadata;
}

export interface IMetadata {
  html?: string;
}

export type TCardLayoutStyle =
  | "SMALL_SQUARE"
  | "HORIZONTAL_RECTANGLE"
  | "HORIZONTAL_WIDE_RECTANGLE"
  | "VERTICAL_RECTANGLE"
  | "LARGE_SQUARE";
