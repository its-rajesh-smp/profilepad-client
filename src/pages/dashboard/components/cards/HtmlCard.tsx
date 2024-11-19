import { useAppSelector } from "@/common/hooks/useAppSelector";
import { debounce } from "@/common/utils/debounce.util";
import Editor from "@monaco-editor/react";
import { useCallback, useState } from "react";
import { defaultHtmlCardHtmlValue } from "../../constants/grid-item.const";
import { updateLayoutItem } from "../../services/layout-item.service";
import { IDashboardCard } from "../../types/dashboard.type";
import HtmlToggleBtn from "../UI/Toolbars/HtmlToggleBtn";

function HtmlCard({ metadata, id }: IDashboardCard) {
  const isEditMode = useAppSelector((state) => state.authSlice.editMode);
  const [html, setHtml] = useState(metadata?.html ?? defaultHtmlCardHtmlValue);
  const [isHovered, setIsHovered] = useState(false);
  const [preview, setPreview] = useState(true);

  const updateNestedField = (path: string, value: any) => {
    const keys = path.split(".");
    return keys.reduceRight((acc, key) => ({ [key]: acc }), value);
  };

  const debouncedUpdateOnDb = useCallback(
    debounce((value: string) => {
      const updatedField = updateNestedField("metadata.html", value);
      updateLayoutItem?.(id, updatedField);
      setHtml(value);
    }, 500),
    [id],
  );

  const onTextChange = (value: any) => {
    debouncedUpdateOnDb(value);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)} // Show toolbar on hover
      onMouseLeave={() => setIsHovered(false)} // Hide toolbar on hover exit
      className="h-full w-full"
    >
      {isHovered && isEditMode && (
        <div className="absolute right-0 top-0 z-10">
          <HtmlToggleBtn setPreview={setPreview} preview={preview} />
        </div>
      )}

      {preview && (
        <div
          className="h-full w-full"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      )}

      {!preview && isEditMode && (
        <div className="no-drag h-full w-full">
          <Editor
            defaultLanguage="html"
            defaultValue={html}
            onChange={onTextChange}
          />
        </div>
      )}
    </div>
  );
}

export default HtmlCard;
