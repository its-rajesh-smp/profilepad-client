import { SidebarProvider } from "@/common/components/shadcn/ui/sidebar";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useEffect } from "react";
import { getUserDashboardAct } from "./actions-creators/dashboard.action";
import DashboardGrid from "./components/DashboardGrid";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import { GridLayoutProvider } from "./contexts/grid-layout.context";
import DashboardMenu from "./components/UI/DashboardMenu";

function Dashboard() {
  const dispatch = useAppDispatch();

  // Get the user dashboard
  useEffect(() => {
    dispatch(getUserDashboardAct());
  }, []);

  const sidebarClassName = "fixed left-0 top-0 z-[100] w-fit";

  return (
    <div className="flex h-full w-full justify-center overflow-hidden">
      <div className="flex h-full w-full items-start justify-center gap-10">
        <GridLayoutProvider>
          <SidebarProvider className={sidebarClassName}>
            <DashboardMenu />
          </SidebarProvider>
          <SidebarProvider className={sidebarClassName}>
            <LeftBar />
          </SidebarProvider>
          <DashboardGrid />
          <SidebarProvider className={sidebarClassName}>
            <RightBar />
          </SidebarProvider>
        </GridLayoutProvider>
      </div>
    </div>
  );
}

export default Dashboard;
