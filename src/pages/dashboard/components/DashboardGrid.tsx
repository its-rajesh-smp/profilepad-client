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

const ReactGridLayout = WidthProvider(ResponsiveGridLayout);

function DashboardGrid() {
  const { layout } = useAppSelector((state) => state.layoutSlice);
  const { layoutItems } = useAppSelector((state) => state.layoutItemsSlice);
  const dispatch = useAppDispatch();

  // Define the layouts for mobile and large screens
  const layouts = {
    lg: layout.lg, // Define your large screen layout
    xs: layout.xs, // Define your mobile layout
  };

  // Define breakpoints
  const breakpoints = { lg: 800, xs: 0 };

  /**
   * Handles changes to the grid layout.
   *
   * @param {ReactGridLayout.Layout[]} current - The current layout configuration.
   * @param {ReactGridLayout.Layouts} all - All layout configurations across different breakpoints.
   */
  const onLayoutChange = (
    current: ReactGridLayout.Layout[],
    all: ReactGridLayout.Layouts,
  ) => {
    console.log(all);
    dispatch(updateLayoutAct({ current, all }));
  };

  return (
    <div className="flex h-full flex-1">
      <ReactGridLayout
        className="layout h-full w-full flex-1 !p-0"
        layouts={layouts}
        breakpoints={breakpoints}
        autoSize={true}
        rowHeight={50}
        onLayoutChange={debounce(onLayoutChange, 500)}
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
