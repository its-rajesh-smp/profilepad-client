import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useState } from "react";
import { defaultHtmlCardHtmlValue } from "../../constants/grid-item.const";
import { updateLayoutItem } from "../../services/layout-item.service";
import { IDashboardCard } from "../../types/dashboard.type";
import HtmlToggleBtn from "../UI/Toolbars/HtmlToggleBtn";

function HtmlCard({ metadata, id }: IDashboardCard) {
  const [isHovered, setIsHovered] = useState(false);
  const [preview, setPreview] = useState(true);
  const dispatch = useAppDispatch();

  const onChange = async (id: string, data: any) => {
    try {
      await updateLayoutItem(id, data);
    } catch (error) {}
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)} // Show toolbar on hover
      onMouseLeave={() => setIsHovered(false)} // Hide toolbar on hover exit
      className="h-full w-full"
    >
      {isHovered && (
        <div className="absolute right-0 top-0 z-10 p-2">
          <HtmlToggleBtn setPreview={setPreview} preview={preview} />
        </div>
      )}

      {preview && (
        <div
          className="h-full w-full"
          dangerouslySetInnerHTML={{
            __html: metadata?.html ?? defaultHtmlCardHtmlValue,
          }}
        />
      )}

      {!preview && (
        <AutoSaveTextField
          onChange={onChange}
          id={id}
          fieldToUpdate="metadata.html"
        >
          {metadata?.html ?? defaultHtmlCardHtmlValue}
        </AutoSaveTextField>
      )}
    </div>
  );
}

export default HtmlCard;
