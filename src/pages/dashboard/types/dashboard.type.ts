export type DashboardCardType = "image" | "text" | "link" | "section" | "empty";

export interface IDashboardCard {
  id: string;
  type: DashboardCardType;
  src?: string;
  url?: string;
  text?: string;
  index?: number;
  style?: React.CSSProperties;
}

export type TCardLayoutStyle =
  | "SMALL_SQUARE"
  | "HORIZONTAL_RECTANGLE"
  | "HORIZONTAL_WIDE_RECTANGLE"
  | "VERTICAL_RECTANGLE"
  | "LARGE_SQUARE";
