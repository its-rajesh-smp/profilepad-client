import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/common/components/shadcn/ui/avatar";
import { BiWorld } from "react-icons/bi";

import { extractBaseUrl } from "@/common/utils/url.util";
import { Button } from "@/common/components/shadcn/ui/button";

function LinkCard({ link }: { link: string }) {
  const url = extractBaseUrl(link);

  return (
    <div className="flex h-full w-full flex-col justify-between gap-2 p-3">
      <div>
        {/* Website's Icon */}
        <Avatar className="rounded-md">
          <AvatarImage className="rounded-inherit" src={url ?? ""} />
          <AvatarFallback className="rounded-inherit">
            <BiWorld />
          </AvatarFallback>
        </Avatar>

        {/* Website's Name */}
        <p className="mt-3">Shadcn</p>
        <p>{url}</p>
      </div>
      <Button className="w-fit">Visit</Button>

      {/* Website's Content */}
      {/* <img
        className="h-full w-full flex-1 rounded-2xl object-cover object-center"
        src="https://creatorspace.imgix.net/users/clhd96j6h00s2nt01z0ccjybj/DygSYNZprv7IWvu5-IMG_20240330_163621.jpg?w=750&h=750"
      /> */}
    </div>
  );
}

export default LinkCard;
