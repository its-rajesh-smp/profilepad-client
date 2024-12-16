import { Button } from "@/common/components/shadcn/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/common/components/shadcn/ui/popover";
import AnimatedAlert from "@/common/components/UI/AnimatedAlert";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { logoutAct } from "@/pages/auth/action-creators/logout.act";
import { useState } from "react";
import { BiLogOut, BiRefresh, BiUser } from "react-icons/bi";
import { IoNewspaperOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { resetDashboardAct } from "../action-creators/dashboard.act";

function ProfileActionBar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);

  function handleLogout() {
    dispatch(logoutAct());
  }

  const onClickReset = () => {
    setOpenConfirmModal(true);
    setOpenPopup(false);
  };

  async function handleResetConfirm() {
    setOpenConfirmModal(false);
    dispatch(resetDashboardAct());
  }

  function handleBlogs() {
    navigate("/blogs");
  }

  return (
    <>
      <Popover open={openPopup} onOpenChange={setOpenPopup}>
        <PopoverTrigger
          asChild
          className="no-drag fixed bottom-5 left-5 flex gap-2 transition-all hover:cursor-pointer"
        >
          <Button variant="default" size="icon">
            <BiUser />
          </Button>
        </PopoverTrigger>
        <PopoverContent side="bottom" className="no-drag ml-2.5 w-48 p-0">
          <Button
            icon={<IoNewspaperOutline />}
            className="w-full justify-start gap-2 pl-2"
            variant="ghost"
            size="icon"
            onClick={handleBlogs}
          >
            Blogs
          </Button>
          <Button
            icon={<BiRefresh />}
            className="w-full justify-start gap-2 pl-2"
            variant="ghost"
            size="icon"
            onClick={onClickReset}
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
      <AnimatedAlert
        open={openConfirmModal}
        setOpen={setOpenConfirmModal}
        onConfirm={handleResetConfirm}
        title="Just a confirmation for reset"
        description="Are you sure you want to reset the layout?"
      />
    </>
  );
}

export default ProfileActionBar;
