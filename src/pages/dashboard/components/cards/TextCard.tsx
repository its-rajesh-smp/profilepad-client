import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import { IDashboardCard } from "../../types/dashboard.type";

function TextCard({ id, text }: IDashboardCard) {
  return (
    <div className="flex h-full w-full items-center bg-white p-3 text-xl font-semibold">
      <div className="flex h-full w-full resize-none items-center border-none text-xl shadow-none outline-none focus-visible:ring-0">
        <AutoSaveTextField className="px-2" id={id} fieldToUpdate="text">
          {text ?? ""}
        </AutoSaveTextField>
      </div>
    </div>
  );
}

export default TextCard;
