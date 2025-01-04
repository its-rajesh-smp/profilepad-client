import LazyImage from "@/common/components/LazyImage/LazyImage";
import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import { RANDOM_IMAGE_SRC } from "@/common/constants/url.const";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { getURLPreview } from "@/common/utils/browser.util";
import { extractBaseUrl } from "@/common/utils/url.util";
import { useEffect, useState } from "react";
import { BiImage } from "react-icons/bi";
import useCurrentCardLayoutSize from "../../../hooks/useCurrentCardLayoutSize";
import { updateALayoutItem } from "../../../reducers/layout-items.reducer";
import { updateLayoutItem } from "../../../services/layout-item.service";
import {
  IDashboardCard,
  TCardLayoutStyle,
} from "../../../types/dashboard.type";
import ActionButtonWithInput from "../../UI/ActionButtonWithInput";
import VisitWebsite from "../../UI/VisitWebsite";
import WebsiteIcon from "../../UI/WebsiteIcon";

function DefaultLinkCard({ url, text, id, src }: IDashboardCard) {
  const dispatch = useAppDispatch();
  const domain = extractBaseUrl(url ?? "");
  const currentLayoutStyle: TCardLayoutStyle = useCurrentCardLayoutSize(id);
  const [urlPreview, setUrlPreview] = useState<string | null>(null);

  // On Save Image
  const onSaveBtnClick = async (data: any) => {
    const response = await updateLayoutItem(id, data);
    dispatch(updateALayoutItem(response.data));
  };

  useEffect(() => {
    (async () => {
      const data = await getURLPreview(url);
      setUrlPreview(data?.data?.data?.image?.url);
    })();
  }, [url, currentLayoutStyle]);

  // Link Preview
  const previewImageSrc = src?.length ? src : (urlPreview ?? RANDOM_IMAGE_SRC);

  switch (currentLayoutStyle) {
    case "SMALL_SQUARE":
      return (
        <div className={`flex h-full w-full flex-col gap-2 p-3`}>
          <div className="flex items-center justify-between">
            <WebsiteIcon domain={domain} />
            <VisitWebsite url={url} />
          </div>
          <AutoSaveTextField
            onChange={updateLayoutItem}
            fieldToUpdate="text"
            className="h-fit text-sm"
            id={id}
          >
            {text ? text : domain ? domain : "Type here..."}
          </AutoSaveTextField>
          <p className="text-xs text-zinc-500">{domain}</p>
        </div>
      );

    case "HORIZONTAL_RECTANGLE":
      return (
        <div className={`flex h-full w-full items-center gap-4 p-3`}>
          <WebsiteIcon domain={domain} />

          <AutoSaveTextField
            onChange={updateLayoutItem}
            fieldToUpdate="text"
            className="flex items-center text-sm"
            id={id}
          >
            {text ? text : domain ? domain : "Type here..."}
          </AutoSaveTextField>
          <VisitWebsite url={url} />
        </div>
      );

    case "HORIZONTAL_WIDE_RECTANGLE":
      return (
        <div className="flex h-full w-full justify-between gap-3 p-3">
          <div className={`flex w-[50%] flex-col justify-between`}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <WebsiteIcon domain={domain} />
                <p className="text-xs text-zinc-500">{domain}</p>
              </div>

              <div>
                <AutoSaveTextField
                  onChange={updateLayoutItem}
                  fieldToUpdate="text"
                  className="!h-fit text-sm"
                  id={id}
                >
                  {text ? text : domain ? domain : "Type here..."}
                </AutoSaveTextField>
              </div>
            </div>
            <VisitWebsite type="button" url={url} />
          </div>
          <div className="relative h-full w-[50%]">
            <LazyImage
              src={previewImageSrc}
              className="h-full w-full rounded-xl object-cover"
            />
            <ActionButtonWithInput
              isRemoveBtn={src ? true : false}
              onSubmit={onSaveBtnClick}
              tooltipText="Update profile image"
              fieldName="src"
              type="link"
              triggerClassName=" no-drag absolute bottom-2 right-2"
              icon={<BiImage />}
            />
          </div>
        </div>
      );

    case "VERTICAL_RECTANGLE":
      return (
        <div className="flex h-full w-full flex-col justify-between gap-3 p-3">
          <div className={`flex flex-col gap-3`}>
            <div className="flex items-center justify-between gap-5">
              <WebsiteIcon domain={domain} />
              <VisitWebsite url={url} />
            </div>

            <div>
              <AutoSaveTextField
                onChange={updateLayoutItem}
                fieldToUpdate="text"
                className="!h-fit text-sm"
                id={id}
              >
                {text ? text : domain ? domain : "Type here..."}
              </AutoSaveTextField>
              <p className="text-xs text-zinc-500">{domain}</p>
            </div>
          </div>
          <div className="relative h-[30%] w-full">
            <LazyImage
              src={previewImageSrc}
              className="h-full w-full rounded-xl object-cover"
            />
            <ActionButtonWithInput
              isRemoveBtn={src ? true : false}
              onSubmit={onSaveBtnClick}
              tooltipText="Update profile image"
              fieldName="src"
              type="link"
              triggerClassName=" no-drag absolute bottom-2 right-2"
              icon={<BiImage />}
            />
          </div>
        </div>
      );

    case "LARGE_SQUARE":
      return (
        <div className="flex h-full w-full flex-col justify-between gap-3 p-3">
          <div className={`flex flex-col gap-3`}>
            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-2">
                <WebsiteIcon domain={domain} />
                <p className="text-xs text-zinc-500">{domain}</p>
              </div>
              <VisitWebsite type="button" url={url} />
            </div>

            <AutoSaveTextField
              onChange={updateLayoutItem}
              fieldToUpdate="text"
              className="!h-fit text-sm"
              id={id}
            >
              {text ? text : domain ? domain : "Type here..."}
            </AutoSaveTextField>
          </div>
          <div className="relative h-[60%] w-full">
            <LazyImage
              src={previewImageSrc}
              className="h-full w-full rounded-xl object-cover"
            />
            <ActionButtonWithInput
              isRemoveBtn={src ? true : false}
              onSubmit={onSaveBtnClick}
              tooltipText="Update profile image"
              fieldName="src"
              type="link"
              triggerClassName=" no-drag absolute bottom-2 right-2"
              icon={<BiImage />}
            />
          </div>
        </div>
      );
  }
}

export default DefaultLinkCard;
