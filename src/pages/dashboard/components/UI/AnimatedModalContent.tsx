import { getBlogIdFromUrl } from "@/common/utils/blog.util";
import BlogPreview from "@/pages/blog-page/components/BlogPreview";
import { useContext } from "react";
import AnimatedModalContext from "../../context/AnimatedModalContext";

function AnimatedModalContent() {
  const { url } = useContext(AnimatedModalContext);

  return (
    <BlogPreview
      containerClassName="!p-0"
      blogId={getBlogIdFromUrl(url)}
      editorClassName="flex  justify-center"
    />
  );
}

export default AnimatedModalContent;
