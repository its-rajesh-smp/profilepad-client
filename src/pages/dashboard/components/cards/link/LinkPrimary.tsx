import LazyImage from "@/common/components/LazyImage/LazyImage";
import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import useWebsiteData from "@/common/hooks/useURLPreview";
import { updateAGridItemAct } from "@/pages/dashboard/actions-creators/grid.action";
import { gridItemColorVariants } from "@/pages/dashboard/constants/gid-card-color-schema.const";

import { DEFAULT_LINK_PREVIEW_IMAGE_SRC } from "@/common/constants/url.const";
import GridItemContext from "@/pages/dashboard/contexts/grid-item.context";
import { useContext } from "react";
import { BiLink } from "react-icons/bi";
import GithubHitmap from "./github-heatmap/GithubHitmap";

function LinkPrimary() {
  const { item, gridItemSizeVariant } = useContext(GridItemContext);
  const dispatch = useAppDispatch();

  /**
   * Updates the grid item's metadata with the provided data.
   * Dispatches an action to update the grid item in the store.
   * @param dataToUpdate - The data to merge into the grid item's metadata.
   */
  const onTextChange = (_id: string, dataToUpdate: any) => {
    dispatch(
      updateAGridItemAct(item.id, {
        metadata: { ...item.metadata, ...dataToUpdate },
      }),
    );
  };
  const { websiteLogoUrl, websitePreviewUrl, websiteType } = useWebsiteData(
    item?.metadata?.href,
  );

  const colorSchema = gridItemColorVariants[item.colorVariant || "white"];

  const renderContent = (textSize: string) => (
    <div className="flex flex-col">
      <AutoSaveTextField
        id="primaryText"
        fieldToUpdate="primaryText"
        className={`bg-inherit ${textSize} font-semibold ${colorSchema.primaryTextColor}`}
        placeholder={"Google"}
        value={item?.metadata?.primaryText}
        onChange={onTextChange}
      />
      <AutoSaveTextField
        id="secondaryText"
        fieldToUpdate="secondaryText"
        className={`bg-inherit text-xs ${colorSchema.secondaryTextColor}`}
        placeholder={"google.com"}
        value={item?.metadata?.secondaryText}
        onChange={onTextChange}
      />
    </div>
  );

  const renderIcon = () => {
    return (
      <div
        className={`h-fit w-fit rounded-lg ${!websiteLogoUrl && "border p-3"} ${colorSchema.borderColor}`}
      >
        {!websiteLogoUrl && (
          <BiLink className={`text-xl ${colorSchema.iconColor}`} />
        )}

        {websiteLogoUrl && (
          <LazyImage
            className={`!h-10 !w-10 rounded-lg`}
            src={websiteLogoUrl}
          />
        )}
      </div>
    );
  };

  const renderAdditionalContent = () => {
    if (websiteType === "github") {
      return (
        <div className="flex h-full w-full items-end justify-center">
          <GithubHitmap href={item?.metadata?.href} />
        </div>
      );
    }

    return (
      <LazyImage
        wrapperClassName="h-full w-full"
        className="h-full w-full rounded-2xl object-cover"
        src={
          item?.metadata?.previewImgSrc ||
          websitePreviewUrl ||
          DEFAULT_LINK_PREVIEW_IMAGE_SRC
        }
      />
    );
  };

  if (gridItemSizeVariant === "2x2") {
    return (
      <div
        className={`flex h-full w-full flex-col gap-2 rounded-2xl border p-5 ${colorSchema.backgroundColor} transition-all duration-300`}
      >
        {renderIcon()}
        {renderContent("text-sm")}
      </div>
    );
  }

  if (gridItemSizeVariant === "1x100") {
    return (
      <div
        className={`flex h-full w-full gap-5 rounded-2xl border p-5 ${colorSchema.backgroundColor} transition-all duration-300`}
      >
        {renderIcon()}
        {renderContent("text-sm")}
      </div>
    );
  }

  if (gridItemSizeVariant === "1x4") {
    return (
      <div
        className={`flex h-full w-full items-center gap-5 rounded-2xl border p-5 ${colorSchema.backgroundColor} transition-all duration-300`}
      >
        {renderIcon()}
        {renderContent("text-sm")}
      </div>
    );
  }

  if (gridItemSizeVariant === "4x4") {
    return (
      <div
        className={`flex h-full w-full flex-col gap-5 rounded-2xl border p-5 ${colorSchema.backgroundColor} transition-all duration-300`}
      >
        <div className="flex items-center gap-4">
          {renderIcon()}
          {renderContent("text-sm")}
        </div>
        {renderAdditionalContent()}
      </div>
    );
  }
}

export default LinkPrimary;
