import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import GuestGuard from "./guards/GuestGuard";

const publicRoutes = [
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
  {
    path: "/slug",
    element: <div>Preview Profile</div>,
  },
];

export default publicRoutes;
