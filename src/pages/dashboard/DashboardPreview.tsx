import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingPage from "../loading-page/LoadingPage";
import { getDashboardPreviewAct } from "./action-creators/dashboard.act";
import DashboardGrid from "./components/dashboard-grid/DashboardGrid";
import Profile from "./components/Profile";
import ProfileNotFound from "./components/UI/ProfileNotFound";

function DashboardPreview() {
  const dispatch = useAppDispatch();
  const params = useParams();
  const [loader, setLoader] = useState(true);
  const [isProfileFound, setIsProfileFound] = useState(true);

  // Fetch the layout & the user's profile
  useEffect(() => {
    (async () => {
      const isAvailable = await dispatch(getDashboardPreviewAct(params?.slug));
      setIsProfileFound(isAvailable);
      setLoader(false);
    })();
  }, []);

  if (loader) return <LoadingPage />;
  if (!isProfileFound) return <ProfileNotFound />;

  return (
    <div className="flex h-screen flex-col justify-between gap-2 overflow-x-hidden p-0 lg:flex-row lg:gap-20">
      <Profile />
      <DashboardGrid />
    </div>
  );
}

export default DashboardPreview;
