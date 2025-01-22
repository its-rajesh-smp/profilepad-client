import DashboardGrid from "./components/DashboardGrid";

function Dashboard() {
  return (
    <div className="flex w-full justify-center overflow-hidden">
      <div className="flex h-full w-full items-start justify-center gap-10">
        {/* <LeftBar /> */}
        <DashboardGrid />
        {/* <RightBar /> */}
      </div>
    </div>
  );
}

export default Dashboard;
