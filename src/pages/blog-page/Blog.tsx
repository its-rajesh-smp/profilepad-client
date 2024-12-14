import { SidebarProvider } from "@/common/components/shadcn/ui/sidebar";
import AllBlogs from "./components/AllBlogs";
import BlogEditor from "./components/BlogEditor";

function Blog() {
  return (
    <SidebarProvider>
      <AllBlogs />
      <BlogEditor />
    </SidebarProvider>
  );
}

export default Blog;
