import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Blog from "@/pages/blog-page/Blog";
import DashboardPreview from "@/pages/dashboard/DashboardPreview";
import Landing from "@/pages/landing/Landing";
import GuestGuard from "./guards/GuestGuard";

const publicRoutes = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/blogs",
    element: <Blog />,
  },
  {
    path: "/blogs/:blogId",
    element: <Blog />,
  },
  {
    path: "/:slug",
    element: <DashboardPreview />,
  },
  {
    element: <GuestGuard />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
];

export default publicRoutes;
