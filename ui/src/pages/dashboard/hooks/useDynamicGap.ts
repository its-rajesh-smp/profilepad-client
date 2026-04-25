import { useEffect, useState, useRef } from "react";

function useDynamicGap() {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const childrenRef = useRef<HTMLDivElement | null>(null);
  const [gap, setGap] = useState("0px");

  useEffect(() => {
    function updateGap() {
      if (parentRef.current && childrenRef.current) {
        const parentHeight = parentRef.current.clientHeight;
        const childrenHeight = childrenRef.current.clientHeight;
        const difference = parentHeight - childrenHeight;
        setGap(`${Math.max(0, difference / 2)}px`); // Distribute gap evenly
      }
    }

    updateGap();
    window.addEventListener("resize", updateGap);
    return () => window.removeEventListener("resize", updateGap);
  }, []);

  return { parentRef, childrenRef, gap };
}

export default useDynamicGap;
