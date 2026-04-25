import { Palette } from "lucide-react";
import { Button } from "../shadcn/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../shadcn/ui/popover";

interface IColorInputProps {
  color: string | undefined;
  handelChange: (color: string) => void;
  triggerClassName?: string;
}

function ColorInput({
  color,
  handelChange,
  triggerClassName,
}: IColorInputProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={`h-8 w-8 ${triggerClassName}`}
        >
          <Palette className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent sideOffset={0} className="w-32 p-2">
        <input
          type="color"
          value={color}
          onChange={(e) => handelChange(e.target.value)}
          className="h-8 w-full"
        />
      </PopoverContent>
    </Popover>
  );
}

export default ColorInput;
