import { Button } from "@/common/components/shadcn/ui/button";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { resizeGridLayoutItem } from "@/pages/dashboard/action-creators/layout-item.act";
import { resizeConstants } from "@/pages/dashboard/constants/dashboard-grid.const";
import GridItemContext from "@/pages/dashboard/context/GridItemContext";
import useCurrentCardLayoutSize from "@/pages/dashboard/hooks/useCurrentCardLayoutSize";
import { motion } from "framer-motion";
import { RectangleHorizontal } from "lucide-react";
import { useContext } from "react";
import { GoSquare } from "react-icons/go";
import { LuRectangleHorizontal, LuRectangleVertical } from "react-icons/lu";
import { PiDotOutlineLight, PiSquare } from "react-icons/pi";
import CardEditSidebarBtn from "../../card-edit-sidebar/UI/CardEditSidebarBtn";
import HtmlToggleBtn from "./HtmlToggleBtn";
import FormattingToolbar from "./TextFormattingToolbar";

function ResizeToolbar({
  id,
  sidebarOpened,
  setSidebarOpened,
}: {
  id: string;
  sidebarOpened: boolean;
  setSidebarOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { type } = useContext(GridItemContext).item;
  const dispatch = useAppDispatch();
  const layoutStyle = useCurrentCardLayoutSize(id);

  const onResize = ({ w, h }: { w: number; h: number }) => {
    dispatch(resizeGridLayoutItem(id, w, h));
  };

  return (
    <motion.div className="no-drag absolute inset-x-0 -bottom-10 !z-[200] flex items-center justify-center">
      <div className="mt-2 flex w-fit items-center justify-center rounded-md bg-zinc-900 shadow-md">
        {type == "image" && (
          <Button
            variant="default"
            size="icon"
            selected={layoutStyle == "MINI"}
            icon={<PiDotOutlineLight />}
            onClick={() => onResize(resizeConstants.MINI)} // Mini square
          />
        )}
        <Button
          variant="default"
          size="icon"
          selected={layoutStyle == "SMALL_SQUARE"}
          icon={<GoSquare />}
          onClick={() => onResize(resizeConstants.SMALL_SQUARE)} // Small square
        />
        <Button
          variant="default"
          size="icon"
          selected={layoutStyle == "HORIZONTAL_RECTANGLE"}
          icon={<RectangleHorizontal className="!h-3 !w-5 font-bold" />}
          onClick={() => onResize(resizeConstants.HORIZONTAL_RECTANGLE)} // Horizontal rectangle
        />
        <Button
          variant="default"
          size="icon"
          selected={layoutStyle == "HORIZONTAL_WIDE_RECTANGLE"}
          icon={<LuRectangleHorizontal className="!h-3 !w-5 font-bold" />}
          onClick={() => onResize(resizeConstants.HORIZONTAL_WIDE_RECTANGLE)} // Wider rectangle
        />
        <Button
          variant="default"
          size="icon"
          selected={layoutStyle == "VERTICAL_RECTANGLE"}
          icon={<LuRectangleVertical className="!h-3 !w-5 font-bold" />}
          onClick={() => onResize(resizeConstants.VERTICAL_RECTANGLE)} // Vertical rectangle
        />
        <Button
          variant="default"
          size="icon"
          selected={layoutStyle == "LARGE_SQUARE"}
          className="font-bold"
          icon={<PiSquare className="!h-3 !w-5 font-bold" />}
          onClick={() => onResize(resizeConstants.LARGE_SQUARE)} // Large square
        />
        <CardEditSidebarBtn
          sidebarOpened={sidebarOpened}
          setSidebarOpened={setSidebarOpened}
        />
        {type == "text" && <FormattingToolbar />}
        {type == "html" && <HtmlToggleBtn />}
      </div>
    </motion.div>
  );
}

export default ResizeToolbar;
