import useScreenSize, { TScreenSize } from "@/common/hooks/useScreenSize";
import { createContext } from "react";
import useGridItem from "../hooks/useGridItem";
import { IGridItem, TGridItemSizeVariant } from "../types/dashboard-item.type";
import { getGridItemSizeVariant } from "../utils/grid-item.util";

export interface IGridItemContext {
  screenSize: TScreenSize;
  item: IGridItem;
  gridItemSizeVariant: TGridItemSizeVariant;
}

const initialState: IGridItemContext = {
  screenSize: "lg",
  item: { id: "", sizeVariant: "2x2", variant: "image" },
  gridItemSizeVariant: "1x100",
};

const GridItemContext = createContext(initialState);

const GridItemContextProvider = ({
  children,
  i,
  w,
  h,
}: {
  children: React.ReactNode;
  i: string;
  w: number;
  h: number;
}) => {
  const { size: screenSize } = useScreenSize();
  const gridItemSizeVariant = getGridItemSizeVariant(screenSize, w, h);
  const item = useGridItem(i);

  return (
    <GridItemContext.Provider value={{ screenSize, item, gridItemSizeVariant }}>
      {children}
    </GridItemContext.Provider>
  );
};

export default GridItemContext;
export { GridItemContextProvider };
