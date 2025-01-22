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
      <SidebarTrigger />
      <Sidebar variant="floating" side="right">
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
