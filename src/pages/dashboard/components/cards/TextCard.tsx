import { debounce } from "@/common/heplers/debounce";
import { useCallback } from "react";
import { updateLayoutItem } from "../../services/layout_item.service";
import { IDashboardCard } from "../../types/dashboard.type";

function TextCard({ id, text }: IDashboardCard) {
  // Debounce function initialized only once
  const debouncedUpdateOnDb = useCallback(
    debounce((value: string) => {
      updateLayoutItem(id, { text: value });
    }, 500),
    [id],
  );

  const onTextChange = (e: any) => {
    const newText = e.target.innerText;
    debouncedUpdateOnDb(newText);
  };

  return (
    <div className="flex h-full w-full items-center bg-white p-3 text-xl font-semibold">
      <div className="flex h-full w-full resize-none items-center border-none text-xl shadow-none outline-none focus-visible:ring-0">
        <span
          contentEditable
          suppressContentEditableWarning
          onInput={onTextChange}
        >
          {text}
        </span>
      </div>
    </div>
  );
}

export default TextCard;
