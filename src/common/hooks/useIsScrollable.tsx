import { useEffect, useRef, useState } from "react";

function useIsScrollable<T extends HTMLElement>(dependency?: any) {
  const ref = useRef<T>(null);
  const [isScrollable, setIsScrollable] = useState(false);

  // Function to check if scrolling is needed
  const checkScrollable = () => {
    if (ref.current) {
      const { scrollHeight, clientHeight } = ref.current;
      setIsScrollable(scrollHeight > clientHeight);
    }
  };

  // Re-check when `dependency` changes or window resizes
  useEffect(() => {
    checkScrollable();
    window.addEventListener("resize", checkScrollable);

    return () => window.removeEventListener("resize", checkScrollable);
  }, [dependency]); // Only re-runs when `dependency` changes

  return { ref, isScrollable };
}

export default useIsScrollable;
