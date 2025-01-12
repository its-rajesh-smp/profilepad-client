import { Button } from "@/common/components/shadcn/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/common/components/shadcn/ui/drawer";
import { Switch } from "@/common/components/shadcn/ui/switch";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { useState } from "react";
import { BsThreeDotsVertical, BsX } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { updateDashboardSettingAct } from "../action-creators/dashboard.act";
import ProfileAlignment from "./UI/ProfileAlignment";

function DashboardSetting() {
  const dispatch = useAppDispatch();
  const { showProfile } = useAppSelector(
    (state) => state.gridLayoutConfigSlice.dashboardSetting,
  );
  const [open, setOpen] = useState(false);
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          tooltipText={"Settings"}
          variant={"secondary"}
          size="xs"
          uiType="icon"
          icon={<BsThreeDotsVertical />}
        />
      </DrawerTrigger>
      <DrawerContent className="w-[100%] md:w-[500px]">
        <DrawerHeader>
          <DrawerTitle className="capitalize">
            <p className="text-2xl">Dashboard</p>
            <Button
              onClick={() => setOpen(false)}
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2"
              icon={<BsX />}
            />
          </DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col gap-5 p-4">
          {/* Show Profile */}
          <div className="flex items-center gap-2">
            <p className="text-3xl text-gray-500">{<CiUser />}</p>
            <p className="text-sm font-semibold">Show Profile</p>
            <Switch
              checked={showProfile}
              onCheckedChange={(value) =>
                dispatch(updateDashboardSettingAct({ showProfile: value }))
              }
            />
          </div>

          {/* Profile Alignment */}
          <ProfileAlignment />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default DashboardSetting;
