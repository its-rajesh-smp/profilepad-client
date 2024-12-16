import { useParams } from "react-router-dom";
import BlogPreview from "./components/BlogPreview";

function BlogPreviewPage() {
  const { blogId } = useParams();
  return (
    <BlogPreview
      showAppIcon={true}
      loadingContainerClassName="h-screen"
      blogId={blogId}
    />
  );
}

export default BlogPreviewPage;
