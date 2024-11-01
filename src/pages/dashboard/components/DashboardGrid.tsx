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
  const layout = [
    { i: "1", x: 0, y: 0, w: 1, h: 1 },
    { i: "2", x: 1, y: 0, w: 1, h: 1 },
    { i: "3", x: 2, y: 0, w: 2, h: 1 },
  ];
  return (
    <div className="flex h-full flex-1">
      <ReactGridLayout
        className="layout h-full w-full flex-1 bg-black !p-0"
        rowHeight={100}
        layouts={{ lg: layout }}
        autoSize={true}
      >
        {layout.map((item) => (
          <GridItem key={item.i}>
            <DashboardCard />
          </GridItem>
        ))}
      </ReactGridLayout>
    </div>
  );
}

export default DashboardGrid;
