import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from "@/common/components/shadcn/ui/sidebar";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { IoMdClose } from "react-icons/io";
import { setCurrentSelectedGridItem } from "../reducers/dashboard.reducer";
import RightBarSection from "./right-bar/RightBarSection";
import SelectCardColor from "./right-bar/SelectCardColor";
import SelectCardType from "./right-bar/SelectCardType";
import SelectTextPosition from "./right-bar/SelectTextPosition";

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
            <p className="text-sm font-bold text-zinc-800">Setting</p>
            <SidebarTrigger
              onClick={() => dispatch(setCurrentSelectedGridItem(null))}
              icon={<IoMdClose />}
              className="absolute right-0"
            />
          </div>
        </SidebarHeader>
        <SidebarContent className="no-scrollbar">
          <div className="flex flex-col gap-4 p-3 pt-1">
            <RightBarSection title="Background">
              <SelectCardColor />
            </RightBarSection>
            <RightBarSection
              className="!flex-row items-center justify-between"
              title="Position"
            >
              <SelectTextPosition />
            </RightBarSection>
            <RightBarSection title="Design">
              <SelectCardType />
            </RightBarSection>
          </div>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </>
  );
}

export default RightBar;
