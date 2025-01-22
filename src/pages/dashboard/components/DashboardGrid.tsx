import useScreenSize from "@/common/hooks/useScreenSize";
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
import GridItem from "./UI/GridItem";

const ReactGridLayout = WidthProvider(ResponsiveGridLayout);

function DashboardGrid() {
  const { size } = useScreenSize();

  const layouts: Layouts = {
    lg: [
      { i: "a", x: 0, y: 0, w: 2, h: 2, isResizable: false },
      { i: "b", x: 2, y: 0, w: 3, h: 3, isResizable: false },
      { i: "c", x: 5, y: 0, w: 1, h: 1, isResizable: false },
      { i: "d", x: 6, y: 0, w: 2, h: 1, isResizable: false },
      { i: "e", x: 0, y: 1, w: 1, h: 2, isResizable: false },
      { i: "f", x: 1, y: 1, w: 2, h: 2, isResizable: false },
      { i: "g", x: 3, y: 1, w: 3, h: 2, isResizable: false },
      { i: "h", x: 0, y: 3, w: 2, h: 1, isResizable: false },
      { i: "i", x: 2, y: 3, w: 2, h: 1, isResizable: false },
      { i: "j", x: 4, y: 3, w: 2, h: 1, isResizable: false },
      { i: "k", x: 6, y: 3, w: 2, h: 1, isResizable: false },
      { i: "l", x: 0, y: 4, w: 3, h: 2, isResizable: false },
      { i: "m", x: 3, y: 4, w: 2, h: 2, isResizable: false },
    ],
    xs: [
      { i: "a", x: 0, y: 0, w: 3, h: 2, isResizable: false },
      { i: "b", x: 0, y: 2, w: 3, h: 3, isResizable: false },
      { i: "c", x: 3, y: 0, w: 2, h: 2, isResizable: false },
      { i: "d", x: 5, y: 0, w: 1, h: 1, isResizable: false },
      { i: "e", x: 0, y: 5, w: 2, h: 1, isResizable: false },
      { i: "f", x: 2, y: 5, w: 2, h: 1, isResizable: false },
      { i: "g", x: 4, y: 5, w: 3, h: 2, isResizable: false },
      { i: "h", x: 0, y: 6, w: 1, h: 1, isResizable: false },
      { i: "i", x: 1, y: 6, w: 2, h: 2, isResizable: false },
      { i: "j", x: 3, y: 6, w: 2, h: 1, isResizable: false },
      { i: "k", x: 5, y: 6, w: 1, h: 1, isResizable: false },
      { i: "l", x: 6, y: 6, w: 3, h: 1, isResizable: false },
    ],
  };

  let width = "lg:w-[800px]  w-[400px]";
  let currentLayout = size === "lg" ? layouts["lg"] : layouts["xs"];

  return (
    <div className={`min-h-[calc(100vh+100px)] pb-[200px] ${width}`}>
      <ReactGridLayout
        className={`layout h-full justify-center`}
        breakpoints={BREAKPOINTS}
        layouts={layouts}
        cols={COLS}
        margin={MARGIN}
        rowHeight={size === "lg" ? ROW_HEIGHT.lg : ROW_HEIGHT.xs}
        useCSSTransforms={true}
        isDroppable={true}
        droppingItem={{ w: 2, h: 2, i: "dropping-item" }}
      >
        {currentLayout.map((item, index) => {
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
