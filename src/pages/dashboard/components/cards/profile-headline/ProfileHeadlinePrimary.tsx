import LazyImage from "@/common/components/LazyImage/LazyImage";
import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import GridItemContext from "@/pages/dashboard/contexts/grid-item.context";
import { useContext } from "react";

function ProfileHeadlinePrimary() {
  const {} = useContext(GridItemContext);

  return (
    <div className="flex h-full w-full flex-col items-center gap-1 rounded-2xl border p-5">
      <div>
        <LazyImage
          wrapperClassName="w-20 h-20"
          className="h-20 w-20 rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <AutoSaveTextField
          defaultValue="hello world"
          fieldToUpdate="title"
          id="title"
          className="text-center text-lg font-semibold"
        />
        <AutoSaveTextField
          defaultValue="Fullstack Developer @ Unicors"
          fieldToUpdate="title"
          id="title"
          className="rounded-sm text-center text-xs"
        />
      </div>
    </div>
  );
}

export default ProfileHeadlinePrimary;
