import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { debounce } from "@/common/utils/debounce.util";
import isEqual from "lodash.isequal";
import {
  Responsive as ResponsiveGridLayout,
  WidthProvider,
} from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { updateGridLayoutConfigAct } from "../../action-creators/grid-layout-config.act";
import {
  BREAKPOINTS,
  COLS,
  MARGIN,
  ROW_HEIGHT,
} from "../../constants/dashboard-grid.const";
import { setBreakpoint } from "../../reducers/grid-layout-config.reducer";
import DashboardCard from "../UI/DashboardCard";
import GridItem from "../UI/GridItem";
import "./dashboard-grid.css";

const ReactGridLayout = WidthProvider(ResponsiveGridLayout);

// Define breakpoints

function DashboardGrid() {
  const { layout } = useAppSelector((state) => state.gridLayoutConfigSlice);
  const { layoutItems } = useAppSelector((state) => state.layoutItemsSlice);
  const isEditMode = useAppSelector((state) => state.authSlice.editMode);
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

  const onBreakpointChange = (breakpoint: string) => {
    dispatch(setBreakpoint(breakpoint));
  };

  return (
    <div className="flex h-full flex-1">
      <ReactGridLayout
        className="h-full w-full !p-0"
        layouts={layout}
        breakpoints={BREAKPOINTS}
        onBreakpointChange={onBreakpointChange}
        autoSize={true}
        rowHeight={ROW_HEIGHT}
        onLayoutChange={debouncedOnLayoutChange}
        draggableCancel=".no-drag"
        isDraggable={isEditMode}
        isDroppable={isEditMode}
        isResizable={false}
        useCSSTransforms={true}
        cols={COLS}
        margin={MARGIN}
      >
        {layoutItems.map((item) => (
          <GridItem type={item.type} key={item.id} itemId={item.id}>
            <DashboardCard {...item} />
          </GridItem>
        ))}
      </ReactGridLayout>
    </div>
  );
}

export default DashboardGrid;
