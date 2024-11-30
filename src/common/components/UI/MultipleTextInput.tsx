import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { Button } from "../shadcn/ui/button";
import { Input } from "../shadcn/ui/input";
import { IoMdRemove } from "react-icons/io";

interface IMultipleTextInputProps {
  label?: string;
}
function MultipleTextInput({ label }: IMultipleTextInputProps) {
  const [multipleTexts, setMultipleTexts] = useState<string[]>([]);
  const [text, setText] = useState<string>("");
  return (
    <div className="flex w-full flex-col gap-1">
      <p>{label}</p>
      <div className="flex w-full flex-col gap-1">
        <div className="flex w-full items-center justify-between gap-2">
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            containerClassName="w-full"
            type="text"
          />
          <Button
            type="button"
            onClick={() => {
              setMultipleTexts((prev) => {
                if (text.length === 0) return prev;
                const newMultipleTexts = [...prev];
                newMultipleTexts.push(text);
                setText("");
                return newMultipleTexts;
              });
            }}
            icon={<BsPlus />}
          />
        </div>
        <div className="flex flex-col gap-2">
          {multipleTexts.map((text, index) => (
            <div className="flex items-center gap-2" key={index}>
              <Input
                containerClassName="w-full"
                value={text}
                onChange={(e) => {
                  setMultipleTexts((prev) => {
                    const newMultipleTexts = [...prev];
                    newMultipleTexts[index] = e.target.value;
                    return newMultipleTexts;
                  });
                }}
                type="text"
              />
              <Button
                type="button"
                onClick={() => {
                  setMultipleTexts((prev) =>
                    prev.filter((_, i) => i !== index),
                  );
                }}
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
