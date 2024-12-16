import Dashboard from "@/pages/dashboard/Dashboard";
import AuthGuard from "./guards/AuthGuard";
import Blog from "@/pages/blog-page/Blog";

const privateRoutes = [
  {
    element: <AuthGuard />,
    path: "/",
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/blogs/:blogId",
        element: <Blog />,
      },
    ],
  },
];

export default privateRoutes;
