import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { motion } from "framer-motion";
import { useContext } from "react";
import { FiSettings } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { deleteAGridItemAct } from "../../actions-creators/grid.action";
import GridItemContext from "../../contexts/grid-item.context";
import { setCurrentSelectedGridItemId } from "../../reducers/dashboard.reducer";

function GridItemActionBar() {
  const dispatch = useAppDispatch();
  const { item } = useContext(GridItemContext);

  const onClickSettings = () => {
    dispatch(setCurrentSelectedGridItemId(item.id));
  };

  const onClickDelete = () => {
    dispatch(deleteAGridItemAct(item.id));
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
      <div
        onClick={onClickDelete}
        className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full transition-all hover:bg-blue-500 hover:text-white"
      >
        <IoMdClose className="h-full w-full p-1" />
      </div>
    </motion.div>
  );
}

export default GridItemActionBar;
