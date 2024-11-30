import {
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/common/components/shadcn/ui/drawer";
import { useContext } from "react";
import { editableMetadataFields } from "../../constants/grid-item.const";
import GridItemContext from "../../context/GridItemContext";
import CardEditSidebarInput from "./UI/CardEditSidebarInput";
import { Button } from "@/common/components/shadcn/ui/button";

function CardEditSidebarContent() {
  const { type } = useContext(GridItemContext).item;
  const editFields = editableMetadataFields[type];

  return (
    <DrawerContent className="w-[30%]">
      <DrawerHeader>
        <DrawerTitle className="capitalize">
          {type.replace(/-/g, " ")}
        </DrawerTitle>
      </DrawerHeader>
      <div className="flex flex-col gap-4 p-4">
        {editFields &&
          Object.values(editFields).map((field, index) => {
            return <CardEditSidebarInput {...field} key={index} />;
          })}
      </div>
      <DrawerFooter>
        <Button variant="default" onClick={() => {}}>
          Save
        </Button>
      </DrawerFooter>
    </DrawerContent>
  );
}

export default CardEditSidebarContent;
