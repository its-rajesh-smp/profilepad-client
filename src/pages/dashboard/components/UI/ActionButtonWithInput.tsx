import { Button } from "@/common/components/shadcn/ui/button";
import { Input } from "@/common/components/shadcn/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/common/components/shadcn/ui/popover";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { useState } from "react";
import { IoMdRemove } from "react-icons/io";
import { toast } from "sonner";
import { DashboardCardType } from "../../types/dashboard.type";

interface IActionButtonProps {
  onSubmit: (data: { [key: string]: string; type: DashboardCardType }) => void;
  fieldName: string;
  type: DashboardCardType;
  icon?: React.ReactNode;
  triggerClassName?: string;
  tooltipText?: string;
  isRemoveBtn?: boolean | number | string | undefined;
  buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost";
}

function ActionButtonWithInput({
  onSubmit,
  fieldName,
  type,
  icon,
  triggerClassName,
  tooltipText,
  isRemoveBtn,
  buttonVariant = "secondary",
}: IActionButtonProps) {
  const isEditMode = useAppSelector((state) => state.authSlice.editMode);
  const [input, setInput] = useState<string>("");

  const handleButtonClick = (e: any) => {
    e.preventDefault();

    if (input.length === 0) {
      toast.error("Please enter a value");
      return;
    }

    onSubmit({
      [fieldName]: input,
      type,
    });
    setInput("");
  };

  if (!isEditMode) {
    return null;
  }

  if (isRemoveBtn) {
    return (
      <Button
        onClick={() => onSubmit({ [fieldName]: "", type })}
        className={triggerClassName}
        tooltipText={"Remove"}
        variant="destructive"
        size="xs"
        uiType="icon"
        icon={<IoMdRemove />}
      />
    );
  }

  return (
    <Popover>
      <PopoverTrigger className={triggerClassName} asChild>
        <Button
          tooltipText={tooltipText}
          variant={buttonVariant}
          size="xs"
          uiType="icon"
          icon={icon}
        />
      </PopoverTrigger>
      <PopoverContent className="p-0" sideOffset={20}>
        <form className="flex items-center p-1">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="h-full w-full border-0 shadow-none outline-none focus-visible:ring-0"
          />
          <Button onClick={handleButtonClick}>Add</Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}

export default ActionButtonWithInput;
