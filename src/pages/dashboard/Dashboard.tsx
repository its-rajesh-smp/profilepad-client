import { SidebarProvider } from "@/common/components/shadcn/ui/sidebar";
import DashboardGrid from "./components/DashboardGrid";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import { GridLayoutProvider } from "./contexts/grid-layout.context";

function Dashboard() {
  return (
    <div className="flex h-full w-full justify-center overflow-hidden">
      <div className="flex h-full w-full items-start justify-center gap-10">
        <GridLayoutProvider>
          <SidebarProvider className="fixed left-0 top-0 z-[100] w-fit">
            <LeftBar />
          </SidebarProvider>
          <DashboardGrid />
          <SidebarProvider className="fixed right-0 top-0 z-[100] w-fit">
            <RightBar />
          </SidebarProvider>
        </GridLayoutProvider>
      </div>
    </div>
  );
}

export default Dashboard;
