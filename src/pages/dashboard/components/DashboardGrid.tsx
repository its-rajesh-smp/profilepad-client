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
    { i: "2", x: 1, y: 0, w: 2, h: 1 },
    { i: "3", x: 2, y: 0, w: 1, h: 1 },
  ];
  return (
    <ReactGridLayout
      className="layout w-1/2 flex-1 !p-0 h-full overflow-hidden bg-black"
      rowHeight={100}
      width={100}
      layouts={{ lg: layout }}
      autoSize={true}
    >
      <div style={{ backgroundColor: "red" }} key="1">
        1 dsfgskdf
      </div>
      <div style={{ backgroundColor: "red" }} key="2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        mollitia repellat dolorum, incidunt unde vitae ipsa tempore,
        voluptatibus deleniti sapiente magnam natus laboriosam sit maiores
        tempora. Officia vero adipisci illum?
      </div>
      <div style={{ backgroundColor: "red" }} key="3">
        3
      </div>
    </ReactGridLayout>
  );
}

export default DashboardGrid;
