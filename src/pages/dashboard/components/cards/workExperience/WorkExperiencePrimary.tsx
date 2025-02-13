import LazyImage from "@/common/components/LazyImage/LazyImage";
import { gridItemColorVariants } from "@/pages/dashboard/constants/gid-card-color-schema.const";
import GridItemContext from "@/pages/dashboard/contexts/grid-item.context";
import { useRowCount } from "@/pages/dashboard/hooks/useRowCount";
import { useContext } from "react";

function WorkExperiencePrimary() {
  const item = useContext(GridItemContext).item;
  const colorSchema = gridItemColorVariants[item.colorVariant || "white"];

  useRowCount(item.id, item?.metadata?.items?.length || 1);

  return (
    <>
      <div
        className={`flex h-full w-full flex-col gap-3 rounded-2xl border ${colorSchema.backgroundColor} p-5 transition-all duration-300`}
      >
        <div className="flex h-full w-full flex-col justify-between gap-2">
          {item?.metadata?.items?.map((metadataItem: any) => (
            <Experience key={metadataItem.id} />
          ))}
        </div>
      </div>
    </>
  );
}

function Experience() {
  return (
    <div className="flex h-full w-full justify-between gap-1">
      <div className="flex h-full items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center">
          <LazyImage
            wrapperClassName="h-full w-full "
            className="rounded-md object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-semibold">Sharpener</p>
          <p className="text-xxs">SDE-1</p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <p className="text-xxs font-semibold text-secondary">2022 - 2023</p>
        {/* <ArrowBigDown className="text-secondary" /> */}
      </div>
    </div>
  );
}

export default WorkExperiencePrimary;
