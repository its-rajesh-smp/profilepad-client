import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import { useContext } from "react";
import GridItemContext from "../../context/gridItemContext";
import { updateLayoutItem } from "../../services/layout-item.service";
import { IDashboardCard } from "../../types/dashboard.type";

function TextCard({ id, text }: IDashboardCard) {
  const textStyle = useContext(GridItemContext).itemStyle;
  return (
    <div className="flex h-full w-full items-center p-3 hover:bg-zinc-50">
      <div
        className={`flex h-full w-full resize-none items-center border-none shadow-none outline-none focus-visible:ring-0`}
      >
        <AutoSaveTextField
          style={textStyle}
          onChange={updateLayoutItem}
          className="text h-full text-wrap px-2"
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
