import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useEffect, useState } from "react";
import LoadingPage from "../loading-page/LoadingPage";
import { getDashboardAct } from "./action-creators/dashboard.act";
import ActionBar from "./components/ActionBar";
import DashboardGrid from "./components/dashboard-grid/DashboardGrid";
import Profile from "./components/Profile";
import AnimatedModal from "./components/UI/AnimatedModal";
import { AnimatedModalProvider } from "./context/AnimatedModalContext";
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
    <AnimatedModalProvider>
      <div className="flex h-screen flex-col justify-between overflow-x-hidden p-0 lg:flex-row">
        <Profile />
        <DashboardGrid />
        <ActionBar />
      </div>
      <AnimatedModal />
    </AnimatedModalProvider>
  );
}

export default Dashboard;
