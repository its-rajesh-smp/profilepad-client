import React, { createContext, Dispatch, useState } from "react";
import { IDashboardCard } from "../types/dashboard.type";

const initialContextValue: {
  item: IDashboardCard;
  setItemStyle: Dispatch<React.SetStateAction<React.CSSProperties>>;
  itemStyle: React.CSSProperties;
  htmlPreview: boolean;
  setHtmlPreview: Dispatch<React.SetStateAction<boolean>>;
} = {
  item: {
    id: "",
    type: "text",
  },
  setItemStyle: () => {},
  itemStyle: {},
  htmlPreview: true,
  setHtmlPreview: () => {},
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
  const [htmlPreview, setHtmlPreview] = useState(true);

  return (
    <GridItemContext.Provider
      value={{
        item,
        setItemStyle,
        itemStyle,
        htmlPreview,
        setHtmlPreview,
      }}
    >
      {children}
    </GridItemContext.Provider>
  );
};

export default GridItemContext;
export { GridItemContextProvider };
