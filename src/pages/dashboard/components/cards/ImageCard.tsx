import { Badge } from "@/common/components/shadcn/ui/badge";

function ImageCard() {
  return (
    <div className="inh rounded-inherit relative h-full w-full overflow-hidden">
      <img
        className="rounded-inherit h-full w-full object-cover object-center"
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
