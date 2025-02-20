import { useAppSelector } from "@/common/hooks/useAppSelector";
import useScreenSize from "@/common/hooks/useScreenSize";
import { useContext } from "react";
import {
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
  const { layouts, layoutItems } = useAppSelector((state) => state.gridSlice);
  const { isFirstGridLoad, currentActiveGridItemId, currentView } =
    useAppSelector((state) => state.dashboardSlice);
  const { isAuthenticated } = useAppSelector((state) => state.authSlice);

  const { droppingItem, onDropHandler, onLayoutResizeStop } =
    useContext(gridLayoutContext);
  const { size } = useScreenSize();

  const formattedGridLayout = formatGridLayout(
    layouts,
    layoutItems,
    isAuthenticated,
  );

  return (
    <div
      className={`min-h-[calc(100vh+100px)] pb-[200px] ${getLayoutWidth(currentView)} transition-all duration-200`}
    >
      <ReactGridLayout
        className={`layout h-full min-h-[calc(100vh+100px)] w-full justify-center`}
        breakpoints={BREAKPOINTS}
        layouts={formattedGridLayout}
        cols={COLS}
        margin={MARGIN}
        rowHeight={size === "lg" ? ROW_HEIGHT.lg : ROW_HEIGHT.xs}
        isDroppable={true}
        droppingItem={adjustDroppingItemWidthBasedOnGridSize(
          droppingItem,
          size,
        )}
        useCSSTransforms={true}
        onDrop={onDropHandler}
        draggableCancel=".no-drag"
        resizeHandle={isFirstGridLoad ? <></> : undefined}
        isDraggable={isAuthenticated}
        onResizeStop={(layout) => {
          onLayoutResizeStop(layout);
        }}
        onDragStop={(layout) => {
          onLayoutResizeStop(layout);
        }}
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
                <GridItem
                  isLast={arr.length - 1 === index || arr.length === 0}
                  index={index}
                />
              </GridItemContextProvider>
            </div>
          );
        })}
      </ReactGridLayout>
    </div>
  );
}

export default DashboardGrid;
