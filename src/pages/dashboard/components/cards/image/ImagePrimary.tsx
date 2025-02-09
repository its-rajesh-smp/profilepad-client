import LazyImage from "@/common/components/LazyImage/LazyImage";
import { gridItemColorVariants } from "@/pages/dashboard/constants/gid-card-color-schema.const";
import GridItemContext from "@/pages/dashboard/contexts/grid-item.context";
import { useContext } from "react";

function ImagePrimary() {
  const { item } = useContext(GridItemContext);
  const colorSchema = gridItemColorVariants[item.colorVariant || "white"];
  return (
    <div
      className={`flex h-full w-full items-center rounded-2xl border ${colorSchema.backgroundColor} p-4 transition-all duration-300`}
    >
      <LazyImage
        wrapperClassName="h-full w-full"
        className="h-full w-full rounded-2xl object-cover"
        src={item?.metadata?.src}
      />
    </div>
  );
}

export default ImagePrimary;
