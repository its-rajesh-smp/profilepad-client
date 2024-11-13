import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import { updateLayoutItem } from "../../services/layout-item.service";
import { IDashboardCard } from "../../types/dashboard.type";
import FormattingToolbar from "../UI/Toolbars/TextFormattingToolbar";
import { useState } from "react";

function TextCard({ id, text, style = {} }: IDashboardCard) {
  const [isHovered, setIsHovered] = useState(false);
  const [textStyle, setTextStyle] = useState(style ?? {});
  const [isFocused, setIsFocused] = useState(false); // Track if the text field is focused

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

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
      <div
        className={`flex h-full w-full resize-none items-center border-none shadow-none outline-none focus-visible:ring-0 ${
          isFocused ? "overflow-y-auto" : "overflow-hidden" // Show scroll only on focus
        }`}
        onClick={handleFocus} // Trigger focus on click
      >
        <AutoSaveTextField
          style={textStyle}
          onChange={updateLayoutItem}
          className="text h-full text-wrap px-2"
          id={id}
          fieldToUpdate="text"
          onFocus={handleFocus} // Show scroll on focus
          onBlur={handleBlur} // Hide scroll when focus is lost
        >
          {text ?? "Type text here..."}
        </AutoSaveTextField>
      </div>
    </div>
  );
}

export default TextCard;
