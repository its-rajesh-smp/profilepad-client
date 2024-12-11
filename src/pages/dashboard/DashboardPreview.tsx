import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDashboardPreviewAct } from "./action-creators/dashboard.act";
import DashboardGrid from "./components/dashboard-grid/DashboardGrid";
import Profile from "./components/Profile";
import ProfileNotFound from "./components/UI/ProfileNotFound";

function DashboardPreview() {
  const dispatch = useAppDispatch();
  const params = useParams();
  const user = useAppSelector((state) => state.authSlice.user);

  // Fetch the layout
  useEffect(() => {
    dispatch(getDashboardPreviewAct(params?.slug));
  }, []);

  if (!user?.id) return <ProfileNotFound />;

  return (
    <div className="flex h-screen flex-col gap-20 overflow-x-hidden p-5 lg:flex-row lg:p-16">
      <Profile />
      <DashboardGrid />
    </div>
  );
}

export default DashboardPreview;
