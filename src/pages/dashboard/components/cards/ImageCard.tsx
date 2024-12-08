import LazyImage from "@/common/components/LazyImage/LazyImage";
import { Badge } from "@/common/components/shadcn/ui/badge";
import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { BiImage } from "react-icons/bi";
import useCurrentCardLayoutSize from "../../hooks/useCurrentCardLayoutSize";
import { updateALayoutItem } from "../../reducers/layout-items.reducer";
import { updateLayoutItem } from "../../services/layout-item.service";
import { IDashboardCard, TCardLayoutStyle } from "../../types/dashboard.type";
import ActionButtonWithInput from "../UI/ActionButtonWithInput";

function ImageCard({ id, text, src }: IDashboardCard) {
  const dispatch = useAppDispatch();
  const currentLayoutStyle: TCardLayoutStyle = useCurrentCardLayoutSize(id);
  // On Save Image
  const onSaveBtnClick = async (data: any) => {
    const response = await updateLayoutItem(id, data);
    dispatch(updateALayoutItem(response.data));
  };

  switch (currentLayoutStyle) {
    case "MINI":
      return (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-inherit">
          <LazyImage
            wrapperClassName="!flex p-2 h-full w-full items-center justify-center"
            className="flex h-full w-full rounded-inherit object-scale-down object-center"
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
        </div>
      );
    default:
      return (
        <div className="relative h-full w-full overflow-hidden rounded-inherit">
          <LazyImage
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
}

export default ImageCard;
