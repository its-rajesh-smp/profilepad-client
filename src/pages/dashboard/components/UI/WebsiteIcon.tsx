import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/common/components/shadcn/ui/avatar";
import { BiWorld } from "react-icons/bi";

function WebsiteIcon({ domain }: { domain: string | null }) {
  return (
    <Avatar className="rounded-md">
      <AvatarImage className="rounded-inherit" src={`${domain}/favicon.ico`} />
      <AvatarFallback className="rounded-inherit">
        <BiWorld />
      </AvatarFallback>
    </Avatar>
  );
}

export default WebsiteIcon;
