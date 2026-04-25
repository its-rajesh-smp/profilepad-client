import React, { useEffect } from "react";

function useContainerSize(targetClassName?: string) {
  const [screenSize, setScreenSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      if (targetClassName) {
        const element = document.querySelector(
          `.${targetClassName}`
        ) as HTMLElement;
        if (element) {
          const rect = element.getBoundingClientRect();
          const computedStyle = window.getComputedStyle(element);

          // Calculate the full width and height, including padding
          const paddingWidth =
            parseFloat(computedStyle.paddingLeft) +
            parseFloat(computedStyle.paddingRight);
          const paddingHeight =
            parseFloat(computedStyle.paddingTop) +
            parseFloat(computedStyle.paddingBottom);

          setScreenSize({
            width: rect.width + paddingWidth,
            height: rect.height + paddingHeight,
          });
        }
      } else {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };

    handleResize(); // Initial size calculation
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [targetClassName]);

  return screenSize;
}

export default useContainerSize;
