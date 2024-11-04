import useAxiosFetch from "@/common/hooks/useAxiosFetch";
import { getDashboardAct } from "./action-creators/dashboard.act";
import ActionBar from "./components/ActionBar";
import DashboardGrid from "./components/DashboardGrid";
import Profile from "./components/Profile";

function Dashboard() {
  // Fetch the layout
  useAxiosFetch(getDashboardAct);

  return (
    <div className="flex h-full flex-col gap-20 overflow-x-hidden p-5 lg:flex-row lg:p-16">
      <Profile />
      <DashboardGrid />
      <ActionBar />
    </div>
  );
}

export default Dashboard;
