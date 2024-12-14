import { Button } from "@/common/components/shadcn/ui/button";
import { Sidebar, SidebarHeader } from "@/common/components/shadcn/ui/sidebar";
import { Plus } from "lucide-react";

function AllBlogs() {
  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row items-center justify-between">
        <p className="text-lg font-bold">Create a blog</p>
        <Button icon={<Plus />} type="button" size="xs" />
      </SidebarHeader>
    </Sidebar>
  );
}

export default AllBlogs;
