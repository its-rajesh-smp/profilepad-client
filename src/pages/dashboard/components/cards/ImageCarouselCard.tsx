import SwiperCarousel from "@/common/components/Carousels/SwiperCarousel";
import { Badge } from "@/common/components/shadcn/ui/badge";
import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { updateLayoutItem } from "../../services/layout-item.service";
import { IDashboardCard } from "../../types/dashboard.type";

function ImageCarouselCard({ metadata, text, id }: IDashboardCard) {
  const isEditMode = useAppSelector((state) => state.authSlice.editMode);
  return (
    <div className="h-full w-full overflow-hidden">
      <SwiperCarousel
        images={metadata?.images ?? []}
        variant={metadata?.carouselVariant ?? "effect-cards"}
      />
      {(isEditMode || text) && metadata?.showCaption && (
        <div>
          <Badge
            className={
              "absolute bottom-3 left-3 z-10 mr-3 bg-white p-0 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
            }
          >
            <AutoSaveTextField
              onChange={updateLayoutItem}
              className="px-2"
              id={id}
              fieldToUpdate="text"
            >
              {text ?? "Caption"}
            </AutoSaveTextField>
          </Badge>
        </div>
      )}
    </div>
  );
}

export default ImageCarouselCard;
