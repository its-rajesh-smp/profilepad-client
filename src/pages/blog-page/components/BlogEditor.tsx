import Editor from "@/common/components/Editor/Editor";
import { SidebarTrigger } from "@/common/components/shadcn/ui/sidebar";
import MessageDisplay from "@/common/components/UI/MessageDisplay";
import { debounce } from "@/common/utils/debounce.util";
import LoadingPage from "@/pages/loading-page/LoadingPage";
import { useCallback, useContext, useEffect, useState } from "react";
import BlogPageContext from "../context/BlogPageContext";
import { getABlog, updateBlog } from "../services/blog.service";

function BlogEditor() {
  const { currentBlogId } = useContext(BlogPageContext);
  const [currentBlog, setCurrentBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (currentBlogId) {
        try {
          setLoading(true);
          const response = await getABlog(currentBlogId);
          setCurrentBlog(response.data);
        } catch (error) {
        } finally {
          setLoading(false);
        }
      } else {
        setCurrentBlog(null);
        setLoading(false);
      }
    })();
  }, [currentBlogId]);

  const debouncedUpdateOnDb = useCallback(
    debounce((updatedField: any = {}) => {
      (async () => {
        await updateBlog(currentBlogId, updatedField);
      })();
    }, 500),
    [currentBlog],
  );

  const onEditorTextChange = (textBlocks: any) => {
    debouncedUpdateOnDb({ content: textBlocks });
  };

  const onTitleChange = (e: any) => {
    const updatedField = { title: e.target.innerHTML };
    debouncedUpdateOnDb(updatedField);
  };

  if (!currentBlog && !currentBlogId)
    return (
      <div className="flex h-screen w-full flex-col gap-5 p-5">
        <SidebarTrigger iconClassName="!w-8 !h-8 " />
        <MessageDisplay
          imgClassName="!w-60 !h-60"
          fitToParent={true}
          message="No blog selected"
          imgSrc="	https://cdn-icons-png.flaticon.com/512/7486/7486766.png"
        />
      </div>
    );

  // If loading and currentBlogId is present
  if (loading && currentBlogId)
    return <LoadingPage loadingText="Loading Blog..." />;

  return (
    currentBlog && (
      <div className="flex h-screen w-full flex-col gap-5 p-5">
        <div className="flex gap-5">
          <SidebarTrigger iconClassName="!w-8 !h-8 " />
          <h1
            onInput={onTitleChange}
            suppressContentEditableWarning={true}
            contentEditable={true}
            dangerouslySetInnerHTML={{ __html: currentBlog?.title || "" }}
            className="text-2xl font-bold leading-tight text-zinc-900"
          ></h1>
        </div>
        <div className="px-8 md:px-20" id="blog-editor">
          <Editor
            value={currentBlog?.content}
            onChange={onEditorTextChange}
            className="leading-relaxed"
          />
        </div>
      </div>
    )
  );
}

export default BlogEditor;
