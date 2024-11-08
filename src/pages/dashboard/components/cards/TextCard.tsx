import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import { updateLayoutItem } from "../../services/layout-item.service";
import { IDashboardCard } from "../../types/dashboard.type";
import FormattingToolbar from "../UI/Toolbars/TextFormattingToolbar";
import { useState } from "react";

function TextCard({ id, text, style = {} }: IDashboardCard) {
  const [isHovered, setIsHovered] = useState(false);
  const [textStyle, setTextStyle] = useState(style ?? {});

  return (
    <div
      onMouseEnter={() => setIsHovered(true)} // Show toolbar on hover
      onMouseLeave={() => setIsHovered(false)} // Hide toolbar on hover exit
      className="flex h-full w-full items-center p-3 hover:bg-zinc-50"
    >
      {isHovered && (
        <FormattingToolbar
          itemId={id}
          setStyle={setTextStyle}
          style={textStyle}
        />
      )}
      <div className="flex h-full w-full resize-none items-center border-none shadow-none outline-none focus-visible:ring-0">
        <AutoSaveTextField
          style={textStyle}
          onChange={updateLayoutItem}
          className="text text-wrap px-2"
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
