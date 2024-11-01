import {
  Responsive as ResponsiveGridLayout,
  WidthProvider,
} from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ReactGridLayout = WidthProvider(ResponsiveGridLayout);

function DashboardGrid() {
  const layout = [
    { i: "1", x: 0, y: 0, w: 1, h: 1 },
    { i: "2", x: 1, y: 0, w: 1, h: 1 },
    { i: "3", x: 2, y: 0, w: 1, h: 1 },
  ];
  return (
    <div className="flex h-full flex-1">
      <ReactGridLayout
        className="layout h-full w-full flex-1 bg-black !p-0"
        rowHeight={100}
        layouts={{ lg: layout }}
        autoSize={true}
      >
        <div style={{ backgroundColor: "red" }} key="1">
          1 dsfgskdf
        </div>
        <div style={{ backgroundColor: "red" }} key="2">
          2
        </div>
        <div style={{ backgroundColor: "red" }} key="3">
          3
        </div>
      </ReactGridLayout>
    </div>
  );
}

export default DashboardGrid;
