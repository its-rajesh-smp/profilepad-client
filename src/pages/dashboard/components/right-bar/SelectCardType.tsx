import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import useScreenSize from "@/common/hooks/useScreenSize";
import { Check } from "lucide-react";
import useGridItemSize from "../../hooks/useGridItemSize";
import { updateGridLayoutItemSize } from "../../reducers/grid.reducer";
import { TGridItemSizeVariant } from "../../types/dashboard-item.type";
import { convertGridItemVariantToSize } from "../../utils/grid-item.util";

function SelectCardType({
  availableDesigns = [],
}: {
  availableDesigns?: TGridItemSizeVariant[];
}) {
  const { size: screenSize } = useScreenSize();
  const currentSelectedGridItemId = useAppSelector(
    (state) => state.dashboardSlice.currentSelectedGridItemId,
  );
  let sizeVariant = useGridItemSize(currentSelectedGridItemId);
  const dispatch = useAppDispatch();

  const designConfigs: { variant: TGridItemSizeVariant; className: string }[] =
    [
      { variant: "1x100", className: "col-span-2 h-14" },
      { variant: "1x4", className: "col-span-1 h-14" },
      { variant: "2x4", className: "col-span-1 h-24" },
      { variant: "2x100", className: "col-span-2 h-24" },
      { variant: "4x4", className: "col-span-2 h-48" },
    ];

  const designSet = new Set(availableDesigns);

  const onClickDesign = (variant: TGridItemSizeVariant) => {
    const { w, h } = convertGridItemVariantToSize(variant);
    dispatch(
      updateGridLayoutItemSize({
        i: currentSelectedGridItemId,
        w,
        h,
        currentScreenSize: screenSize,
      }),
    );
  };

  return (
    <div className="grid grid-cols-2 gap-2">
      {designConfigs
        .filter(({ variant }) => designSet.has(variant))
        .map(({ variant, className }) => (
          <div
            onClick={() => onClickDesign(variant)}
            key={variant}
            className={`relative flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border bg-white px-4 transition-all hover:shadow-sm ${className} `}
          >
            {variant === sizeVariant && (
              <Check className="absolute left-3 top-2 h-4 w-4 text-blue-500" />
            )}
            <p className="absolute bottom-2 right-3 text-xxs text-secondary">
              {variant}
            </p>
          </div>
        ))}
    </div>
  );
}

export default SelectCardType;
