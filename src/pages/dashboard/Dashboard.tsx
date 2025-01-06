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

  const showProfile = true;
  type TProfilePosition = "left" | "right" | "top";

  const getProfilePositionClassName = (pos: TProfilePosition) => {
    switch (pos) {
      case "left":
        return "lg:flex-row";
      case "right":
        return "lg:flex-row-reverse";
      case "top":
        return "lg:flex-col items-center ";
    }
  };

  const profilePosition: TProfilePosition = "left";

  const containerClassName = `flex h-screen flex-col justify-between overflow-x-hidden p-0 ${getProfilePositionClassName(profilePosition)} `;
  return (
    <AnimatedModalProvider>
      <div className={containerClassName}>
        {showProfile && <Profile />}
        <DashboardGrid />
        <ActionBar />
      </div>
      <AnimatedModal />
    </AnimatedModalProvider>
  );
}

export default Dashboard;
