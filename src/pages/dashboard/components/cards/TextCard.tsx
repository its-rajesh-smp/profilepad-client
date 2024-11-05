import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import { updateLayoutItem } from "../../services/layout-item.service";
import { IDashboardCard } from "../../types/dashboard.type";

function TextCard({ id, text }: IDashboardCard) {
  return (
    <div className="flex h-full w-full items-center p-3 hover:bg-zinc-50">
      <div className="flex h-full w-full resize-none items-center border-none text-base shadow-none outline-none focus-visible:ring-0">
        <AutoSaveTextField
          onChange={updateLayoutItem}
          className="px-2"
          id={id}
          fieldToUpdate="text"
        >
          {text ?? "Type text here..."}
        </AutoSaveTextField>
      </div>
    </div>
  );
}

export default TextCard;
