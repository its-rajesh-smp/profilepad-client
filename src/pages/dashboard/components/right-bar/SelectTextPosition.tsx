import { AlignCenter, AlignLeft, AlignRight } from "lucide-react";

function SelectTextPosition() {
  return (
    <div className="flex flex-row gap-5">
      <AlignLeft
        data-state="checked"
        className="h-5 w-5 text-secondary data-[state=checked]:text-blue-500"
      />
      <AlignCenter className="h-5 w-5 text-secondary data-[state=checked]:text-blue-500" />
      <AlignRight className="h-5 w-5 text-secondary data-[state=checked]:text-blue-500" />
    </div>
  );
}

export default SelectTextPosition;
