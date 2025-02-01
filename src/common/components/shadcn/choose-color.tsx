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
        value="#FFFFFF"
        id={id}
        aria-label="White"
        className="size-6 border-white bg-white !text-black shadow-none data-[state=checked]:border-white data-[state=checked]:bg-white"
      />
      <RadioGroupItem
        value="#000000"
        id={id}
        aria-label="Black"
        className="size-6 border-black bg-black shadow-none data-[state=checked]:border-black data-[state=checked]:bg-black"
      />
      <RadioGroupItem
        value="#71717A"
        id={id}
        aria-label="Zinc"
        className="size-6 border-zinc-500 bg-zinc-500 shadow-none data-[state=checked]:border-zinc-500 data-[state=checked]:bg-zinc-500"
      />
      <RadioGroupItem
        value="#3B82F6"
        id={id}
        aria-label="Blue"
        className="size-6 border-blue-500 bg-blue-500 shadow-none data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500"
      />
      <RadioGroupItem
        value="#6366F1"
        id={id}
        aria-label="Indigo"
        className="size-6 border-indigo-500 bg-indigo-500 shadow-none data-[state=checked]:border-indigo-500 data-[state=checked]:bg-indigo-500"
      />
      <RadioGroupItem
        value="#EC4899"
        id={id}
        aria-label="Pink"
        className="size-6 border-pink-500 bg-pink-500 shadow-none data-[state=checked]:border-pink-500 data-[state=checked]:bg-pink-500"
      />
      <RadioGroupItem
        value="#EF4444"
        id={id}
        aria-label="Red"
        className="size-6 border-red-500 bg-red-500 shadow-none data-[state=checked]:border-red-500 data-[state=checked]:bg-red-500"
      />
      <RadioGroupItem
        value="#F97316"
        id={id}
        aria-label="Orange"
        className="size-6 border-orange-500 bg-orange-500 shadow-none data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500"
      />
      <RadioGroupItem
        value="#F59E0B"
        id={id}
        aria-label="Amber"
        className="size-6 border-amber-500 bg-amber-500 shadow-none data-[state=checked]:border-amber-500 data-[state=checked]:bg-amber-500"
      />
      <RadioGroupItem
        value="#10B981"
        id={id}
        aria-label="Emerald"
        className="size-6 border-emerald-500 bg-emerald-500 shadow-none data-[state=checked]:border-emerald-500 data-[state=checked]:bg-emerald-500"
      />
    </RadioGroup>
  );
}
