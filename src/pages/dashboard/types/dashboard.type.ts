import { TSwiperCarouselVariants } from "@/common/components/Carousels/SwiperCarousel";

export type DashboardCardType =
  | "image"
  | "text"
  | "link"
  | "section"
  | "empty"
  | "html"
  | "carousel"
  | "icon";

export interface IDashboardCard {
  id: string;
  type: DashboardCardType;
  src?: string;
  url?: string;
  text?: string;
  index?: number;
  style?: React.CSSProperties;
  metadata?: IMetadata;
  variant?: "initial" | "default";
}

export interface IMetadata {
  html?: string;
  showCaption?: boolean;
  fetchImageFromUrl?: boolean;
  carouselVariant?: TSwiperCarouselVariants;
}

export type TCardLayoutStyle =
  | "SMALL_SQUARE"
  | "HORIZONTAL_RECTANGLE"
  | "HORIZONTAL_WIDE_RECTANGLE"
  | "VERTICAL_RECTANGLE"
  | "LARGE_SQUARE"
  | "MINI";

export type TEditableMetadataInputType =
  | "checkbox"
  | "text"
  | "select"
  | "multiple-text";

export interface IEditableMetadataEdit {
  type: TEditableMetadataInputType;
  label: string;
  selectOptions?: { value: string; name: string }[];
}
