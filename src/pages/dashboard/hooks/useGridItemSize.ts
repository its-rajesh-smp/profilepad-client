import { useAppSelector } from "@/common/hooks/useAppSelector";
import useScreenSize from "@/common/hooks/useScreenSize";
import { Layout } from "react-grid-layout";
import { getGridItemSizeVariant } from "../utils/grid-item.util";

function useGridItemSize(id: string) {
  const { size: screenSize } = useScreenSize();
  const gridItem = useAppSelector((state) =>
    state.gridSlice.layouts[screenSize].find((item) => item.i === id),
  ) as Layout;

  const gridItemSizeVariant = getGridItemSizeVariant(
    screenSize,
    gridItem.w,
    gridItem.h,
  );
  return gridItemSizeVariant;
}

export default useGridItemSize;
