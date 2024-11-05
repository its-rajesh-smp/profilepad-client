import { debounce } from "@/common/utils/debounce.util";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import isEqual from "lodash.isequal";
import {
  Responsive as ResponsiveGridLayout,
  WidthProvider,
} from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import { updateGridLayoutConfigAct } from "../action-creators/grid-layout-config.act";
import DashboardCard from "./UI/DashboardCard";
import GridItem from "./UI/GridItem";

const ReactGridLayout = WidthProvider(ResponsiveGridLayout);

// Define breakpoints
const breakpoints = { lg: 1000, xs: 0 };

function DashboardGrid() {
  const { layout } = useAppSelector((state) => state.gridLayoutConfigSlice);
  const { layoutItems } = useAppSelector((state) => state.layoutItemsSlice);
  const dispatch = useAppDispatch();

  const debouncedOnLayoutChange = debounce(
    (_: any, all: ReactGridLayout.Layouts) => {
      // Only dispatch if the new layout is different from the current state layout
      if (!isEqual(all, layout)) {
        dispatch(updateGridLayoutConfigAct({ all }));
      }
    },
    500,
  );

  return (
    <div className="flex h-full flex-1">
      <ReactGridLayout
        className="h-full w-full !p-0"
        layouts={layout}
        breakpoints={breakpoints}
        autoSize={true}
        rowHeight={50}
        onLayoutChange={debouncedOnLayoutChange}
        draggableCancel=".no-drag"
        useCSSTransforms={true}
      >
        {layoutItems.map((item) => (
          <GridItem key={item.id}>
            <DashboardCard {...item} />
          </GridItem>
        ))}
      </ReactGridLayout>
    </div>
  );
}

export default DashboardGrid;
