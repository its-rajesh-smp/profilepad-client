import { useAppSelector } from "@/common/hooks/useAppSelector";
import { debounce } from "@/common/utils/debounce.util";

import { useCallback } from "react";

interface IAutoSaveTextFieldProps {
  children?: React.ReactNode;
  id: string;
  fieldToUpdate: string;
  className?: string;
  onChange?: (id: string, data: any) => void;
  onSave?: (data: any) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  style?: React.CSSProperties;
}

function AutoSaveTextField({
  id,
  fieldToUpdate,
  children,
  className,
  onChange,
  style = {},
  onBlur = () => {},
  onFocus = () => {},
}: IAutoSaveTextFieldProps) {
  const { editMode } = useAppSelector((state) => state.authSlice);

  const debouncedUpdateOnDb = useCallback(
    debounce((value: string) => {
      onChange?.(id, { [fieldToUpdate]: value });
    }, 500),
    [id],
  );

  const onTextChange = (e: any) => {
    const newText = e.target.innerText;
    debouncedUpdateOnDb(newText);
  };

  return (
    <span
      style={style}
      className={`h-full w-full outline-none ${className}`}
      contentEditable={editMode}
      suppressContentEditableWarning
      onInput={onTextChange}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {children}
    </span>
  );
}

export default AutoSaveTextField;
