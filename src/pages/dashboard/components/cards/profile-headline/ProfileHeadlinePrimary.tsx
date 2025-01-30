import LazyImage from "@/common/components/LazyImage/LazyImage";
import { TDashboardGridItem } from "@/pages/dashboard/types/dashboard-item.type";

function ProfileHeadlinePrimary({ sizeType }: TDashboardGridItem) {
  if (sizeType === "H-2_W-100") {
    return (
      <div className="flex h-full w-full flex-col items-center gap-1 rounded-2xl border p-5">
        <div>
          <LazyImage
            wrapperClassName="w-20 h-20"
            className="h-20 w-20 rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <p className="text-lg font-semibold">Rajesh Singha Maha Patra</p>
          <p className="text-xs">Fullstack Developer @ Unicors</p>
        </div>
      </div>
    );
  }
}

export default ProfileHeadlinePrimary;
