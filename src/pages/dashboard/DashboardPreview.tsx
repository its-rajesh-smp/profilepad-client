import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDashboardPreviewAct } from "./action-creators/dashboard.act";
import DashboardGrid from "./components/dashboard-grid/DashboardGrid";
import Profile from "./components/Profile";

function DashboardPreview() {
  const dispatch = useAppDispatch();
  const params = useParams();

  // Fetch the layout
  useEffect(() => {
    dispatch(getDashboardPreviewAct(params?.slug));
  }, []);

  return (
    <div className="flex h-full flex-col gap-20 overflow-x-hidden p-5 lg:flex-row lg:p-16">
      <Profile />
      <DashboardGrid />
    </div>
  );
}

export default DashboardPreview;
