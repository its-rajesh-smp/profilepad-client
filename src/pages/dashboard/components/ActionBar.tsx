import { Button } from "@/common/components/shadcn/ui/button";
import { Separator } from "@/common/components/shadcn/ui/separator";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { motion } from "framer-motion";
import { BiCarousel } from "react-icons/bi";
import { CiLaptop, CiMobile3 } from "react-icons/ci";
import { FcGallery, FcLink } from "react-icons/fc";
import { LuBoxSelect } from "react-icons/lu";
import { RxText } from "react-icons/rx";
import { TbSection } from "react-icons/tb";
import { createLayoutAct } from "../action-creators/layout-item.act";
import { setDashboardSetting } from "../reducers/grid-layout-config.reducer";
import DashboardSetting from "./DashboardSetting";
import ProfileActionBar from "./ProfileActionBar";
import ActionButtonWithInput from "./UI/ActionButtonWithInput";
import ShareButton from "./UI/ShareButton";

function ActionBar({ className }: { className?: string }) {
  const dispatch = useAppDispatch();
  const layoutItems = useAppSelector(
    (state) => state.layoutItemsSlice.layoutItems,
  );
  const isMobileView = useAppSelector(
    (state) => state.gridLayoutConfigSlice.dashboardSetting.isMobileView,
  );

  /**
   * Creates a new dashboard item of a given type.
   * @param data The data to be sent to the server.
   */
  const onCreateBtnClick = (data: any) => {
    dispatch(createLayoutAct(data));
  };

  const setGridView = () => {
    dispatch(setDashboardSetting({ isMobileView: !isMobileView }));
  };

  return (
    layoutItems.length > 0 && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className={`fixed bottom-5 left-1/2 right-0 flex w-fit translate-x-[-50%] gap-2 rounded-md border bg-white p-2 shadow-md ${className}`}
      >
        <ProfileActionBar />
        <ShareButton />

        <Separator orientation="vertical" className="h-100 w-px bg-zinc-200" />

        <ActionButtonWithInput
          tooltipText="URL"
          onSubmit={onCreateBtnClick}
          fieldName="url"
          type="link"
          icon={<FcLink />}
        />

        <ActionButtonWithInput
          tooltipText="Image"
          onSubmit={onCreateBtnClick}
          fieldName="src"
          type="image"
          icon={<FcGallery />}
        />

        <Button
          tooltipText="Text"
          onClick={() => onCreateBtnClick({ type: "text" })}
          variant="secondary"
          size="xs"
          uiType="icon"
          icon={<RxText />}
        />

        <Button
          tooltipText="Section"
          onClick={() => onCreateBtnClick({ type: "section" })}
          variant="secondary"
          size="xs"
          uiType="icon"
          icon={<TbSection />}
        />

        <Button
          tooltipText="Empty Box"
          onClick={() => onCreateBtnClick({ type: "empty" })}
          variant="secondary"
          size="xs"
          uiType="icon"
          icon={<LuBoxSelect />}
        />

        <Button
          tooltipText="Carousel"
          onClick={() => onCreateBtnClick({ type: "carousel" })}
          variant="secondary"
          size="xs"
          uiType="icon"
          icon={<BiCarousel />}
        />
        <Separator orientation="vertical" className="h-100 w-px bg-zinc-200" />

        <Button
          tooltipText={isMobileView ? "Desktop View" : "Mobile View"}
          onClick={setGridView}
          variant="secondary"
          size="xs"
          className="hidden bg-blue-400 text-white hover:bg-blue-500 lg:block"
          uiType="icon"
          icon={isMobileView ? <CiMobile3 /> : <CiLaptop />}
        />

        <DashboardSetting />

        {/* <Button
          tooltipText="HTML"
          onClick={() => onCreateBtnClick({ type: "html" })}
          variant="secondary"
          size="xs"
          uiType="icon"
          icon={<BiLogoHtml5 />}
        /> */}

        {/* <Button
          tooltipText="Icon"
          onClick={() => onCreateBtnClick({ type: "icon" })}
          variant="secondary"
          size="xs"
          uiType="icon"
          icon={<IoConstruct />}
        /> */}
      </motion.div>
    )
  );
}

export default ActionBar;
