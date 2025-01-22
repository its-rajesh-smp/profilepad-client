import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/common/components/shadcn/ui/sidebar";
import { LEFT_SIDEBAR_ITEMS } from "../constants/left-sidebar-items.const.tsx";
import LeftBarCard from "./UI/LeftBarCard";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { useId } from "react";

function LeftBar() {
  const { open } = useSidebar();

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
            {LEFT_SIDEBAR_ITEMS.map((itemsContainerArray) => {
              return (
                <div
                  key={useId()}
                  className="flex w-full justify-between gap-2"
                >
                  {itemsContainerArray.map((item) => {
                    return <LeftBarCard key={useId()} item={item} />;
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
