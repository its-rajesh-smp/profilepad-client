import { SidebarProvider } from "@/common/components/shadcn/ui/sidebar";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserDashboardAct } from "./actions-creators/dashboard.action";
import DashboardGrid from "./components/DashboardGrid";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import DashboardMenu from "./components/UI/DashboardMenu";
import { GridLayoutProvider } from "./contexts/grid-layout.context";
import { useAppSelector } from "@/common/hooks/useAppSelector";

function Dashboard() {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.authSlice);
  const params = useParams();

  // Get the user dashboard
  useEffect(() => {
    dispatch(getUserDashboardAct(params?.slug));
  }, []);

  const sidebarClassName = "fixed left-0 top-0 z-[100] w-fit";

  return (
    <div className="flex h-full w-full justify-center overflow-hidden">
      <div className="flex h-full w-full items-start justify-center gap-10">
        <GridLayoutProvider>
          {isAuthenticated && (
            <SidebarProvider className={sidebarClassName}>
              <DashboardMenu />
            </SidebarProvider>
          )}
          {isAuthenticated && (
            <SidebarProvider className={sidebarClassName}>
              <LeftBar />
            </SidebarProvider>
          )}
          <DashboardGrid />
          {isAuthenticated && (
            <SidebarProvider className={sidebarClassName}>
              <RightBar />
            </SidebarProvider>
          )}
        </GridLayoutProvider>
      </div>
    </div>
  );
}

export default Dashboard;
