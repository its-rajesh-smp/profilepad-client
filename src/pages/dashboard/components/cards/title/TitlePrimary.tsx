import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import GridItemContext from "@/pages/dashboard/contexts/grid-item.context";
import { useContext } from "react";

function TitlePrimary() {
  const { item } = useContext(GridItemContext);
  return (
    <div
      style={item?.styles?.card}
      className="flex h-full w-full items-center rounded-2xl border bg-white px-4 transition-colors duration-300"
    >
      <AutoSaveTextField
        placeholder="hello world"
        value="Hello World"
        fieldToUpdate="title"
        id="title"
        style={{ ...item?.styles?.primaryText, ...item?.styles?.card }}
        className="bg-white text-2xl font-bold"
      />
    </div>
  );
}

export default TitlePrimary;
