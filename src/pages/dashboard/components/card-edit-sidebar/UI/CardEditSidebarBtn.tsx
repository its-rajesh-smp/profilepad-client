import { Button } from "@/common/components/shadcn/ui/button";
import { Drawer, DrawerTrigger } from "@/common/components/shadcn/ui/drawer";
import { editableMetadataFields } from "@/pages/dashboard/constants/grid-item.const";
import GridItemContext from "@/pages/dashboard/context/GridItemContext";
import { useContext } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import CardEditSidebarContent from "../CardEditSidebarContent";

function CardEditSidebarBtn({
  setSidebarOpened,
  sidebarOpened,
}: {
  sidebarOpened: boolean;
  setSidebarOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { type } = useContext(GridItemContext).item;
  const editFields = editableMetadataFields[type];

  return (
    editFields && (
      <Drawer open={sidebarOpened} onOpenChange={setSidebarOpened}>
        <DrawerTrigger asChild>
          <Button
            variant="default"
            size="icon"
            icon={<BsThreeDotsVertical />}
          />
        </DrawerTrigger>
        <CardEditSidebarContent />
      </Drawer>
    )
  );
}

export default CardEditSidebarBtn;
