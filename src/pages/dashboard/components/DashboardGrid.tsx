import { useAppSelector } from "@/common/hooks/useAppSelector";
import {
  Responsive as ResponsiveGridLayout,
  WidthProvider,
} from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import DashboardCard from "./UI/DashboardCard";
import GridItem from "./UI/GridItem";

const ReactGridLayout = WidthProvider(ResponsiveGridLayout);

function DashboardGrid() {
  const { layout } = useAppSelector((state) => state.layoutSlice);
  const { layoutItems } = useAppSelector((state) => state.layoutItemsSlice);

  return (
    <div className="flex h-full flex-1">
      <ReactGridLayout
        className="layout h-full w-full flex-1 !p-0"
        layouts={layout}
        autoSize={true}
        rowHeight={50}
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
