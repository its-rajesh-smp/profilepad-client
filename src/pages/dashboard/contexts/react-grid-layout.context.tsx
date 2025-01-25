import useScreenSize from "@/common/hooks/useScreenSize";
import { createUUID } from "@/common/utils/uuid.util";
import { createContext, useState } from "react";
import { Layout, Layouts } from "react-grid-layout";
import { gridLayoutConfig } from "../constants/grid-card.const";
import { TDashboardGridCard } from "../types/dashboard-item.type";
import { ISidebarDroppingItem } from "../types/left-sidebar-item.type";

interface IGridLayoutContext {
  onDragStartHandler: (variant: TDashboardGridCard) => void;
  onDropHandler: (layout: Layout[], item: Layout) => void;
  droppingItem: ISidebarDroppingItem | undefined;
  layouts: Layouts;
}

const initialState: IGridLayoutContext = {
  onDragStartHandler: () => {},
  onDropHandler: () => {},
  droppingItem: undefined,
  layouts: {},
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
  const [layouts, setLayouts] = useState<Layouts>({
    lg: [],
    xs: [],
  });

  const onDragStartHandler = (variant: TDashboardGridCard) => {
    const newDroppingItem: ISidebarDroppingItem = gridLayoutConfig[variant];
    newDroppingItem.i = createUUID();
    setDroppingItem(newDroppingItem);
  };

  const onDropHandler = (_newLayouts: Layout[]) => {
    setLayouts((prev) => {
      const currentLayouts = { ...prev };
      currentLayouts[size] = _newLayouts;
      return currentLayouts;
    });
    setDroppingItem(undefined);
  };

  return (
    <GridLayoutContext.Provider
      value={{
        onDragStartHandler,
        layouts,
        onDropHandler,
        droppingItem,
      }}
    >
      {children}
    </GridLayoutContext.Provider>
  );
};

export default GridLayoutContext;
