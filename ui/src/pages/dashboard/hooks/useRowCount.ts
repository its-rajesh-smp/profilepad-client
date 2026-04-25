import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { useEffect } from "react";
import { updateDashboardGridAct } from "../actions-creators/dashboard.action";
import { setGridLayouts } from "../reducers/grid.reducer";

export function useRowCount(id: string, rowCount: number = 1) {
  const layouts = useAppSelector((state) => state.gridSlice.layouts);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const updateHeight = () => {
      const newHeight = rowCount;

      const updatedLayout = { ...layouts };
      Object.keys(updatedLayout).forEach((screenSize) => {
        updatedLayout[screenSize] = updatedLayout[screenSize].map((layout) => {
          if (layout.i === id) {
            return { ...layout, h: newHeight };
          }
          return layout;
        });
      });

      dispatch(setGridLayouts(updatedLayout));
      dispatch(updateDashboardGridAct(updatedLayout));
    };

    updateHeight();
    return () => {};
  }, [id, rowCount]); // Run only once on mount
}
