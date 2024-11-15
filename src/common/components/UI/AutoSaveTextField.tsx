import { useAppSelector } from "@/common/hooks/useAppSelector";
import { debounce } from "@/common/utils/debounce.util";
import { useCallback } from "react";

interface IAutoSaveTextFieldProps {
  children?: React.ReactNode;
  id: string;
  fieldToUpdate: string; // JSON field path, e.g., "metadata.html" or simple field "primaryText"
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

  // Utility to update nested JSON field
  const updateNestedField = (path: string, value: any) => {
    const keys = path.split(".");
    return keys.reduceRight((acc, key) => ({ [key]: acc }), value);
  };

  const debouncedUpdateOnDb = useCallback(
    debounce((value: string) => {
      let updatedField;
      if (fieldToUpdate.includes(".")) {
        // Update nested JSON field
        updatedField = updateNestedField(fieldToUpdate, value);
      } else {
        // Update simple field
        updatedField = { [fieldToUpdate]: value };
      }
      onChange?.(id, updatedField);
    }, 500),
    [id, fieldToUpdate],
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
