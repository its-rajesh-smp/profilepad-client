import Editor from "@/common/components/Editor/Editor";
import LazyImage from "@/common/components/LazyImage/LazyImage";
import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import { DEFAULT_WORK_EXPERIENCE_IMAGE_SRC } from "@/common/constants/url.const";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import useWebsiteData from "@/common/hooks/useURLPreview";
import { updateAGridItemAct } from "@/pages/dashboard/actions-creators/grid.action";
import { gridItemColorVariants } from "@/pages/dashboard/constants/gid-card-color-schema.const";
import GridItemContext from "@/pages/dashboard/contexts/grid-item.context";
import {
  GridItemColorStyles,
  IMetadataItem,
} from "@/pages/dashboard/types/dashboard-item.type";
import { useContext } from "react";

function WorkExperiencePrimary() {
  const item = useContext(GridItemContext).item;
  const colorSchema = gridItemColorVariants[item.colorVariant || "white"];
  const dispatch = useAppDispatch();

  /**
   * Updates a specific work experience item in the grid item's metadata.
   * Dispatches an action to update the grid item in the store.
   *
   * @param id - The identifier of the metadata item to update.
   * @param dataToUpdate - The new data to merge into the specified metadata item.
   */
  const updateWorkExperience = (id: string, dataToUpdate: any) => {
    dispatch(
      updateAGridItemAct(item.id, {
        metadata: {
          ...(item?.metadata || {}),
          metadataItems: item?.metadata?.metadataItems?.map(
            (metadataItem: any) => {
              if (metadataItem.id === id) {
                return { ...metadataItem, ...dataToUpdate };
              }
              return metadataItem;
            },
          ),
        },
      }),
    );
  };

  return (
    <>
      <div
        className={`flex h-full w-full flex-col gap-3 rounded-2xl border ${colorSchema.backgroundColor} ${colorSchema.primaryTextColor} p-5 transition-all duration-300`}
      >
        <div
          className={`no-drag flex h-full w-full cursor-auto flex-col justify-between gap-5 overflow-hidden bg-inherit text-inherit hover:${colorSchema.secondaryBackgroundColor}`}
        >
          {item?.metadata?.metadataItems?.map((metadataItem: IMetadataItem) => (
            <Experience
              metadataItem={metadataItem}
              colorSchema={colorSchema}
              updateWorkExperience={updateWorkExperience}
              key={metadataItem.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

/**
 * A single experience item in the WorkExperiencePrimary component
 * @param {GridItemColorStyles} colorSchema - The color schema for this component
 * @returns {React.ReactElement} The React element for this component
 */

function Experience({
  colorSchema,
  updateWorkExperience,
  metadataItem,
}: {
  colorSchema: GridItemColorStyles;
  metadataItem: IMetadataItem;
  updateWorkExperience: (id: string, dataToUpdate: any) => void;
}) {
  /**
   * Updates a specific work experience item in the grid item's metadata.
   * Dispatches an action to update the grid item in the store.
   * @param _id - The identifier of the metadata item to update. (Unused)
   * @param dataToUpdate - The new data to merge into the specified metadata item.
   */
  const onTextChange = (_id: string, dataToUpdate: any) => {
    updateWorkExperience(metadataItem.id, dataToUpdate);
  };

  const { websiteLogoUrl } = useWebsiteData(metadataItem?.href || "");

  return (
    <div className="flex h-full w-full justify-between gap-1 bg-inherit text-inherit">
      <div className="flex h-full w-full gap-4">
        <div className="flex h-10 w-10 items-center justify-center">
          <LazyImage
            wrapperClassName="h-full bg-inherit w-full "
            className="rounded-md bg-inherit object-cover"
            src={websiteLogoUrl || DEFAULT_WORK_EXPERIENCE_IMAGE_SRC}
            errorImage={DEFAULT_WORK_EXPERIENCE_IMAGE_SRC}
          />
        </div>
        <div className="w-full flex-1">
          <div className="flex w-full justify-between gap-5">
            <AutoSaveTextField
              onChange={onTextChange}
              id="primaryText"
              fieldToUpdate="primaryText"
              placeholder="www.sharpener.tech"
              className={`!mb-0 text-lg font-semibold ${colorSchema.primaryTextColor}`}
              value={metadataItem.primaryText}
            />
            <AutoSaveTextField
              onChange={onTextChange}
              id="tertiaryText"
              fieldToUpdate="tertiaryText"
              placeholder="2021 - 2022"
              className={`!w-fit text-nowrap text-xs font-semibold ${colorSchema.secondaryTextColor}`}
              value={metadataItem.tertiaryText}
            />
          </div>

          <Editor
            enableFormattingToolbar={true}
            enableSlashMenu={true}
            onChange={(value) =>
              onTextChange(metadataItem.id, { secondaryText: value })
            }
            value={metadataItem.secondaryText}
          />
        </div>
      </div>
    </div>
  );
}

export default WorkExperiencePrimary;
