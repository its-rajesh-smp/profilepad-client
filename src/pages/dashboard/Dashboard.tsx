import useAxiosFetch from "@/common/hooks/useAxiosFetch";
import ActionBar from "./components/ActionBar";
import DashboardGrid from "./components/DashboardGrid";
import Profile from "./components/Profile";
import { getLayoutAct } from "./action-creators/layout.act";

function Dashboard() {
  useAxiosFetch(getLayoutAct);

  return (
    <div className="flex h-full flex-col gap-20 overflow-x-hidden p-5 lg:flex-row lg:p-16">
      <Profile />
      <DashboardGrid />
      <ActionBar />
    </div>
  );
}

export default Dashboard;
