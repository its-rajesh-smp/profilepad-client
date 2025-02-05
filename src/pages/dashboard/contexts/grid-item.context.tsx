import { useAppSelector } from "@/common/hooks/useAppSelector";
import useScreenSize, { TScreenSize } from "@/common/hooks/useScreenSize";
import { createContext } from "react";
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
  const gridItemSizeVariant = getGridItemSizeVariant(screenSize, w, h);
  const { layoutItems } = useAppSelector((state) => state.gridSlice);
  const item: IGridItem = layoutItems.find(
    (item: IGridItem) => item.id === i,
  ) as IGridItem;

  return (
    <GridItemContext.Provider value={{ screenSize, item, gridItemSizeVariant }}>
      {children}
    </GridItemContext.Provider>
  );
};

export default GridItemContext;
export { GridItemContextProvider };
