import React, { createContext, Dispatch, useState } from "react";
import { IDashboardCard } from "../types/dashboard.type";

const initialContextValue: {
  item: IDashboardCard;
  setItemStyle: Dispatch<React.SetStateAction<React.CSSProperties>>;
  itemStyle: React.CSSProperties;
} = {
  item: {
    id: "",
    type: "text",
  },
  setItemStyle: () => {},
  itemStyle: {},
};

const GridItemContext = createContext(initialContextValue);

const GridItemContextProvider = ({
  children,
  item,
}: {
  children: React.ReactNode;
  item: IDashboardCard;
}) => {
  const [itemStyle, setItemStyle] = useState<React.CSSProperties>(
    item.style || {},
  );
  return (
    <GridItemContext.Provider value={{ item, setItemStyle, itemStyle }}>
      {children}
    </GridItemContext.Provider>
  );
};

export default GridItemContext;
export { GridItemContextProvider };
