import { Button } from "@/common/components/shadcn/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/common/components/shadcn/ui/popover";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { logoutAct } from "@/pages/auth/action-creators/logout.act";
import { MdDashboard } from "react-icons/md";

import { BiLogOut, BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function BlogActionBar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logoutAct());
  }

  function handelDashboard() {
    navigate("/dashboard");
  }

  return (
    <Popover>
      <PopoverTrigger
        asChild
        className="absolute bottom-3 flex w-[calc(100%-1rem)] gap-2 transition-all hover:cursor-pointer"
      >
        <Button
          className="overflow-hidden text-ellipsis"
          icon={<BiUser />}
          variant="default"
          size="icon"
        />
      </PopoverTrigger>
      <PopoverContent side="bottom" className="ml-2.5 w-48 p-0">
        <Button
          icon={<MdDashboard />}
          className="w-full justify-start gap-2 pl-2"
          variant="ghost"
          size="icon"
          onClick={handelDashboard}
        >
          Dashboard
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

export default BlogActionBar;
