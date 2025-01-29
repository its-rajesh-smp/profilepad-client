import useItemDetails from "@/pages/dashboard/hooks/useItemDetails";
import { TDashboardGridItem } from "@/pages/dashboard/types/dashboard-item.type";

function TitlePrimary({ id }: TDashboardGridItem) {
  const item = useItemDetails(id);
  return (
    <div className="flex h-full w-full items-center rounded-2xl border px-4">
      <p className="mb-1 text-2xl font-bold">hello world</p>
    </div>
  );
}

export default TitlePrimary;
