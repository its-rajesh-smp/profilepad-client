import React from "react";

interface IAnimatedModalContext {
  url: string;
  setUrl: (url: string) => void;
}

const AnimatedModalContext = React.createContext<IAnimatedModalContext>({
  url: "",
  setUrl: () => {},
});

export const AnimatedModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [url, setUrl] = React.useState("");

  return (
    <AnimatedModalContext.Provider value={{ setUrl, url }}>
      {children}
    </AnimatedModalContext.Provider>
  );
};

export default AnimatedModalContext;
