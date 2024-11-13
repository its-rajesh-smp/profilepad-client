import { useAppSelector } from "@/common/hooks/useAppSelector";
import { getResizeConstantName } from "../utils/getResizeConstantName.util";
import { TCardLayoutStyle } from "../types/dashboard.type";

function useCurrentCardLayoutSize(id: string) {
  const { layout, currentBreakpoint } = useAppSelector(
    (state) => state.gridLayoutConfigSlice,
  );
  const currentCardLayout = layout[currentBreakpoint].find(
    (item) => item.i === id,
  );

  const name = getResizeConstantName(
    currentCardLayout?.w || -1,
    currentCardLayout?.h || -1,
  );

  return name as TCardLayoutStyle;
}

export default useCurrentCardLayoutSize;
