import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { motion } from "framer-motion";
import { FiSettings } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { setCurrentSelectedGridItem } from "../../reducers/dashboard.reducer";
import GridItemContext from "../../contexts/grid-item.context";
import { useContext } from "react";

function GridItemActionBar() {
  const dispatch = useAppDispatch();
  const { item, gridItemSizeVariant } = useContext(GridItemContext);

  const onClickSettings = () => {
    dispatch(
      setCurrentSelectedGridItem({ ...item, sizeVariant: gridItemSizeVariant }),
    );
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      style={{ zIndex: 100 }}
      className="no-drag absolute right-0 top-0 flex cursor-default gap-1 rounded-2xl bg-white p-1 shadow-md"
    >
      <div
        onClick={onClickSettings}
        className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full transition-all hover:bg-blue-500 hover:text-white"
      >
        <FiSettings className="h-full w-full p-1" />
      </div>
      <div className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full transition-all hover:bg-blue-500 hover:text-white">
        <IoMdClose className="h-full w-full p-1" />
      </div>
    </motion.div>
  );
}

export default GridItemActionBar;
