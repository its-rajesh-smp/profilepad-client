import { Button } from "@/common/components/shadcn/ui/button";
import {
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/common/components/shadcn/ui/drawer";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useContext } from "react";
import { BsX } from "react-icons/bs";
import { updateLayoutItemAct } from "../../action-creators/layout-item.act";
import { editableMetadataFields } from "../../constants/grid-item.const.tsx";
import GridItemContext from "../../context/GridItemContext";
import CardEditSidebarInput from "./UI/CardEditSidebarInput";

function CardEditSidebarContent() {
  const { item } = useContext(GridItemContext);
  const editFields = editableMetadataFields[item.type];
  const { closeSidebar } = useContext(GridItemContext);
  const dispatch = useAppDispatch();

  const onFieldChange = (updatedData: any) => {
    dispatch(
      updateLayoutItemAct(item.id, {
        metadata: { ...(item?.metadata ?? {}), ...updatedData },
      }),
    );
  };

  return (
    <DrawerContent className="w-[100%] md:w-[500px]">
      <DrawerHeader>
        <DrawerTitle className="capitalize">
          <p className="text-2xl">{item.type.replace(/-/g, " ")}</p>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2"
            icon={<BsX />}
            onClick={closeSidebar}
          />
        </DrawerTitle>
      </DrawerHeader>
      <div className="flex flex-col gap-5 p-4">
        {editFields &&
          Object.values(editFields).map((field, index) => {
            return (
              <CardEditSidebarInput
                {...field}
                onFieldChange={onFieldChange}
                key={index}
                metadata={item?.metadata}
              />
            );
          })}
      </div>
    </DrawerContent>
  );
}

export default CardEditSidebarContent;
