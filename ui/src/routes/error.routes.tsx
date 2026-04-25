import PageNotFound from "@/pages/page-not-found/PageNotFound";

const errorRoutes = [
  {
    element: <PageNotFound />,
    path: "*",
  },
];

export default errorRoutes;
