import { Badge } from "@/common/components/shadcn/ui/badge";
import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { BiImage } from "react-icons/bi";
import { updateALayoutItem } from "../../reducers/layout-items.reducer";
import { updateLayoutItem } from "../../services/layout-item.service";
import { IDashboardCard } from "../../types/dashboard.type";
import ActionButtonWithInput from "../UI/ActionButtonWithInput";

function ImageCard({ id, text, src }: IDashboardCard) {
  const dispatch = useAppDispatch();

  // On Save Image
  const onSaveBtnClick = async (data: any) => {
    const response = await updateLayoutItem(id, data);
    dispatch(updateALayoutItem(response.data));
  };

  return (
    <div className="relative h-full w-full overflow-hidden rounded-inherit">
      <img
        className="h-full w-full rounded-inherit object-cover object-center"
        src={src ?? ""}
      />
      <ActionButtonWithInput
        onSubmit={onSaveBtnClick}
        tooltipText="Update profile image"
        fieldName="src"
        type="image"
        triggerClassName=" no-drag absolute bottom-2 right-2"
        icon={<BiImage />}
      />
      <div>
        <Badge className="absolute bottom-3 left-3 z-10 mr-3 bg-white p-0 text-zinc-500">
          <AutoSaveTextField
            onChange={updateLayoutItem}
            className="px-2"
            id={id}
            fieldToUpdate="text"
          >
            {text ?? "Caption"}
          </AutoSaveTextField>
        </Badge>
      </div>
    </div>
  );
}

export default ImageCard;
