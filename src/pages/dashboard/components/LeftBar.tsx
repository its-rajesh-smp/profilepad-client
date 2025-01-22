import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from "@/common/components/shadcn/ui/sidebar";
import { LEFT_SIDEBAR_ITEMS } from "../constants/left-sidebar-items.const.tsx";
import LeftBarCard from "./UI/LeftBarCard";

function LeftBar() {
  return (
    <>
      <SidebarTrigger className="fixed left-0 top-0 z-[100] lg:hidden" />
      <Sidebar>
        <SidebarHeader />
        <SidebarContent>
          <div className="flex flex-col gap-2 p-3">
            {LEFT_SIDEBAR_ITEMS.map((itemsContainerArray) => {
              return (
                <div className="flex w-full justify-between gap-2">
                  {itemsContainerArray.map((item) => {
                    return <LeftBarCard item={item} />;
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
