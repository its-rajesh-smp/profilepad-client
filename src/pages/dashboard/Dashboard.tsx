import { SidebarProvider } from "@/common/components/shadcn/ui/sidebar";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageNotFound from "../page-not-found/PageNotFound";
import { getUserDashboardAct } from "./actions-creators/dashboard.action";
import DashboardGrid from "./components/DashboardGrid";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import DashboardMenu from "./components/UI/DashboardMenu";
import { GridLayoutProvider } from "./contexts/grid-layout.context";
import "./dashboard.css";

function Dashboard() {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.authSlice);
  const [error, setError] = useState<boolean>(false);
  const params = useParams();

  // Get the user dashboard
  useEffect(() => {
    (async () => {
      try {
        await dispatch(getUserDashboardAct(params?.slug));
      } catch (error) {
        setError(true);
      }
    })();
  }, []);

  const sidebarClassName = "fixed left-0 top-0 z-[100] w-fit";

  if (error) {
    return <PageNotFound />;
  }

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
