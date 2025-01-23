import useScreenSize from "@/common/hooks/useScreenSize";
import { useContext } from "react";
import {
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
import reactGridLayoutContext from "../contexts/react-grid-layout.context";
import { adjustDroppingItemWidthBasedOnGridSize } from "../utils/dashboard-grid.util";
import GridItem from "./UI/GridItem";

const ReactGridLayout = WidthProvider(ResponsiveGridLayout);

function DashboardGrid() {
  const { size } = useScreenSize();
  const { droppingItem } = useContext(reactGridLayoutContext);

  const layouts: Layouts = {
    lg: [
      { i: "a", x: 0, y: 0, w: 2, h: 2, isResizable: false },
      { i: "b", x: 2, y: 0, w: 3, h: 3, isResizable: false },
      { i: "c", x: 5, y: 0, w: 1, h: 1, isResizable: false },
    ],
    xs: [
      { i: "a", x: 0, y: 0, w: 3, h: 2, isResizable: false },
      { i: "b", x: 0, y: 2, w: 3, h: 3, isResizable: false },
      { i: "c", x: 3, y: 0, w: 2, h: 2, isResizable: false },
    ],
  };

  return (
    <div
      className={`min-h-[calc(100vh+100px)] w-[400px] pb-[200px] lg:w-[800px]`}
    >
      <ReactGridLayout
        className={`layout h-full min-h-[calc(100vh+100px)] justify-center`}
        breakpoints={BREAKPOINTS}
        layouts={layouts}
        cols={COLS}
        margin={MARGIN}
        rowHeight={size === "lg" ? ROW_HEIGHT.lg : ROW_HEIGHT.xs}
        useCSSTransforms={true}
        isDroppable={true}
        droppingItem={adjustDroppingItemWidthBasedOnGridSize(
          droppingItem,
          size,
        )}
      >
        {(size === "lg" ? layouts["lg"] : layouts["xs"]).map((item, index) => {
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
