import Dashboard from "@/pages/dashboard/Dashboard";
import AuthGuard from "./guards/AuthGuard";

const privateRoutes = [
  {
    element: <AuthGuard />,
    path: "/",
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
];

export default privateRoutes;
