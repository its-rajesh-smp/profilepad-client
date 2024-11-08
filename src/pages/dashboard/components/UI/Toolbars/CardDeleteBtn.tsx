import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { deleteLayoutItemAct } from "@/pages/dashboard/action-creators/layout-item.act";
import { motion } from "framer-motion";
import { Trash2Icon } from "lucide-react";

function CardDeleteBtn({ id }: { id: string }) {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteLayoutItemAct(id));
  };
  return (
    <motion.button
      onClick={handleDelete}
      initial={{ opacity: 0 }}
      whileTap={{ scale: 0.7 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="no-drag absolute -left-2 -top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full !bg-white shadow-md"
    >
      <Trash2Icon className="h-4 w-4" />
    </motion.button>
  );
}

export default CardDeleteBtn;
