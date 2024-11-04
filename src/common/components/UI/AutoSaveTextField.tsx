import { debounce } from "@/common/heplers/debounce";
import { updateLayoutItem } from "@/pages/dashboard/services/layout-item.service";

import { useCallback } from "react";

interface IAutoSaveTextFieldProps {
  children?: React.ReactNode;
  id: string;
  fieldToUpdate: string;
  className?: string;
}

function AutoSaveTextField({
  id,
  fieldToUpdate,
  children,
  className,
}: IAutoSaveTextFieldProps) {
  const debouncedUpdateOnDb = useCallback(
    debounce((value: string) => {
      updateLayoutItem(id, { [fieldToUpdate]: value });
    }, 500),
    [id],
  );

  const onTextChange = (e: any) => {
    const newText = e.target.innerText;
    debouncedUpdateOnDb(newText);
  };

  return (
    <span
      className={`h-full w-full ${className}`}
      contentEditable
      suppressContentEditableWarning
      onInput={onTextChange}
    >
      {children}
    </span>
  );
}

export default AutoSaveTextField;
