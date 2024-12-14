import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useEffect, useState } from "react";
import LoadingPage from "../loading-page/LoadingPage";
import { getDashboardAct } from "./action-creators/dashboard.act";
import ActionBar from "./components/ActionBar";
import DashboardGrid from "./components/dashboard-grid/DashboardGrid";
import Profile from "./components/Profile";
import ProfileActionBar from "./components/ProfileActionBar";
function Dashboard() {
  const dispatch = useAppDispatch();
  const [loader, setLoader] = useState(true);

  // Fetch the layout
  useEffect(() => {
    (async () => {
      await dispatch(getDashboardAct());
      setLoader(false);
    })();
  }, []);

  if (loader) return <LoadingPage loadingText="Loading Dashboard..." />;

  return (
    <div className="flex h-screen flex-col gap-2 overflow-x-hidden p-0 lg:flex-row lg:gap-20">
      <Profile />
      <DashboardGrid />
      <ActionBar />
      <ProfileActionBar />
    </div>
  );
}

export default Dashboard;
