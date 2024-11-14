import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import { extractBaseUrl } from "@/common/utils/url.util";
import useCurrentCardLayoutSize from "../../hooks/useCurrentCardLayoutSize";
import { updateLayoutItem } from "../../services/layout-item.service";
import { IDashboardCard, TCardLayoutStyle } from "../../types/dashboard.type";
import VisitWebsite from "../UI/VisitWebsite";
import WebsiteIcon from "../UI/WebsiteIcon";

function LinkCard({ url, text, id }: IDashboardCard) {
  const domain = extractBaseUrl(url ?? "");

  const currentLayoutStyle: TCardLayoutStyle = useCurrentCardLayoutSize(id);

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
            className="h-fit"
            id={id}
          >
            {(text ?? domain) ? domain : "Type here..."}
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
            className="flex items-center"
            id={id}
          >
            {(text ?? domain) ? domain : "Type here..."}
          </AutoSaveTextField>
          <VisitWebsite url={url} />
        </div>
      );

    case "HORIZONTAL_WIDE_RECTANGLE":
      return (
        <div className="flex h-full w-full justify-between gap-3 p-3">
          <div className={`flex w-[50%] flex-col`}>
            <div className="flex justify-between gap-5">
              <WebsiteIcon domain={domain} />
              <VisitWebsite type="button" url={url} />
            </div>

            <div>
              <AutoSaveTextField
                onChange={updateLayoutItem}
                fieldToUpdate="text"
                className="!h-fit"
                id={id}
              >
                {(text ?? domain) ? domain : "Type here..."}
              </AutoSaveTextField>
              <p className="text-xs text-zinc-500">{domain}</p>
            </div>
          </div>
          <img
            src="https://picsum.photos/200"
            className="h-full w-[50%] rounded-xl object-cover"
          />
        </div>
      );

    case "VERTICAL_RECTANGLE":
      return (
        <div className="flex h-full w-full flex-col justify-between gap-3 p-3">
          <div className={`flex flex-col gap-3`}>
            <div className="flex items-center justify-between gap-5">
              <WebsiteIcon domain={domain} />
              <VisitWebsite type="button" url={url} />
            </div>

            <div>
              <AutoSaveTextField
                onChange={updateLayoutItem}
                fieldToUpdate="text"
                className="!h-fit"
                id={id}
              >
                {(text ?? domain) ? domain : "Type here..."}
              </AutoSaveTextField>
              <p className="text-xs text-zinc-500">{domain}</p>
            </div>
          </div>
          <img
            src="https://picsum.photos/200"
            className="h-[30%] w-full rounded-xl object-cover"
          />
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
              className="!h-fit"
              id={id}
            >
              {(text ?? domain) ? domain : "Type here..."}
            </AutoSaveTextField>
          </div>
          <img
            src="https://picsum.photos/200"
            className="h-[60%] w-full rounded-xl object-cover"
          />
        </div>
      );
  }
}

export default LinkCard;
