import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/common/components/shadcn/ui/sidebar";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { gridItemSettings } from "../constants/grid-card.const";
import useGridItem from "../hooks/useGridItem";
import { setCurrentSelectedGridItemId } from "../reducers/dashboard.reducer";
import { IGridItemSetting } from "../types/dashboard-item.type";
import RightBarSection from "./right-bar/RightBarSection";
import SelectCardColor from "./right-bar/SelectCardColor";
import SelectCardType from "./right-bar/SelectCardType";
import SelectTextPosition from "./right-bar/SelectTextPosition";
import UploadImageUrl from "./right-bar/UploadImageUrl";
import { useOutsideClick } from "@/common/components/UI/AceternityModal";

function RightBar() {
  const dispatch = useAppDispatch();
  const currentSelectedGridItemId = useAppSelector(
    (state) => state.dashboardSlice.currentSelectedGridItemId,
  );
  const item = useGridItem(currentSelectedGridItemId);
  const settings = gridItemSettings[item?.variant];
  const { setOpenMobile, setOpen, isMobile } = useSidebar();
  const sidebarRef = useRef<any>(null);

  useEffect(() => {
    if (currentSelectedGridItemId?.length > 0) {
      setOpenMobile(true);
      setOpen(true);
    } else {
      setOpen(false);
      setOpenMobile(false);
    }
  }, [currentSelectedGridItemId]);

  useOutsideClick(sidebarRef, () => {
    isMobile && dispatch(setCurrentSelectedGridItemId(null));
  });

  return (
    <>
      <Sidebar variant="floating" side="right">
        <SidebarHeader>
          <div className="relative flex items-center justify-center gap-2 p-2">
            <p className="text-sm font-bold text-zinc-800">Setting</p>
            <SidebarTrigger
              onClick={() => dispatch(setCurrentSelectedGridItemId(null))}
              icon={<IoMdClose />}
              className="absolute right-0"
            />
          </div>
        </SidebarHeader>
        <SidebarContent ref={sidebarRef} className="no-scrollbar">
          {settings && (
            <div className="flex flex-col gap-4 p-3 pt-1">
              {settings.map((setting, index) => {
                return (
                  <RightBarSection key={index} title={setting.title}>
                    {getSection(setting)}
                  </RightBarSection>
                );
              })}
            </div>
          )}
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </>
  );
}

const getSection = (setting: IGridItemSetting) => {
  switch (setting.type) {
    case "color":
      return <SelectCardColor />;
    case "position":
      return <SelectTextPosition stylesToUpdate={setting.stylesToUpdate!} />;
    case "design":
      return <SelectCardType availableDesigns={setting.availableDesigns} />;
    case "src":
      return <UploadImageUrl fieldToUpdate={setting.fieldToUpdate} />;
    default:
      return <></>;
  }
};

export default RightBar;
