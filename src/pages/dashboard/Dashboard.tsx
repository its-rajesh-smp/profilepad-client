import { SidebarProvider } from "@/common/components/shadcn/ui/sidebar";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { useEffect } from "react";
import { getUserDashboardAct } from "./actions-creators/dashboard.action";
import DashboardGrid from "./components/DashboardGrid";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import DashboardMenu from "./components/UI/DashboardMenu";
import { GridLayoutProvider } from "./contexts/grid-layout.context";

function Dashboard() {
  const dispatch = useAppDispatch();
  const currentSelectedGridItem = useAppSelector(
    (state) => state.dashboardReducer.dashboardSlice.currentSelectedGridItem,
  );

  // Get the user dashboard
  useEffect(() => {
    dispatch(getUserDashboardAct());
  }, []);

  return (
    <div className="flex h-full w-full justify-center overflow-hidden">
      <div className="flex h-full w-full items-start justify-center gap-10">
        <GridLayoutProvider>
          {/* <SidebarProvider className="fixed left-0 top-0 z-[100] w-fit">
            <DashboardMenu />
          </SidebarProvider> */}
          <SidebarProvider className="fixed left-0 top-0 z-[100] w-fit">
            <LeftBar />
          </SidebarProvider>
          <DashboardGrid />
          <SidebarProvider
            open={currentSelectedGridItem ? true : false}
            className="fixed right-0 top-0 z-[100] w-fit"
          >
            <RightBar />
          </SidebarProvider>
        </GridLayoutProvider>
      </div>
    </div>
  );
}

export default Dashboard;
