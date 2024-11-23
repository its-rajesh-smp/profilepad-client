import { Button } from "@/common/components/shadcn/ui/button";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { resizeGridLayoutItem } from "@/pages/dashboard/action-creators/layout-item.act";
import { resizeConstants } from "@/pages/dashboard/constants/dashboard-grid.const";
import { motion } from "framer-motion";
import { RectangleHorizontal } from "lucide-react";
import { GoSquare } from "react-icons/go";
import { LuRectangleHorizontal, LuRectangleVertical } from "react-icons/lu";
import { PiSquare } from "react-icons/pi";
import CardEditSidebarBtn from "../../card-edit-sidebar/UI/CardEditSidebarBtn";
import FormattingToolbar from "./TextFormattingToolbar";
import GridItemContext from "@/pages/dashboard/context/gridItemContext";
import { useContext } from "react";

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

  const onResize = ({ w, h }: { w: number; h: number }) => {
    dispatch(resizeGridLayoutItem(id, w, h));
  };

  return (
    <motion.div className="no-drag absolute inset-x-0 -bottom-8 flex items-center justify-center">
      <div className="mt-2 flex w-fit items-center justify-center rounded-md bg-zinc-900 shadow-md">
        <Button
          variant="default"
          size="icon"
          icon={<GoSquare />}
          onClick={() => onResize(resizeConstants.SMALL_SQUARE)} // Small square
        />
        <Button
          variant="default"
          size="icon"
          icon={<RectangleHorizontal className="!h-3 !w-5" />}
          onClick={() => onResize(resizeConstants.HORIZONTAL_RECTANGLE)} // Horizontal rectangle
        />
        <Button
          variant="default"
          size="icon"
          icon={<LuRectangleHorizontal />}
          onClick={() => onResize(resizeConstants.HORIZONTAL_WIDE_RECTANGLE)} // Wider rectangle
        />
        <Button
          variant="default"
          size="icon"
          icon={<LuRectangleVertical />}
          onClick={() => onResize(resizeConstants.VERTICAL_RECTANGLE)} // Vertical rectangle
        />
        <Button
          variant="default"
          size="icon"
          icon={<PiSquare />}
          onClick={() => onResize(resizeConstants.LARGE_SQUARE)} // Large square
        />
        <CardEditSidebarBtn
          sidebarOpened={sidebarOpened}
          setSidebarOpened={setSidebarOpened}
        />
        {type == "text" && <FormattingToolbar />}
      </div>
    </motion.div>
  );
}

export default ResizeToolbar;
