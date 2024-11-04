import AuthGuard from "./guards/AuthGuard";

const privateRoutes = [
  {
    element: <AuthGuard />,
    children: [
      {
        path: "/",
        element: <div>Dashboard</div>,
      },
      {
        path: "/dashboard",
        element: <div>Dashboard</div>,
      },
    ],
  },
];

export default privateRoutes;
