import DashboardGrid from "./components/DashboardGrid";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";

function Dashboard() {
  return (
    <div className="flex h-screen w-full justify-center">
      <div className="flex h-full w-[80%] items-start justify-between gap-10">
        <LeftBar />
        <DashboardGrid />
        <RightBar />
      </div>
    </div>
  );
}

export default Dashboard;
