import { createUUID } from "@/common/utils/uuid.util";
import { createContext, useState } from "react";
import { gridLayoutConfig } from "../constants/grid-card.const";
import { TDashboardGridCard } from "../types/dashboard-item.type";
import { ISidebarDroppingItem } from "../types/left-sidebar-item.type";

interface IGridLayoutContext {
  onDragStartHandler: (variant: TDashboardGridCard) => void;
  onDragEnd: () => void;
  droppingItem: ISidebarDroppingItem | undefined;
}

const initialState: IGridLayoutContext = {
  onDragStartHandler: () => {},
  onDragEnd: () => {},
  droppingItem: undefined,
};

const GridLayoutContext = createContext(initialState);

export const GridLayoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [droppingItem, setDroppingItem] = useState<
    ISidebarDroppingItem | undefined
  >(undefined);

  const onDragStartHandler = (variant: TDashboardGridCard) => {
    const newDroppingItem: ISidebarDroppingItem = JSON.parse(
      JSON.stringify(gridLayoutConfig[variant]),
    );
    newDroppingItem.i = createUUID();
    setDroppingItem(newDroppingItem);
  };

  const onDragEnd = () => {
    setDroppingItem(undefined);
  };
  return (
    <GridLayoutContext.Provider
      value={{ onDragStartHandler, onDragEnd, droppingItem }}
    >
      {children}
    </GridLayoutContext.Provider>
  );
};

export default GridLayoutContext;
