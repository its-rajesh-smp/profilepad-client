import Editor from "@/common/components/Editor/Editor";
import Loader from "@/common/components/UI/Loader";
import { useEffect, useState } from "react";
import { PiNewspaperClippingThin } from "react-icons/pi";
import { getABlog } from "../services/blog.service";

function BlogPreview({
  blogId,
  containerClassName = "",
  titleContainerClassName = "",
  loadingContainerClassName = "",
  editorClassName = "",
}: {
  blogId?: string;
  containerClassName?: string;
  titleContainerClassName?: string;
  loadingContainerClassName?: string;
  editorClassName?: string;
}) {
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Fetching the blog using the URL
  useEffect(() => {
    (async () => {
      if (blogId) {
        try {
          setLoading(true);
          const response = await getABlog(blogId);
          setBlog(response.data);
        } catch (error) {
        } finally {
          setLoading(false);
        }
      } else {
        setBlog(null);
        setLoading(false);
      }
    })();
  }, [blogId]);

  if (loading) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center gap-2 ${loadingContainerClassName}`}
      >
        <Loader />
        <p>Loading Blog...</p>
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-10 p-10 ${containerClassName}`}>
      {blog?.title && (
        <div
          className={`flex gap-2 text-3xl font-bold ${titleContainerClassName}`}
        >
          <PiNewspaperClippingThin />
          <h1>{blog?.title}</h1>
        </div>
      )}
      <Editor
        className={`w-full ${editorClassName}`}
        value={blog?.content}
        editable={false}
      />
    </div>
  );
}

export default BlogPreview;
