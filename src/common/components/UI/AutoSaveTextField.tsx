import { useAppSelector } from "@/common/hooks/useAppSelector";
import { debounce } from "@/common/utils/debounce.util";
import { useCallback, useRef } from "react";

interface IAutoSaveTextFieldProps {
  children?: React.ReactNode;
  id: string;
  fieldToUpdate: string;
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
  const { isAuthenticated } = useAppSelector((state) => state.authSlice);
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

      if (updatedField[fieldToUpdate].trim() === "") {
        updatedField[fieldToUpdate] = undefined;
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
      className={`no-drag mb-1 w-full cursor-text rounded-md text-left outline-none transition-all duration-300 ${className} `}
      contentEditable={isAuthenticated}
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
