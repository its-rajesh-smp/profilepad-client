import { Button } from "@/common/components/shadcn/ui/button";
import { Drawer, DrawerTrigger } from "@/common/components/shadcn/ui/drawer";
import { BsThreeDotsVertical } from "react-icons/bs";
import CardEditSidebarContent from "../CardEditSidebarContent";

function CardEditSidebarBtn({
  setSidebarOpened,
  sidebarOpened,
}: {
  sidebarOpened: boolean;
  setSidebarOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Drawer open={sidebarOpened} onOpenChange={setSidebarOpened}>
      <DrawerTrigger asChild>
        <Button variant="default" size="icon" icon={<BsThreeDotsVertical />} />
      </DrawerTrigger>
      <CardEditSidebarContent />
    </Drawer>
  );
}

export default CardEditSidebarBtn;
