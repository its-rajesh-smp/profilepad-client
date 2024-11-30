import { Checkbox } from "@/common/components/shadcn/ui/checkbox";
import { Input } from "@/common/components/shadcn/ui/input";
import MultipleTextInput from "@/common/components/UI/MultipleTextInput";
import { IEditableMetadataEdit } from "@/pages/dashboard/types/dashboard.type";

interface ICardEditSidebarInputProps extends IEditableMetadataEdit {}

function CardEditSidebarInput({
  label,
  type,
  selectOptions,
}: ICardEditSidebarInputProps) {
  switch (type) {
    case "text":
      return (
        <div className="flex flex-col gap-1">
          <p>{label}</p>
          <Input type="text" />
        </div>
      );
    case "checkbox":
      return (
        <div className="flex items-center gap-2">
          <p>{label}</p>
          <Checkbox />
        </div>
      );
    case "select":
      return (
        <div className="flex flex-col gap-1">
          <p>{label}</p>
          {selectOptions?.map(({ name }) => (
            <div className="ml-3 flex items-center gap-2">
              <p className="text-xs">{name}</p>
              <Checkbox />
            </div>
          ))}
        </div>
      );
    case "multiple-text":
      return <MultipleTextInput label={label} />;
    default:
      return null;
  }
}

export default CardEditSidebarInput;
