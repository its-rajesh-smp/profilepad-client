import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { useEffect, useState } from "react";
import LoadingPage from "../loading-page/LoadingPage";
import { getDashboardAct } from "./action-creators/dashboard.act";
import ActionBar from "./components/ActionBar";
import DashboardGrid from "./components/dashboard-grid/DashboardGrid";
import Profile from "./components/Profile";
import AnimatedModal from "./components/UI/AnimatedModal";
import { AnimatedModalProvider } from "./context/AnimatedModalContext";
import { getProfilePositionClassName } from "./utils/dashboard.util";
function Dashboard() {
  const dispatch = useAppDispatch();
  const [loader, setLoader] = useState(true);
  const { dashboardSetting } = useAppSelector(
    (state) => state.gridLayoutConfigSlice,
  );

  // Fetch the layout
  useEffect(() => {
    (async () => {
      await dispatch(getDashboardAct());
      setLoader(false);
    })();
  }, []);

  if (loader) return <LoadingPage loadingText="Loading Dashboard..." />;

  const containerClassName = `flex h-screen flex-col justify-between overflow-x-hidden p-0 ${getProfilePositionClassName(dashboardSetting.profileAlignment)} `;
  return (
    <AnimatedModalProvider>
      <div className={containerClassName}>
        {dashboardSetting.showProfile && <Profile />}
        <DashboardGrid />
        <ActionBar />
      </div>
      <AnimatedModal />
    </AnimatedModalProvider>
  );
}

export default Dashboard;
