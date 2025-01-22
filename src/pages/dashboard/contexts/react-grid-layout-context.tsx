import { createContext } from "react";

const reactGridLayoutContext = createContext({});

export const ReactGridLayoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <reactGridLayoutContext.Provider value={{}}>
      {children}
    </reactGridLayoutContext.Provider>
  );
};

export default reactGridLayoutContext;
