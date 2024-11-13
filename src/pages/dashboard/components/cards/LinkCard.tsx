import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/common/components/shadcn/ui/avatar";
import { BiWorld } from "react-icons/bi";

import { Button } from "@/common/components/shadcn/ui/button";
import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import { extractBaseUrl } from "@/common/utils/url.util";
import { IDashboardCard, TCardLayoutStyle } from "../../types/dashboard.type";
import { updateLayoutItem } from "../../services/layout-item.service";
import useCurrentCardLayoutSize from "../../hooks/useCurrentCardLayoutSize";

function LinkCard({ url, text, id }: IDashboardCard) {
  const domain = extractBaseUrl(url ?? "");

  const currentLayoutStyle: TCardLayoutStyle = useCurrentCardLayoutSize(id);

  /**
   * Opens the specified URL in a new browser tab.
   */
  const onBtnClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div
      className={`flex h-full w-full justify-between gap-2 p-3 ${currentLayoutStyle !== "HORIZONTAL_RECTANGLE" && "lg:flex-col"}`}
    >
      <div
        className={`${currentLayoutStyle === "HORIZONTAL_RECTANGLE" && "flex items-center gap-3"}`}
      >
        {/* Website's Icon */}
        <Avatar className="rounded-md">
          <AvatarImage
            className="rounded-inherit"
            src={`${domain}/favicon.ico`}
          />
          <AvatarFallback className="rounded-inherit">
            <BiWorld />
          </AvatarFallback>
        </Avatar>

        {/* Website's Name */}
        <p
          className={`${currentLayoutStyle !== "HORIZONTAL_RECTANGLE" && "m-0"}`}
        >
          <AutoSaveTextField
            onChange={updateLayoutItem}
            fieldToUpdate="text"
            id={id}
          >
            {text ?? "Type your name here"}
          </AutoSaveTextField>
        </p>
        {currentLayoutStyle !== "HORIZONTAL_RECTANGLE" && (
          <>
            <p className="text-xs text-gray-400">{domain}</p>
          </>
        )}
      </div>
      <Button onClick={onBtnClick} className="no-drag w-fit">
        Visit
      </Button>

      {/* Website's Content */}
      {/* <img
        className="h-full w-full flex-1 rounded-2xl object-cover object-center"
        src="https://creatorspace.imgix.net/users/clhd96j6h00s2nt01z0ccjybj/DygSYNZprv7IWvu5-IMG_20240330_163621.jpg?w=750&h=750"
      /> */}
    </div>
  );
}

export default LinkCard;
