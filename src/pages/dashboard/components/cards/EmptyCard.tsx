import { IDashboardCard } from "../../types/dashboard.type";

function EmptyCard({}: IDashboardCard) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <span className="opacity-10">
        This will not be displayed || used for layout
      </span>
    </div>
  );
}

export default EmptyCard;
