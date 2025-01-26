import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import useScreenSize from "@/common/hooks/useScreenSize";
import { createUUID } from "@/common/utils/uuid.util";
import { createContext, useState } from "react";
import { Layout } from "react-grid-layout";
import { createNewLayoutItemAct } from "../actions-creators/grid-layout.action";
import { gridLayoutConfig } from "../constants/grid-card.const";
import { TDashboardGridCard } from "../types/dashboard-item.type";
import { ISidebarDroppingItem } from "../types/left-sidebar-item.type";

interface IGridLayoutContext {
  onDragStartHandler: (variant: TDashboardGridCard) => void;
  onDropHandler: (layout: Layout[], item: Layout) => void;
  droppingItem: ISidebarDroppingItem | undefined;
}

const initialState: IGridLayoutContext = {
  onDragStartHandler: () => {},
  onDropHandler: () => {},
  droppingItem: undefined,
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

  const dispatch = useAppDispatch();

  const onDragStartHandler = (variant: TDashboardGridCard) => {
    const newDroppingItem: ISidebarDroppingItem = gridLayoutConfig[variant];
    newDroppingItem.i = createUUID();
    setDroppingItem(newDroppingItem);
  };

  const onDropHandler = (newLayouts: Layout[]) => {
    dispatch(createNewLayoutItemAct(size, newLayouts));
    setDroppingItem(undefined);
  };

  return (
    <GridLayoutContext.Provider
      value={{
        onDragStartHandler,
        onDropHandler,
        droppingItem,
      }}
    >
      {children}
    </GridLayoutContext.Provider>
  );
};

export default GridLayoutContext;
