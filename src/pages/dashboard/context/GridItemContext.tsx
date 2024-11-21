import { createContext } from "react";
import { IDashboardCard } from "../types/dashboard.type";

const GridItemContext = createContext({
  item: {} as IDashboardCard,
});

const GridItemContextProvider = ({
  children,
  item,
}: {
  children: React.ReactNode;
  item: IDashboardCard;
}) => {
  return (
    <GridItemContext.Provider value={{ item }}>
      {children}
    </GridItemContext.Provider>
  );
};

export default GridItemContext;
export { GridItemContextProvider };
