import { Outlet } from "react-router-dom";
import { getSubdomain } from "../utils/browser.util";
import Dashboard from "@/pages/dashboard/Dashboard";

function AppRouterWrapper() {
  const subdomain = getSubdomain();

  if (subdomain) {
    return <Dashboard slug={subdomain} />;
  }

  return <Outlet></Outlet>;
}

export default AppRouterWrapper;
