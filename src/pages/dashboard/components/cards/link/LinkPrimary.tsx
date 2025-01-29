import LazyImage from "@/common/components/LazyImage/LazyImage";
import { TDashboardGridItem } from "@/pages/dashboard/types/dashboard-item.type";
import { BiLink } from "react-icons/bi";

function LinkPrimary({ sizeType, id }: TDashboardGridItem) {
  // const item = useItemDetails(id);

  if (sizeType === "H-2_W-2") {
    return (
      <div className="flex h-full w-full flex-col gap-2 rounded-2xl border p-5">
        <div className="h-fit w-fit rounded-lg border p-3">
          <BiLink className="text-secondary text-2xl" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-primary text-sm font-semibold">Google</p>
          <p className="text-secondary text-xs">google.com</p>
        </div>
      </div>
    );
  }

  if (sizeType === "H-1_W-100") {
    return (
      <div className="flex h-full w-full gap-5 rounded-2xl border p-5">
        <div className="h-fit w-fit rounded-lg border p-3">
          <BiLink className="text-secondary text-2xl" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-primary text-sm font-semibold">Google</p>
          <p className="text-secondary text-xs">google.com</p>
        </div>
      </div>
    );
  }

  if (sizeType === "H-1_W-4") {
    return (
      <div className="flex h-full w-full gap-5 rounded-2xl border p-5">
        <div className="h-fit w-fit rounded-lg border p-3">
          <BiLink className="text-secondary text-2xl" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-primary text-sm font-semibold">Google</p>
          <p className="text-secondary text-xs">google.com</p>
        </div>
      </div>
    );
  }

  if (sizeType === "H-4_W-4") {
    return (
      <div className="flex h-full w-full flex-col gap-5 rounded-2xl border p-5">
        <div className="flex items-center gap-4">
          <div className="h-fit w-fit rounded-lg border p-3">
            <BiLink className="text-secondary text-2xl" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-primary text-sm font-semibold">Google</p>
            <p className="text-secondary text-xs">google.com</p>
          </div>
        </div>

        <LazyImage
          wrapperClassName="h-full w-full"
          className="h-full w-full rounded-2xl object-cover"
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
        />
      </div>
    );
  }
}

export default LinkPrimary;
