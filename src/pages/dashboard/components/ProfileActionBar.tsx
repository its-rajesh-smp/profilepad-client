import { Button } from "@/common/components/shadcn/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/common/components/shadcn/ui/popover";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { logoutAct } from "@/pages/auth/action-creators/logout.act";
import { useState } from "react";
import { BiLogOut, BiRefresh, BiUser } from "react-icons/bi";
import { resetDashboardAct } from "../action-creators/dashboard.act";

function ProfileActionBar() {
  const dispatch = useAppDispatch();
  const [openPopup, setOpenPopup] = useState(false);

  function handleLogout() {
    dispatch(logoutAct());
  }

  async function handleResetConfirm() {
    dispatch(resetDashboardAct());
  }

  return (
    <>
      <Popover modal open={openPopup} onOpenChange={setOpenPopup}>
        <PopoverTrigger asChild>
          <Button
            className="w-full justify-start gap-2 pl-2"
            variant="default"
            size="xs"
            uiType="icon"
            icon={<BiUser />}
          />
        </PopoverTrigger>
        <PopoverContent side="bottom" className="no-drag ml-2.5 w-48 p-0">
          <Button
            icon={<BiRefresh />}
            className="w-full justify-start gap-2 pl-2"
            variant="ghost"
            size="icon"
            onClick={handleResetConfirm}
          >
            Reset
          </Button>
          <Button
            onClick={handleLogout}
            icon={<BiLogOut />}
            className="w-full justify-start gap-2 pl-2"
            variant="ghost"
            size="icon"
          >
            Logout
          </Button>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default ProfileActionBar;
