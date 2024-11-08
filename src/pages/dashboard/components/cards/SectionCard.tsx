import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import { updateLayoutItem } from "../../services/layout-item.service";
import { IDashboardCard } from "../../types/dashboard.type";

function SectionCard({ id, text }: IDashboardCard) {
  return (
    <div className="flex h-full w-full items-center p-3 text-xl font-semibold">
      <div className="flex h-full w-full resize-none items-center border-none shadow-none outline-none focus-visible:ring-0">
        <AutoSaveTextField
          onChange={updateLayoutItem}
          className="px-2"
          id={id}
          fieldToUpdate="text"
        >
          {text ?? "Type section title here..."}
        </AutoSaveTextField>
      </div>
    </div>
  );
}

export default SectionCard;
