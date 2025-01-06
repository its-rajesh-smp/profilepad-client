import { useAppSelector } from "@/common/hooks/useAppSelector";
import { debounce } from "@/common/utils/debounce.util";
import Editor from "@monaco-editor/react";
import { useCallback, useContext, useState } from "react";
import { defaultHtmlCardHtmlValue } from "../../constants/grid-item.const.tsx";
import GridItemContext from "../../context/GridItemContext";
import { updateLayoutItem } from "../../services/layout-item.service";
import { IDashboardCard } from "../../types/dashboard.type";

function HtmlCard({ metadata, id }: IDashboardCard) {
  const isEditMode = useAppSelector((state) => state.authSlice.editMode);
  const [html, setHtml] = useState(metadata?.html ?? defaultHtmlCardHtmlValue);
  const { htmlPreview } = useContext(GridItemContext);

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
    <div className="h-full w-full">
      {htmlPreview && (
        <div
          className="h-full w-full"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      )}

      {!htmlPreview && isEditMode && (
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
