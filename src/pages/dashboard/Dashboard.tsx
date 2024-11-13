import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useEffect } from "react";
import { getDashboardAct } from "./action-creators/dashboard.act";
import ActionBar from "./components/ActionBar";
import DashboardGrid from "./components/dashboard-grid/DashboardGrid";
import Profile from "./components/Profile";
import ProfileActionBar from "./components/ProfileActionBar";

function Dashboard() {
  const dispatch = useAppDispatch();

  // Fetch the layout
  useEffect(() => {
    dispatch(getDashboardAct());
  }, []);

  return (
    <div className="flex h-full flex-col gap-20 overflow-x-hidden p-0 lg:flex-row lg:p-16">
      <Profile />
      <DashboardGrid />
      <ActionBar />
      <ProfileActionBar />
    </div>
  );
}

export default Dashboard;
