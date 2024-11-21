import {
  DashboardCardType,
  IEditableMetadataEdit,
} from "../types/dashboard.type";

export const defaultHtmlCardHtmlValue: string = `
<div class="flex h-full w-full items-center justify-center">
    <p>Hello World</p>
</div>
`;

interface IMetadataFields {
  showCaption?: IEditableMetadataEdit;
  fetchImageFromUrl?: IEditableMetadataEdit;
  images?: IEditableMetadataEdit;
  carouselVariant?: IEditableMetadataEdit;
}

export const editableMetadataFields: Partial<{
  [T in DashboardCardType]: IMetadataFields;
}> = {
  carousel: {
    showCaption: {
      type: "checkbox",
      label: "Show Caption ?",
    },
    images: {
      type: "multiple-text",
      label: "Images",
    },
    carouselVariant: {
      type: "select",
      label: "Carousel Variant",
      selectOptions: [
        { name: "Effect Cards", value: "effect-cards" },
        { name: "Effect Flip", value: "effect-cards" },
      ],
    },
  },
};
