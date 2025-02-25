import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Landing from "@/pages/landing/Landing";
import GuestGuard from "./guards/GuestGuard";
import Dashboard from "@/pages/dashboard/Dashboard";

const publicRoutes = [
  {
    path: "/",
    element: <Landing />,
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
  {
    path: "/:slug",
    element: <Dashboard />,
  },
];

export default publicRoutes;
