import { Badge } from "@/common/components/shadcn/ui/badge";
import { IDashboardCard } from "../../types/dashboard.type";

function ImageCard({}: IDashboardCard) {
  return (
    <div className="inh relative h-full w-full overflow-hidden rounded-inherit">
      <img
        className="h-full w-full rounded-inherit object-cover object-center"
        src="https://creatorspace.imgix.net/users/clhd96j6h00s2nt01z0ccjybj/DygSYNZprv7IWvu5-IMG_20240330_163621.jpg?w=750&h=750"
      />
      <div>
        <Badge className="absolute bottom-3 left-3 z-10 mr-3 bg-white text-zinc-500">
          Hello
        </Badge>
      </div>
    </div>
  );
}

export default ImageCard;
