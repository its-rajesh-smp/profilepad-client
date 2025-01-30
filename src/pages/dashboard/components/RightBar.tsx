import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarTrigger,
} from "@/common/components/shadcn/ui/sidebar";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { setCurrentSelectedGridItem } from "../reducers/dashboard.reducer";

function RightBar() {
  const dispatch = useAppDispatch();
  const currentSelectedGridItem = useAppSelector(
    (state) => state.dashboardReducer.dashboardSlice.currentSelectedGridItem,
  );

  return (
    <>
      <Sidebar variant="floating" side="right">
        <SidebarHeader>
          <div className="relative flex items-center justify-center gap-2 p-2">
            <p className="text-sm font-bold text-zinc-800">
              {currentSelectedGridItem?.variant}
            </p>
            <SidebarTrigger
              onClick={() => dispatch(setCurrentSelectedGridItem(null))}
              icon={<IoMdClose />}
              className="absolute right-0"
            />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup />
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </>
  );
}

export default RightBar;
