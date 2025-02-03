import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { ROW_HEIGHT } from "@/pages/dashboard/constants/dashboard-grid.const";
import { useEffect, useRef } from "react";
import { setGridLayouts } from "../reducers/grid.reducer";
import { updateDashboardGridAct } from "../actions-creators/dashboard.action";

export function useRowCount(id: string) {
  const layouts = useAppSelector((state) => state.gridSlice.layouts);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const newHeight = Math.ceil(
          containerRef.current.clientHeight / ROW_HEIGHT.lg,
        );

        console.log(newHeight);

        const updatedLayout = { ...layouts };
        Object.keys(updatedLayout).forEach((screenSize) => {
          updatedLayout[screenSize] = updatedLayout[screenSize].map(
            (layout) => {
              if (layout.i === id) {
                return { ...layout, h: newHeight };
              }
              return layout;
            },
          );
        });

        dispatch(setGridLayouts(updatedLayout));
        dispatch(updateDashboardGridAct(updatedLayout));
      }
    };

    // Initial calculation (without setTimeout, just call the function)
    updateHeight();

    // Resize observer for dynamic updates
    const observer = new ResizeObserver(updateHeight);

    // Observe only if containerRef is set
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Cleanup observer on unmount or when the ref changes
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []); // Run only once on mount

  return { containerRef };
}
