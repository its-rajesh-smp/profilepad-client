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
import reactGridLayoutContext from "../contexts/react-grid-layout.context";
import {
  adjustDroppingItemWidthBasedOnGridSize,
  formatGridLayout,
} from "../utils/dashboard-grid.util";
import GridItem from "./UI/GridItem";

const ReactGridLayout = WidthProvider(ResponsiveGridLayout);

function DashboardGrid() {
  const { size } = useScreenSize();

  const { droppingItem, layouts, onDropHandler } = useContext(
    reactGridLayoutContext,
  );

  const formattedGridLayout = formatGridLayout(layouts);
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
        droppingItem={adjustDroppingItemWidthBasedOnGridSize(
          droppingItem,
          size,
        )}
        onDrop={onDropHandler}
      >
        {(size === "lg"
          ? formattedGridLayout["lg"]
          : formattedGridLayout["xs"]
        ).map((item, index) => {
          return (
            <div key={item.i} data-grid={item}>
              <GridItem key={item.i} index={index} i={item.i} />
            </div>
          );
        })}
      </ReactGridLayout>
    </div>
  );
}

export default DashboardGrid;
