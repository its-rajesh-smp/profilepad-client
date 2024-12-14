import { Button } from "@/common/components/shadcn/ui/button";
import { Sidebar, SidebarHeader } from "@/common/components/shadcn/ui/sidebar";
import { Plus, Trash } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { FaPaperclip } from "react-icons/fa";
import BlogPageContext from "../context/BlogPageContext";
import { createBlog, deleteBlog, getBlogs } from "../services/blog.service";

function AllBlogs() {
  const { setCurrentBlog, currentBlog } = useContext(BlogPageContext);
  const [blogs, setBlogs] = useState<any>([]);

  useEffect(() => {
    getAllBlogs();
  }, []);

  const getAllBlogs = async () => {
    const res = await getBlogs();
    setBlogs(res?.data);
  };

  const createABlog = async () => {
    const res = await createBlog({});
    setBlogs((prev: any) => [...prev, res?.data]);
  };

  const deleteABlog = async (id: string) => {
    await deleteBlog(id);
    setBlogs((prev: any) => prev.filter((blog: any) => blog?.id !== id));
  };

  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row items-center justify-between">
        <p className="text-lg font-bold">Create a blog</p>
        <Button onClick={createABlog} icon={<Plus />} type="button" size="xs" />
      </SidebarHeader>
      <div>
        {blogs?.map((blog: any) => {
          return (
            <div
              key={blog?.id}
              className={`flex w-full flex-row items-center justify-between ${currentBlog?.id === blog?.id && "bg-zinc-100 text-zinc-900"}`}
            >
              <Button
                size="xs"
                variant="ghost"
                onClick={() => setCurrentBlog(blog)}
                icon={<FaPaperclip />}
                className="flex w-full flex-row items-center justify-start px-2"
              >
                <p className="text-sm">{blog?.title}</p>
              </Button>
              <Button
                onClick={() => deleteABlog(blog?.id)}
                size="xs"
                variant="ghost"
                type="button"
                icon={<Trash />}
              />
            </div>
          );
        })}
      </div>
    </Sidebar>
  );
}

export default AllBlogs;
