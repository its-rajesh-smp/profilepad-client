import { SidebarProvider } from "@/common/components/shadcn/ui/sidebar";
import DashboardGrid from "./components/DashboardGrid";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";

function Dashboard() {
  return (
    <div className="flex h-full w-full justify-center overflow-hidden">
      <div className="relative flex h-full w-full items-start justify-center gap-10">
        <SidebarProvider className="fixed left-0 top-0 w-fit">
          <LeftBar />
        </SidebarProvider>
        <DashboardGrid />
        <SidebarProvider className="fixed right-0 top-0 w-fit">
          <RightBar />
        </SidebarProvider>
      </div>
    </div>
  );
}

export default Dashboard;
