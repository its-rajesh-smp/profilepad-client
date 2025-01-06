import { debounce } from "lodash";
import { useCallback, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { IoMdRemove } from "react-icons/io";
import { toast } from "sonner";
import { Button } from "../shadcn/ui/button";
import { Input } from "../shadcn/ui/input";

interface IMultipleTextInputProps {
  label?: string;
  onFieldChange: (updatedData: any) => void;
  value?: string[];
  field: string;
  icon?: React.ReactNode;
}

function MultipleTextInput({
  label,
  onFieldChange,
  field,
  value,
  icon,
}: IMultipleTextInputProps) {
  const [multipleTexts, setMultipleTexts] = useState<string[]>(value ?? []);
  const [text, setText] = useState<string>("");

  const debouncedUpdateOnDb = useCallback(
    debounce((value: string[]) => {
      onFieldChange({ [field]: value });
    }, 500),
    [field],
  );

  const onEntryAdd = (e: any) => {
    e.preventDefault();

    if (text.length === 0) {
      return toast.error("Please enter a value");
    }

    setMultipleTexts((prev) => {
      const newMultipleTexts = [...prev];
      newMultipleTexts.push(text);
      return newMultipleTexts;
    });

    setText("");
    onFieldChange({ [field]: [...multipleTexts, text] });
  };

  const onEntryRemove = (e: any, index: number) => {
    e.preventDefault();
    setMultipleTexts((prev) => prev.filter((_, i) => i !== index));
    onFieldChange({ [field]: multipleTexts.filter((_, i) => i !== index) });
  };

  const onEntryUpdate = (e: any, index: number) => {
    setMultipleTexts((prev) => {
      const newMultipleTexts = [...prev];
      newMultipleTexts[index] = e.target.value;
      return newMultipleTexts;
    });

    const newMultipleTexts = [...multipleTexts];
    newMultipleTexts[index] = e.target.value;

    debouncedUpdateOnDb(newMultipleTexts);
  };

  return (
    <div className="flex w-full flex-col gap-1">
      <div className="flex items-center gap-2">
        {icon && <p className="text-3xl text-gray-500">{icon}</p>}
        <p className="text-sm font-semibold">{label}</p>
      </div>
      <div className="flex w-full flex-col gap-1">
        <div className="flex w-full items-center justify-between gap-2">
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            containerClassName="w-full"
            type="text"
          />
          <Button type="button" onClick={onEntryAdd} icon={<BsPlus />} />
        </div>
        <div className="flex flex-col gap-2">
          {multipleTexts.map((text, index) => (
            <div className="flex items-center gap-2" key={index}>
              <Input
                containerClassName="w-full"
                value={text}
                onChange={(e: any) => onEntryUpdate(e, index)}
                type="text"
              />
              <Button
                type="button"
                onClick={(e: any) => onEntryRemove(e, index)}
                size="xs"
                variant="destructive"
                icon={<IoMdRemove />}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MultipleTextInput;
