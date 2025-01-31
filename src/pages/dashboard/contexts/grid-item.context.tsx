import useScreenSize, { TScreenSize } from "@/common/hooks/useScreenSize";
import { createContext } from "react";
import useItemDetails from "../hooks/useItemDetails";
import { IGridItem, TGridItemSizeVariant } from "../types/dashboard-item.type";
import { getGridItemSizeVariant } from "../utils/grid-item.util";

export interface IGridItemContext {
  screenSize: TScreenSize;
  item: IGridItem;
  gridItemSizeVariant: TGridItemSizeVariant;
}

const initialState: IGridItemContext = {
  screenSize: "lg",
  item: { id: "", sizeVariant: "H-2_W-2", variant: "image" },
  gridItemSizeVariant: "H-1_W-100",
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
  const item = useItemDetails(i);
  const gridItemSizeVariant = getGridItemSizeVariant(screenSize, w, h);

  return (
    <GridItemContext.Provider value={{ screenSize, item, gridItemSizeVariant }}>
      {children}
    </GridItemContext.Provider>
  );
};

export default GridItemContext;
export { GridItemContextProvider };
