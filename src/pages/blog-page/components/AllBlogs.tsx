import { Button } from "@/common/components/shadcn/ui/button";
import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
} from "@/common/components/shadcn/ui/sidebar";
import LoadingPage from "@/pages/loading-page/LoadingPage";
import { Plus, Trash } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { FaPaperclip } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BlogPageContext from "../context/BlogPageContext";
import { createBlog, deleteBlog, getBlogs } from "../services/blog.service";
import BlogActionBar from "./BlogActionBar";

function AllBlogs() {
  const { setCurrentBlogId, currentBlogId } = useContext(BlogPageContext);
  const [loader, setLoader] = useState(true);
  const [blogs, setBlogs] = useState<any>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllBlogs();
  }, []);

  const getAllBlogs = async () => {
    try {
      setLoader(true);
      const res = await getBlogs();
      setBlogs(res?.data);
    } catch (error) {
    } finally {
      setLoader(false);
    }
  };

  const createABlog = async () => {
    const res = await createBlog({});
    setBlogs((prev: any) => [...prev, res?.data]);
    setCurrentBlogId(res?.data.id);
    navigate(`/blogs/${res?.data.id}`);
  };

  const deleteABlog = async (id: string) => {
    await deleteBlog(id);
    if (currentBlogId === id) {
      setCurrentBlogId("");
      navigate("/blogs");
    }

    setBlogs((prev: any) => prev.filter((blog: any) => blog?.id !== id));
  };

  // if loading show loading page
  if (loader) {
    return <LoadingPage fullScreen={true} loadingText="Loading Blogs..." />;
  }

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
              className={`flex w-full flex-row items-center justify-between ${currentBlogId === blog?.id && "bg-zinc-100 text-zinc-900"}`}
            >
              <Button
                size="xs"
                variant="ghost"
                onClick={() => {
                  setCurrentBlogId(blog.id);
                  navigate(`/blogs/${blog?.id}`);
                }}
                icon={<FaPaperclip />}
                className="flex w-[80%] max-w-[80%] flex-row items-center justify-start px-2"
              >
                <p className="w-fit overflow-hidden text-ellipsis text-sm">
                  {blog?.title}
                </p>
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
      <SidebarFooter>
        <BlogActionBar />
      </SidebarFooter>
    </Sidebar>
  );
}

export default AllBlogs;
