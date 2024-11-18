import { useAppSelector } from "@/common/hooks/useAppSelector";
import { motion } from "framer-motion";
import React, { MouseEvent, ReactNode, TouchEvent, useState } from "react";
import { DashboardCardType } from "../../types/dashboard.type";
import { getToolbarVisibilityByType } from "../../utils/toolbarVisibility.util";
import CardDeleteBtn from "./Toolbars/CardDeleteBtn";
import ResizeToolbar from "./Toolbars/ResizeToolbar";

interface GridItemProps {
  style?: React.CSSProperties; // Style prop (optional)
  className?: string; // Class name (optional)
  onMouseDown?: (e: MouseEvent) => void; // Mouse down event handler (optional)
  onMouseUp?: (e: MouseEvent) => void; // Mouse up event handler (optional)
  onTouchEnd?: (e: TouchEvent) => void; // Touch end event handler (optional)
  children: ReactNode; // Children of the component
  itemId: string;
  type: DashboardCardType;
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
      itemId,
      type,
      ...props
    },
    ref,
  ) => {
    const isEditMode = useAppSelector((state) => state.authSlice.editMode);
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: Math.random() * 0.1 }}
        style={{ ...style }}
        className={`${className} `}
        ref={ref}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onTouchEnd={onTouchEnd}
        onMouseEnter={() => setIsHovered(true)} // Show toolbar on hover
        onMouseLeave={() => setIsHovered(false)} // Hide toolbar on hover exit
        {...props} // Spread remaining props
      >
        {children}
        {isHovered && isEditMode && <CardDeleteBtn id={itemId} />}
        {isHovered && isEditMode && !getToolbarVisibilityByType(type) && (
          <ResizeToolbar id={itemId} />
        )}
      </motion.div>
    );
  },
);

export default GridItem;
