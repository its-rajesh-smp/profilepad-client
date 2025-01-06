import {
  PiApproximateEqualsThin,
  PiClosedCaptioningThin,
  PiImagesLight,
} from "react-icons/pi";

import {
  DashboardCardType,
  IEditableMetadataEdit,
} from "../types/dashboard.type";

export const defaultHtmlCardHtmlValue: string = `
<div class="flex h-full w-full items-center justify-center">
    <p>Hello World</p>
</div>
`;

export interface IMetadataEditableFields {
  showCaption?: IEditableMetadataEdit;
  fetchImageFromUrl?: IEditableMetadataEdit;
  images?: IEditableMetadataEdit;
  carouselVariant?: IEditableMetadataEdit;
}

export const editableMetadataFields: Partial<{
  [T in DashboardCardType]: IMetadataEditableFields;
}> = {
  carousel: {
    showCaption: {
      type: "checkbox",
      label: "Show Caption ?",
      field: "showCaption",
      icon: <PiClosedCaptioningThin />,
    },
    images: {
      type: "multiple-text",
      label: "Images",
      field: "images",
      icon: <PiImagesLight />,
    },
    carouselVariant: {
      type: "select",
      label: "Carousel Variant",
      field: "carouselVariant",
      icon: <PiApproximateEqualsThin />,
      selectOptions: [
        { name: "Effect Cards", value: "effect-cards" },
        { name: "Effect Flip", value: "effect-flip" },
      ],
    },
  },
};
