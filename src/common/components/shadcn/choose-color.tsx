import {
  RadioGroup,
  RadioGroupItem,
} from "@/common/components/shadcn/ui/radio-group";
import { useId } from "react";

export default function ChooseColor({
  className,
  onChange,
  value,
}: {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}) {
  const id = useId();
  return (
    <RadioGroup
      onValueChange={onChange}
      className={`flex gap-1.5 ${className}`}
      defaultValue="#000000"
      value={value}
    >
      <RadioGroupItem
        value="white"
        id={id}
        aria-label="White"
        className="size-6 border-white bg-white !text-black shadow-none data-[state=checked]:border-white data-[state=checked]:bg-white"
      />
      <RadioGroupItem
        value="black"
        id={id}
        aria-label="Black"
        className="size-6 border-black bg-black shadow-none data-[state=checked]:border-black data-[state=checked]:bg-black"
      />

      <RadioGroupItem
        value="blue"
        id={id}
        aria-label="Blue"
        className="size-6 border-blue-500 bg-blue-500 shadow-none data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500"
      />

      <RadioGroupItem
        value="red"
        id={id}
        aria-label="Red"
        className="size-6 border-red-500 bg-red-500 shadow-none data-[state=checked]:border-red-500 data-[state=checked]:bg-red-500"
      />
    </RadioGroup>
  );
}
