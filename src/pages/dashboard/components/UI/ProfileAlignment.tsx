import { Button } from "@/common/components/shadcn/ui/button";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { CiAlignCenterV } from "react-icons/ci";
import { updateDashboardSettingAct } from "../../action-creators/dashboard.act";
import SettingSection from "./SettingSection";
function ProfileAlignment() {
  const dispatch = useAppDispatch();
  const { profileAlignment } = useAppSelector(
    (state) => state.gridLayoutConfigSlice.dashboardSetting,
  );
  const selectProfileAlignment = (alignment: string) => {
    dispatch(updateDashboardSettingAct({ profileAlignment: alignment }));
  };

  return (
    <div className="flex flex-col gap-4">
      <SettingSection />
      <div className="flex gap-2">
        <Button
          onClick={() => selectProfileAlignment("left")}
          selected={profileAlignment === "left"}
          selectedStyle="bg-black text-white hover:bg-black hover:text-white"
          className="flex h-20 w-20 flex-col gap-0"
          icon={<CiAlignCenterV className="!h-10 !w-10 rotate-180 text-3xl" />}
          variant={"outline"}
        >
          Left
        </Button>
        <Button
          onClick={() => selectProfileAlignment("top")}
          variant={"outline"}
          selected={profileAlignment === "top"}
          selectedStyle="bg-black text-white hover:bg-black hover:text-white"
          className="flex h-20 w-20 flex-col gap-0"
          icon={<CiAlignCenterV className="!h-10 !w-10 -rotate-90 text-3xl" />}
        >
          Top
        </Button>
        <Button
          onClick={() => selectProfileAlignment("right")}
          selectedStyle="bg-black text-white hover:bg-black hover:text-white"
          selected={profileAlignment === "right"}
          className="flex h-20 w-20 flex-col gap-0"
          icon={<CiAlignCenterV className="!h-10 !w-10 text-3xl" />}
          variant={"outline"}
        >
          Right
        </Button>
      </div>
    </div>
  );
}

export default ProfileAlignment;
