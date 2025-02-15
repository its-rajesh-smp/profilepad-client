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
import { GridItemContextProvider } from "../contexts/grid-item.context";
import gridLayoutContext from "../contexts/grid-layout.context";
import {
  adjustDroppingItemWidthBasedOnGridSize,
  formatGridLayout,
  getLayoutWidth,
} from "../utils/dashboard-grid.util";
import GridItem from "./UI/GridItem";

const ReactGridLayout = WidthProvider(ResponsiveGridLayout);

function DashboardGrid() {
  const { size } = useScreenSize();
  const { layouts, layoutItems } = useAppSelector((state) => state.gridSlice);
  const { isFirstGridLoad, currentActiveGridItemId, currentView } =
    useAppSelector((state) => state.dashboardSlice);
  const { droppingItem, onDropHandler, onLayoutChangeHandler } =
    useContext(gridLayoutContext);

  const formattedGridLayout = formatGridLayout(layouts, layoutItems);

  // Only call onLayoutChangeHandler if the new layout is different from the current state layout
  const debouncedLayoutChangeHandler = debounce(
    (updatedLayout: Layout[], all: Layouts) => {
      const isAnythingChanged =
        JSON.stringify(all) != JSON.stringify(formattedGridLayout);
      // Only call if the new layout is different from the current state layout
      if (isAnythingChanged && !droppingItem) {
        onLayoutChangeHandler(updatedLayout, all);
      }
    },
    1000,
  );

  return (
    <div
      className={`min-h-[calc(100vh+100px)] pb-[200px] ${getLayoutWidth(currentView)} `}
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
        draggableCancel=".no-drag"
        resizeHandle={isFirstGridLoad ? <></> : undefined}
      >
        {(size === "lg"
          ? formattedGridLayout["lg"]
          : formattedGridLayout["xs"]
        ).map((item, index, arr) => {
          return (
            <div
              style={{
                zIndex: currentActiveGridItemId === item.i ? 50 : undefined,
              }}
              key={item.i}
              data-grid={item}
            >
              <GridItemContextProvider {...item}>
                <GridItem isLast={arr.length - 1 === index} index={index} />
              </GridItemContextProvider>
            </div>
          );
        })}
      </ReactGridLayout>
    </div>
  );
}

export default DashboardGrid;
