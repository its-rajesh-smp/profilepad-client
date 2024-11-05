import { motion } from "framer-motion";
import React, { MouseEvent, ReactNode, TouchEvent } from "react";

interface GridItemProps {
  style?: React.CSSProperties; // Style prop (optional)
  className?: string; // Class name (optional)
  onMouseDown?: (e: MouseEvent) => void; // Mouse down event handler (optional)
  onMouseUp?: (e: MouseEvent) => void; // Mouse up event handler (optional)
  onTouchEnd?: (e: TouchEvent) => void; // Touch end event handler (optional)
  children: ReactNode; // Children of the component
}

const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  (
    {
      style,
      className,
      onMouseDown,
      onMouseUp,
      onTouchEnd,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: Math.random() * 0.5 }}
        style={{ ...style }}
        className={`${className} `}
        ref={ref}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onTouchEnd={onTouchEnd}
        {...props} // Spread remaining props
      >
        {children}
      </motion.div>
    );
  },
);

export default GridItem;
