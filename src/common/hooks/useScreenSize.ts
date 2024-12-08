import { useEffect, useState } from "react";

type Orientation = "h" | "v";
type Size = "xs" | "sm" | "md" | "lg";

function useScreenSize() {
  // Define breakpoints for screen sizes
  const breakpoints = {
    xs: 576, // Extra small screens (e.g., phones)
    sm: 768, // Small screens (e.g., tablets)
    md: 992, // Medium screens (e.g., desktops)
    lg: 1200, // Large screens (e.g., larger desktops)
  };

  const getSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Determine the orientation
    const orientation: Orientation = height > width ? "v" : "h"; // 'v' for vertical, 'h' for horizontal

    // Determine the screen size
    let size: Size;
    if (width < breakpoints.xs) {
      size = "xs";
    } else if (width < breakpoints.sm) {
      size = "sm";
    } else if (width < breakpoints.md) {
      size = "md";
    } else {
      size = "lg";
    }

    return `${size}-${orientation}`;
  };

  const [screenSize, setScreenSize] = useState<string>(getSize());

  useEffect(() => {
    const handleResize = () => setScreenSize(getSize());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const screenSizeArray = screenSize.split("-");
  return {
    size: screenSizeArray[0] as Size,
    orientation: screenSizeArray[1] as Orientation,
  };
}

export default useScreenSize;