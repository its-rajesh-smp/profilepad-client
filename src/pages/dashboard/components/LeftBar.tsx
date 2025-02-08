import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/common/components/shadcn/ui/sidebar";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { leftSidebarCards } from "../constants/left-sidebar-item.const.tsx";
import LeftBarCard from "./UI/LeftBarCard";
import { useAppSelector } from "@/common/hooks/useAppSelector.ts";
import { useEffect } from "react";

function LeftBar() {
  const { open, setOpenMobile } = useSidebar();
  const isDragging = useAppSelector((state) => state.dashboardSlice.isDragging);

  // Close sidebar when dragging a card in mobile
  useEffect(() => {
    if (isDragging) {
      setOpenMobile(false);
    }
  }, [isDragging]);

  return (
    <>
      {!open && (
        <SidebarTrigger
          className="fixed bottom-4 left-4 bg-blue-600 p-6 text-white transition-colors hover:bg-blue-700 hover:text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:text-white"
          icon={<IoMdAdd />}
        />
      )}
      <Sidebar variant="floating">
        <SidebarHeader>
          <div className="relative flex items-center justify-center gap-2 p-2">
            <p className="text-sm font-bold text-zinc-800">Cards</p>
            <SidebarTrigger icon={<IoMdClose />} className="absolute right-0" />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <div className="flex flex-col gap-2 p-3 pt-1">
            {leftSidebarCards.map((itemsContainerArray, index) => {
              return (
                <div key={index} className="flex w-full justify-between gap-2">
                  {itemsContainerArray.map((item, index) => {
                    return <LeftBarCard key={index} item={item} />;
                  })}
                </div>
              );
            })}
          </div>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </>
  );
}

export default LeftBar;
