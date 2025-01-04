import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/common/components/shadcn/ui/avatar";
import { BiWorld } from "react-icons/bi";

function WebsiteIcon({ domain }: { domain: string | null }) {
  const faviconUrl = domain
    ? `https://www.google.com/s2/favicons?sz=64&domain=${domain}`
    : "";
  return (
    <Avatar className="rounded-md">
      <div className="rounded-md border p-2">
        <AvatarImage
          className="rounded-inherit"
          src={faviconUrl}
          style={{ mixBlendMode: "multiply" }}
        />
      </div>
      <AvatarFallback className="rounded-inherit">
        <BiWorld />
      </AvatarFallback>
    </Avatar>
  );
}

export default WebsiteIcon;
