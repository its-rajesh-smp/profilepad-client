import Dashboard from "@/pages/dashboard/Dashboard";
import Resume from "@/pages/resume/Resume";
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
      {
        path: "/resume",
        element: <Resume />,
      },
    ],
  },
];

export default privateRoutes;
