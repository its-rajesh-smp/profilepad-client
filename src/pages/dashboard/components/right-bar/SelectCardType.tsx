import { TGridItemSizeVariant } from "../../types/dashboard-item.type";

function SelectCardType({
  availableDesigns = [],
}: {
  availableDesigns?: TGridItemSizeVariant[];
}) {
  const designSet = new Set(availableDesigns);
  const defaultClassName =
    "flex  items-center rounded-2xl border bg-white px-4";

  return (
    <div className="grid grid-cols-2 gap-2">
      {designSet.has("H-2_W-2") && (
        <div className={`${defaultClassName} col-span-1 h-24`} />
      )}
      {designSet.has("H-4_W-2") && (
        <div className={`${defaultClassName} col-span-1 h-48`} />
      )}
      {designSet.has("H-1_W-100") && (
        <div className={`${defaultClassName} col-span-2 h-14`} />
      )}
      {designSet.has("H-1_W-4") && (
        <div className={`${defaultClassName} col-span-1 h-14`} />
      )}
      {designSet.has("H-4_W-4") && (
        <div className={`${defaultClassName} col-span-2 h-48`} />
      )}
    </div>
  );
}

export default SelectCardType;
