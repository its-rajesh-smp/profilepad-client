import { debounce } from "@/common/heplers/debounce";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import {
  Responsive as ResponsiveGridLayout,
  WidthProvider,
} from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { updateLayoutAct } from "../action-creators/layout.act";
import DashboardCard from "./UI/DashboardCard";
import GridItem from "./UI/GridItem";
import isEqual from "lodash.isequal";

const ReactGridLayout = WidthProvider(ResponsiveGridLayout);

// Define breakpoints
const breakpoints = { lg: 1000, xs: 0 };

function DashboardGrid() {
  const { layout } = useAppSelector((state) => state.layoutSlice);
  const { layoutItems } = useAppSelector((state) => state.layoutItemsSlice);
  const dispatch = useAppDispatch();

  const debouncedOnLayoutChange = debounce(
    (current: ReactGridLayout.Layout[], all: ReactGridLayout.Layouts) => {
      // Only dispatch if the new layout is different from the current state layout
      if (!isEqual(all, layout)) {
        dispatch(updateLayoutAct({ current, all }));
      }
    },
    500,
  );

  return (
    <div className="flex h-full flex-1">
      <ReactGridLayout
        className="layout h-full w-full flex-1 !p-0"
        layouts={layout}
        breakpoints={breakpoints}
        autoSize={true}
        rowHeight={50}
        onLayoutChange={debouncedOnLayoutChange}
        draggableCancel=".no-drag"
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
