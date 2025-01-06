import React, { createContext, Dispatch, useState } from "react";
import { IDashboardCard } from "../types/dashboard.type";

const initialContextValue: {
  item: IDashboardCard;
  setItemStyle: Dispatch<React.SetStateAction<React.CSSProperties>>;
  itemStyle: React.CSSProperties;
  htmlPreview: boolean;
  setHtmlPreview: Dispatch<React.SetStateAction<boolean>>;
  closeSidebar: () => void;
} = {
  item: {
    id: "",
    type: "text",
  },
  setItemStyle: () => {},
  itemStyle: {},
  htmlPreview: true,
  setHtmlPreview: () => {},
  closeSidebar: () => {},
};

const GridItemContext = createContext(initialContextValue);

const GridItemContextProvider = ({
  children,
  item,
  setSidebarOpened,
}: {
  children: React.ReactNode;
  item: IDashboardCard;
  sidebarOpened: boolean;
  setSidebarOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [itemStyle, setItemStyle] = useState<React.CSSProperties>(
    item.style || {},
  );
  const [htmlPreview, setHtmlPreview] = useState(true);

  const closeSidebar = () => {
    setSidebarOpened(false);
  };

  return (
    <GridItemContext.Provider
      value={{
        item,
        setItemStyle,
        itemStyle,
        htmlPreview,
        setHtmlPreview,
        closeSidebar,
      }}
    >
      {children}
    </GridItemContext.Provider>
  );
};

export default GridItemContext;
export { GridItemContextProvider };
