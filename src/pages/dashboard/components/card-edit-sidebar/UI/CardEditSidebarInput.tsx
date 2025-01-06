import { Checkbox } from "@/common/components/shadcn/ui/checkbox";
import { Input } from "@/common/components/shadcn/ui/input";
import MultipleTextInput from "@/common/components/UI/MultipleTextInput";
import {
  IEditableMetadataEdit,
  IMetadata,
} from "@/pages/dashboard/types/dashboard.type";

interface ICardEditSidebarInputProps extends IEditableMetadataEdit {
  onFieldChange: (updatedData: any) => void;
  metadata: IMetadata;
}

function CardEditSidebarInput(props: ICardEditSidebarInputProps) {
  let {
    label,
    type,
    selectOptions,
    field,
    onFieldChange,
    metadata,
    icon,
  }: ICardEditSidebarInputProps = props;

  const currentFieldValue: any = metadata ? metadata[field] : null;

  switch (type) {
    case "text":
      return (
        <div className="flex flex-col items-center gap-1">
          {icon && icon}
          <p className="text-sm font-semibold">{label}</p>
          <Input type="text" />
        </div>
      );
    case "checkbox":
      return (
        <div className="flex items-center gap-2">
          {icon && <p className="text-3xl text-gray-500">{icon}</p>}
          <p className="text-sm font-semibold">{label}</p>
          <Checkbox
            checked={currentFieldValue ? true : false}
            onCheckedChange={(value) => {
              onFieldChange({ [field]: value });
            }}
          />
        </div>
      );
    case "select":
      return (
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            {icon && <p className="text-3xl text-gray-500">{icon}</p>}
            <p className="text-sm font-semibold">{label}</p>
          </div>
          {selectOptions?.map(({ name, value }, index) => {
            let isChecked = false;
            if (currentFieldValue) {
              isChecked = currentFieldValue === value;
            }
            return (
              <div key={index} className="ml-3 flex items-center gap-2">
                <p className="text-xs">{name}</p>
                <Checkbox
                  checked={isChecked}
                  onCheckedChange={() => onFieldChange({ [field]: value })}
                />
              </div>
            );
          })}
        </div>
      );
    case "multiple-text":
      return (
        <MultipleTextInput
          key={field}
          value={currentFieldValue}
          field={field}
          onFieldChange={onFieldChange}
          label={label}
          icon={icon}
        />
      );
    default:
      return null;
  }
}

export default CardEditSidebarInput;
