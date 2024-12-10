import { IoMdGift } from "react-icons/io";
import { IDashboardCard } from "../../types/dashboard.type";

function IconCard({}: IDashboardCard) {
  return (
    <div className="flex h-full w-full items-center justify-center text-4xl">
      <IoMdGift />
    </div>
  );
}

export default IconCard;
