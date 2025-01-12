import MessageDisplay from "@/common/components/UI/MessageDisplay";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import useScreenSize from "@/common/hooks/useScreenSize";
import { debounce } from "@/common/utils/debounce.util";
import isEqual from "lodash.isequal";
import { useState } from "react";
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
import { defaultGridData } from "../../constants/default-grid.const";
import { setBreakpoint } from "../../reducers/grid-layout-config.reducer";
import DashboardCard from "../UI/DashboardCard";
import GridItem from "../UI/GridItem";
import "./dashboard-grid.css";

const ReactGridLayout = WidthProvider(ResponsiveGridLayout);

function DashboardGrid() {
  const { layout, dashboardSetting } = useAppSelector(
    (state) => state.gridLayoutConfigSlice,
  );
  const { layoutItems } = useAppSelector((state) => state.layoutItemsSlice);
  const isEditMode = useAppSelector((state) => state.authSlice.editMode);
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const dispatch = useAppDispatch();

  const { size } = useScreenSize();

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

  const containerClassName = `relative flex ${dashboardSetting.isMobileView && "justify-center"} ${size !== "lg" && "justify-center"} ${dashboardSetting.profileAlignment === "top" && "justify-center"} w-full`;

  return (
    <div className={containerClassName}>
      <ReactGridLayout
        className={`min-h-[calc(100vh+100px)] !p-0 ${dashboardSetting.isMobileView || size !== "lg" ? "w-[400px]" : "w-[900px]"} `}
        layouts={
          layout["lg"].length > 0 || !isEditMode
            ? layout
            : defaultGridData.gridLayoutConfig
        }
        breakpoints={BREAKPOINTS}
        onBreakpointChange={onBreakpointChange}
        autoSize={true}
        rowHeight={ROW_HEIGHT}
        onLayoutChange={debouncedOnLayoutChange}
        draggableCancel=".no-drag"
        isDraggable={isEditMode && !sidebarOpened}
        isDroppable={isEditMode}
        isResizable={false}
        useCSSTransforms={true}
        cols={COLS}
        margin={MARGIN}
      >
        {(layoutItems.length > 0 || !isEditMode
          ? layoutItems
          : defaultGridData.layoutItems
        ).map((item) => {
          return (
            <GridItem
              sidebarOpened={sidebarOpened}
              setSidebarOpened={setSidebarOpened}
              item={item}
              key={item.id}
            >
              <DashboardCard />
            </GridItem>
          );
        })}
      </ReactGridLayout>

      {!isEditMode && layoutItems.length == 0 && (
        <MessageDisplay
          message="Nothing is added"
          imgClassName=" w-80 h-80"
          imgSrc="https://cdn-icons-png.flaticon.com/512/14005/14005478.png"
        />
      )}
    </div>
  );
}

export default DashboardGrid;
