import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/common/components/shadcn/ui/sidebar";
import { CiGrid42 } from "react-icons/ci";

import { IoMdClose } from "react-icons/io";

function DashboardMenu() {
  const { open } = useSidebar();

  return (
    <>
      {!open && (
        <SidebarTrigger
          className="fixed bottom-20 left-4 p-6 text-secondary transition-colors"
          icon={<CiGrid42 className="!h-6 !w-6" />}
        />
      )}
      <Sidebar side="right" variant="floating">
        <SidebarHeader>
          <div className="relative flex items-center justify-center gap-2 p-2">
            <p className="text-sm font-bold text-zinc-800">
              Dashboard Settings
            </p>
            <SidebarTrigger icon={<IoMdClose />} className="absolute right-0" />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <div className="flex flex-col gap-2 p-3 pt-1"></div>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </>
  );
}

export default DashboardMenu;
