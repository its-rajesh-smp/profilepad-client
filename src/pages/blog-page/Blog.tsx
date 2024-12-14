import { SidebarProvider } from "@/common/components/shadcn/ui/sidebar";
import AllBlogs from "./components/AllBlogs";
import BlogEditor from "./components/BlogEditor";
import { BlogPageProvider } from "./context/BlogPageContext";

function Blog() {
  return (
    <SidebarProvider>
      <BlogPageProvider>
        <AllBlogs />
        <BlogEditor />
      </BlogPageProvider>
    </SidebarProvider>
  );
}

export default Blog;
