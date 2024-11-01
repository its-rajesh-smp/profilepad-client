import DashboardGrid from "./components/DashboardGrid";
import Profile from "./components/Profile";

function Dashboard() {
  return (
    <div className="__dashboard flex p-32">
      <Profile />
      <DashboardGrid />
    </div>
  );
}

export default Dashboard;
