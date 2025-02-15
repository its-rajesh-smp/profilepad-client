import { Button } from "@/common/components/shadcn/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/common/components/shadcn/ui/sidebar";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { CiGrid42, CiLaptop, CiLogout, CiMobile3 } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { setCurrentView } from "../../reducers/dashboard.reducer";
import RightBarSection from "../right-bar/RightBarSection";

function DashboardMenu() {
  const { open } = useSidebar();
  const { currentView } = useAppSelector((state) => state.dashboardSlice);
  const dispatch = useAppDispatch();

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
          <div className="flex flex-col gap-2 p-3 pt-1">
            <RightBarSection title="Current View">
              <div className="flex items-center gap-2">
                <Button
                  selected={currentView === "mobile"}
                  selectedStyle="bg-zinc-700 hover:bg-zinc-700 hover:text-white text-white dark:bg-white dark:text-dark"
                  size="icon"
                  variant="outline"
                  onClick={() => dispatch(setCurrentView("mobile"))}
                  icon={<CiMobile3 />}
                />
                <Button
                  selected={currentView === "desktop"}
                  selectedStyle="bg-zinc-700 hover:bg-zinc-700 hover:text-white text-white dark:bg-white dark:text-dark"
                  size="icon"
                  variant="outline"
                  onClick={() => dispatch(setCurrentView("desktop"))}
                  icon={<CiLaptop />}
                />
              </div>
            </RightBarSection>
          </div>
        </SidebarContent>

        <SidebarFooter>
          <div className="relative flex items-center justify-between gap-2 px-2">
            <p className="text-sm font-semibold text-primary">Logout</p>
            <Button size="icon" variant="ghost" icon={<CiLogout />} />
          </div>
        </SidebarFooter>
      </Sidebar>
    </>
  );
}

export default DashboardMenu;
