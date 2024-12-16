import { Button } from "@/common/components/shadcn/ui/button";
import { IoNewspaperOutline } from "react-icons/io5";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/common/components/shadcn/ui/popover";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { logoutAct } from "@/pages/auth/action-creators/logout.act";
import { BiLogOut, BiRefresh, BiUser } from "react-icons/bi";
import { resetDashboardAct } from "../action-creators/dashboard.act";
import { useNavigate } from "react-router-dom";

function ProfileActionBar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logoutAct());
  }

  async function handleReset() {
    dispatch(resetDashboardAct());
  }

  function handleBlogs() {
    navigate("/blogs");
  }

  return (
    <Popover>
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
          onClick={handleReset}
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
  );
}

export default ProfileActionBar;
