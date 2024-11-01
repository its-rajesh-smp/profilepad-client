import DashboardGrid from "./components/DashboardGrid";
import Profile from "./components/Profile";

function Dashboard() {
  return (
    <div className="__dashboard flex h-full flex-col gap-20 p-5 lg:flex-row lg:p-20">
      <Profile />
      <DashboardGrid />
    </div>
  );
}

export default Dashboard;
