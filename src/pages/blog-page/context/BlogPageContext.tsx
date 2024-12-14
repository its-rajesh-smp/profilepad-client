import { createContext, Dispatch, useState } from "react";

interface IBlogPageContext {
  currentBlog: any;
  setCurrentBlog: Dispatch<React.SetStateAction<any>>;
}

const BlogPageContext = createContext<IBlogPageContext>({
  currentBlog: {},
  setCurrentBlog: () => {},
});

export const BlogPageProvider = ({ children }: any) => {
  const [currentBlog, setCurrentBlog] = useState({});

  return (
    <BlogPageContext.Provider value={{ setCurrentBlog, currentBlog }}>
      {children}
    </BlogPageContext.Provider>
  );
};

export default BlogPageContext;
