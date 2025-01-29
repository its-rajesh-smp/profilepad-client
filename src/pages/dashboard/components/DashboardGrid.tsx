import { useAppSelector } from "@/common/hooks/useAppSelector";
import useScreenSize from "@/common/hooks/useScreenSize";
import { debounce, isEqual } from "lodash";
import { useContext } from "react";
import {
  Layout,
  Layouts,
  Responsive as ResponsiveGridLayout,
  WidthProvider,
} from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import {
  BREAKPOINTS,
  COLS,
  MARGIN,
  ROW_HEIGHT,
} from "../constants/dashboard-grid.const";
import gridLayoutContext from "../contexts/grid-layout.context";
import {
  adjustDroppingItemWidthBasedOnGridSize,
  formatGridLayout,
} from "../utils/dashboard-grid.util";
import GridItem from "./UI/GridItem";

const ReactGridLayout = WidthProvider(ResponsiveGridLayout);

function DashboardGrid() {
  const { size } = useScreenSize();
  const { layouts } = useAppSelector(
    (state) => state.dashboardReducer.gridSlice,
  );
  const { droppingItem, onDropHandler, onLayoutChangeHandler } =
    useContext(gridLayoutContext);

  const formattedGridLayout = formatGridLayout(layouts);

  // Only call onLayoutChangeHandler if the new layout is different from the current state layout
  const debouncedLayoutChangeHandler = debounce(
    (currentLayout: Layout[], all: Layouts) => {
      // Only call if the new layout is different from the current state layout
      if (!isEqual(all, formattedGridLayout) && !droppingItem) {
        onLayoutChangeHandler(currentLayout, all);
      }
    },
    1000,
  );

  return (
    <div
      className={`min-h-[calc(100vh+100px)] w-[400px] pb-[200px] lg:w-[800px]`}
    >
      <ReactGridLayout
        className={`layout h-full min-h-[calc(100vh+100px)] justify-center`}
        breakpoints={BREAKPOINTS}
        layouts={formattedGridLayout}
        cols={COLS}
        margin={MARGIN}
        rowHeight={size === "lg" ? ROW_HEIGHT.lg : ROW_HEIGHT.xs}
        useCSSTransforms={true}
        isDroppable={true}
        onLayoutChange={debouncedLayoutChangeHandler}
        droppingItem={adjustDroppingItemWidthBasedOnGridSize(
          droppingItem,
          size,
        )}
        onDrop={onDropHandler}
      >
        {(size === "lg"
          ? formattedGridLayout["lg"]
          : formattedGridLayout["xs"]
        ).map((item, index, arr) => {
          return (
            <div key={item.i} data-grid={item}>
              <GridItem
                key={item.i}
                isLast={arr.length - 1 === index}
                index={index}
                {...item}
              />
            </div>
          );
        })}
      </ReactGridLayout>
    </div>
  );
}

export default DashboardGrid;
