import {
  RadioGroup,
  RadioGroupItem,
} from "@/common/components/shadcn/ui/radio-group";
import { useId } from "react";

export default function ChooseColor({ className }: { className?: string }) {
  const id = useId();
  return (
    <RadioGroup className={`flex gap-1.5 ${className}`} defaultValue="blue">
      <RadioGroupItem
        value="zinc"
        id={id}
        aria-label="Zinc"
        className="size-6 border-zinc-500 bg-zinc-500 shadow-none data-[state=checked]:border-zinc-500 data-[state=checked]:bg-zinc-500"
      />
      <RadioGroupItem
        value="blue"
        id={id}
        aria-label="Blue"
        className="size-6 border-blue-500 bg-blue-500 shadow-none data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500"
      />
      <RadioGroupItem
        value="indigo"
        id={id}
        aria-label="Indigo"
        className="size-6 border-indigo-500 bg-indigo-500 shadow-none data-[state=checked]:border-indigo-500 data-[state=checked]:bg-indigo-500"
      />
      <RadioGroupItem
        value="pink"
        id={id}
        aria-label="Pink"
        className="size-6 border-pink-500 bg-pink-500 shadow-none data-[state=checked]:border-pink-500 data-[state=checked]:bg-pink-500"
      />
      <RadioGroupItem
        value="red"
        id={id}
        aria-label="red"
        className="size-6 border-red-500 bg-red-500 shadow-none data-[state=checked]:border-red-500 data-[state=checked]:bg-red-500"
      />
      <RadioGroupItem
        value="orange"
        id={id}
        aria-label="orange"
        className="size-6 border-orange-500 bg-orange-500 shadow-none data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500"
      />
      <RadioGroupItem
        value="amber"
        id={id}
        aria-label="amber"
        className="size-6 border-amber-500 bg-amber-500 shadow-none data-[state=checked]:border-amber-500 data-[state=checked]:bg-amber-500"
      />
      <RadioGroupItem
        value="emerald"
        id={id}
        aria-label="emerald"
        className="size-6 border-emerald-500 bg-emerald-500 shadow-none data-[state=checked]:border-emerald-500 data-[state=checked]:bg-emerald-500"
      />
    </RadioGroup>
  );
}
