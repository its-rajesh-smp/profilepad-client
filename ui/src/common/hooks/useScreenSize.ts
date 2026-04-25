import { useEffect, useState } from "react";
import { useAppSelector } from "./useAppSelector";

type Orientation = "h" | "v";
export type TScreenSize = "xs" | "sm" | "md" | "lg";

function useScreenSize(
  callback?: (size: TScreenSize) => void,
  overrideSize: boolean = true,
) {
  const { currentView } = useAppSelector((state) => state.dashboardSlice);

  const getSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const orientation: Orientation = height > width ? "v" : "h"; // 'v' for vertical, 'h' for horizontal

    // Since the container width changes at 400px, we check for that
    const size: TScreenSize = width >= 1024 ? "lg" : "xs";

    callback?.(size);
    return `${size}-${orientation}`;
  };

  const [screenSize, setScreenSize] = useState<string>(getSize());

  useEffect(() => {
    const handleResize = () => setScreenSize(getSize());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const screenSizeArray = screenSize.split("-");

  const data = {
    size: screenSizeArray[0] as TScreenSize,
    orientation: screenSizeArray[1] as Orientation,
  };

  // If user choose mobile view then explicitly setting the size
  if (overrideSize && currentView === "mobile") data.size = "xs";

  return data;
}

export default useScreenSize;
