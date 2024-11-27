import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import DashboardPreview from "@/pages/dashboard/DashboardPreview";
import GuestGuard from "./guards/GuestGuard";
import Landing from "@/pages/landing/Landing";

const publicRoutes = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/:slug",
    element: <DashboardPreview />,
  },
  {
    element: <GuestGuard />,
    children: [
      {
        path: "/",
        element: <Register />,
      },
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
