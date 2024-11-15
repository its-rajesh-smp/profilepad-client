import { Badge } from "@/common/components/shadcn/ui/badge";
import { IDashboardCard } from "../../types/dashboard.type";
import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import { updateLayoutItem } from "../../services/layout-item.service";

function ImageCard({ id, text, src }: IDashboardCard) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-inherit">
      <img
        className="h-full w-full rounded-inherit object-cover object-center"
        src={src ?? ""}
      />
      <div>
        <Badge className="absolute bottom-3 left-3 z-10 mr-3 bg-white p-0 text-zinc-500">
          <AutoSaveTextField
            onChange={updateLayoutItem}
            className="px-2"
            id={id}
            fieldToUpdate="text"
          >
            {text ?? "Caption"}
          </AutoSaveTextField>
        </Badge>
      </div>
    </div>
  );
}

export default ImageCard;
