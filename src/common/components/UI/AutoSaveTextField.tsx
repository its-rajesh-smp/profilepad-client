import { debounce } from "@/common/utils/debounce.util";
import { useCallback, useRef } from "react";

interface IAutoSaveTextFieldProps {
  children?: React.ReactNode;
  id: string;
  fieldToUpdate: string; // JSON field path, e.g., "metadata.html" or simple field "primaryText"
  className?: string;
  onChange?: (id: string, data: any) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  style?: React.CSSProperties;
  value?: string;
  placeholder?: string;
}

function AutoSaveTextField({
  id,
  fieldToUpdate,
  className,
  onChange,
  style = {},
  onBlur = () => {},
  onFocus = () => {},
  value,
  placeholder,
}: IAutoSaveTextFieldProps) {
  const localRef = useRef(value?.trim() || placeholder);

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
    [id, fieldToUpdate, onChange],
  );

  const onTextChange = (e: any) => {
    const newText = e.target.innerText;
    debouncedUpdateOnDb(newText);
  };

  return (
    <span
      style={style}
      className={`no-drag mb-1 w-full cursor-text rounded-md bg-white px-2 text-left outline-none transition-all duration-300 focus:!bg-zinc-100 ${className}`}
      contentEditable={true}
      suppressContentEditableWarning
      onInput={onTextChange}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {localRef.current}
    </span>
  );
}

export default AutoSaveTextField;
