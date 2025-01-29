import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import useScreenSize from "@/common/hooks/useScreenSize";
import { createUUID } from "@/common/utils/uuid.util";
import { createContext, useState } from "react";
import { Layout, Layouts } from "react-grid-layout";
import { updateDashboardGridAct } from "../actions-creators/dashboard.action";
import { createNewLayoutItemAct } from "../actions-creators/grid.action";
import { gridLayoutConfig } from "../constants/grid-card.const";
import { TDashboardGridCard } from "../types/dashboard-item.type";
import { ISidebarDroppingItem } from "../types/left-sidebar-item.type";

interface IGridLayoutContext {
  onDragStartHandler: (variant: TDashboardGridCard) => void;
  onDropHandler: (layout: Layout[], item: Layout) => void;
  droppingItem: ISidebarDroppingItem | undefined;
  onLayoutChangeHandler: (currentLayout: Layout[], allLayouts: Layouts) => void;
}

const initialState: IGridLayoutContext = {
  onDragStartHandler: () => {},
  onDropHandler: () => {},
  droppingItem: undefined,
  onLayoutChangeHandler: () => {},
};

const GridLayoutContext = createContext(initialState);

export const GridLayoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { size } = useScreenSize();

  const [droppingItem, setDroppingItem] = useState<
    ISidebarDroppingItem | undefined
  >(undefined);
  const [droppingItemVariant, setDroppingItemVariant] = useState<
    TDashboardGridCard | undefined
  >(undefined);

  const dispatch = useAppDispatch();

  const onDragStartHandler = (variant: TDashboardGridCard) => {
    const newDroppingItem: ISidebarDroppingItem = gridLayoutConfig[variant];
    newDroppingItem.i = createUUID();
    setDroppingItem(newDroppingItem);
    setDroppingItemVariant(variant);
  };

  const onDropHandler = (newLayouts: Layout[]) => {
    if (!droppingItem || !droppingItemVariant) return;
    dispatch(
      createNewLayoutItemAct(
        size,
        newLayouts,
        droppingItem,
        droppingItemVariant,
      ),
    );
    setDroppingItem(undefined);
    setDroppingItemVariant(undefined);
  };

  const onLayoutChangeHandler = (
    _newLayouts: Layout[],
    allLayouts: Layouts,
  ) => {
    dispatch(updateDashboardGridAct(allLayouts));
  };

  return (
    <GridLayoutContext.Provider
      value={{
        onDragStartHandler,
        onDropHandler,
        droppingItem,
        onLayoutChangeHandler,
      }}
    >
      {children}
    </GridLayoutContext.Provider>
  );
};

export default GridLayoutContext;
