import { createContext, Dispatch, useState } from "react";
import { useParams } from "react-router-dom";

interface IBlogPageContext {
  currentBlogId: string;
  setCurrentBlogId: Dispatch<React.SetStateAction<string>>;
}

const BlogPageContext = createContext<IBlogPageContext>({
  currentBlogId: "",
  setCurrentBlogId: () => {},
});

export const BlogPageProvider = ({ children }: any) => {
  const params = useParams();
  const [currentBlogId, setCurrentBlogId] = useState(params?.blogId || "");

  return (
    <BlogPageContext.Provider value={{ setCurrentBlogId, currentBlogId }}>
      {children}
    </BlogPageContext.Provider>
  );
};

export default BlogPageContext;
