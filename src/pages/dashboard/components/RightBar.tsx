import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarTrigger,
} from "@/common/components/shadcn/ui/sidebar";

function RightBar() {
  return (
    <>
      <SidebarTrigger className="fixed right-0 top-0 z-[100] lg:hidden" />
      <Sidebar side="right">
        <SidebarHeader />
        <SidebarContent>
          <SidebarGroup />
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </>
  );
}

export default RightBar;
