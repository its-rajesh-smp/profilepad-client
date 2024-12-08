import { createBrowserRouter } from "react-router-dom";
import errorRoutes from "./error.routes";
import privateRoutes from "./private.routes";
import publicRoutes from "./public.routes";

const appRouter = createBrowserRouter([
  ...publicRoutes,
  ...privateRoutes,
  ...errorRoutes,
]);

export default appRouter;
