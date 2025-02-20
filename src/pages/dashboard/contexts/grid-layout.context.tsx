import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector.ts";
import useScreenSize from "@/common/hooks/useScreenSize";
import { createUUID } from "@/common/utils/uuid.util";
import { createContext, useState } from "react";
import { Layout } from "react-grid-layout";
import { updateDashboardGridAct } from "../actions-creators/dashboard.action";
import { createNewLayoutItemAct } from "../actions-creators/grid.action";
import { gridItemConfigs } from "../constants/grid-card.const.tsx";
import { setIsDragging } from "../reducers/dashboard.reducer";
import { TGridItemVariant } from "../types/dashboard-item.type";
import { ILeftSidebarDroppingItem } from "../types/left-sidebar-item.type";

interface IGridLayoutContext {
  onDragStartHandler: (variant: TGridItemVariant) => void;
  onDropHandler: (layout: Layout[], item: Layout) => void;
  droppingItem: ILeftSidebarDroppingItem | undefined;
  onLayoutUpdate: (updatedLayout: Layout[]) => void;
}

const initialState: IGridLayoutContext = {
  onDragStartHandler: () => {},
  onDropHandler: () => {},
  droppingItem: undefined,
  onLayoutUpdate: () => {},
};

const GridLayoutContext = createContext(initialState);

export const GridLayoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { size } = useScreenSize();
  const { layouts } = useAppSelector((state) => state.gridSlice);

  const [droppingItem, setDroppingItem] = useState<
    ILeftSidebarDroppingItem | undefined
  >(undefined);
  const [droppingItemVariant, setDroppingItemVariant] = useState<
    TGridItemVariant | undefined
  >(undefined);

  const dispatch = useAppDispatch();

  const onDragStartHandler = (variant: TGridItemVariant) => {
    dispatch(setIsDragging(true));
    const newDroppingItem = gridItemConfigs[variant];
    newDroppingItem.i = createUUID();
    setDroppingItem(newDroppingItem);
    setDroppingItemVariant(variant);
  };

  const onDropHandler = (newLayouts: Layout[], item: Layout) => {
    if (!droppingItem || !droppingItemVariant) return;
    dispatch(setIsDragging(false));
    dispatch(
      createNewLayoutItemAct(size, newLayouts, item, droppingItemVariant),
    );
    setDroppingItem(undefined);
    setDroppingItemVariant(undefined);
  };

  const onLayoutUpdate = (updatedLayout: Layout[]) => {
    const currentLayouts = { ...layouts };
    const currentScreenSize = size === "lg" ? "lg" : "xs";
    currentLayouts[currentScreenSize] = updatedLayout;
    dispatch(updateDashboardGridAct(currentLayouts));
  };

  return (
    <GridLayoutContext.Provider
      value={{
        onDragStartHandler,
        onDropHandler,
        droppingItem,
        onLayoutUpdate,
      }}
    >
      {children}
    </GridLayoutContext.Provider>
  );
};

export default GridLayoutContext;
