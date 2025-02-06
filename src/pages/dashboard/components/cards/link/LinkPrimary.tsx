import LazyImage from "@/common/components/LazyImage/LazyImage";
import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { updateAGridItemAct } from "@/pages/dashboard/actions-creators/grid.action";
import GridItemContext from "@/pages/dashboard/contexts/grid-item.context";
import { useContext } from "react";
import { BiLink } from "react-icons/bi";

function LinkPrimary() {
  const { item, gridItemSizeVariant } = useContext(GridItemContext);
  const dispatch = useAppDispatch();

  /**
   * Updates the grid item's metadata with the provided data.
   * Dispatches an action to update the grid item in the store.
   * @param dataToUpdate - The data to merge into the grid item's metadata.
   */
  const onTextChange = (_id: string, dataToUpdate: any) => {
    dispatch(
      updateAGridItemAct(item.id, {
        metadata: { ...item.metadata, ...dataToUpdate },
      }),
    );
  };

  if (gridItemSizeVariant === "2x2") {
    return (
      <div className="flex h-full w-full flex-col gap-2 rounded-2xl border p-5">
        <div className="h-fit w-fit rounded-lg border p-3">
          <BiLink className="text-2xl text-secondary" />
        </div>
        <div className="flex flex-col gap-1">
          <AutoSaveTextField
            id="primaryText"
            fieldToUpdate="primaryText"
            className="text-sm font-semibold text-primary"
            placeholder="Google"
            value={item?.metadata?.primaryText}
            onChange={onTextChange}
          />
          <AutoSaveTextField
            id="secondaryText"
            fieldToUpdate="secondaryText"
            className="text-xs text-secondary"
            placeholder="google.com"
            value={item?.metadata?.secondaryText}
            onChange={onTextChange}
          />
        </div>
      </div>
    );
  }

  if (gridItemSizeVariant === "1x100") {
    return (
      <div className="flex h-full w-full gap-5 rounded-2xl border p-5">
        <div className="h-fit w-fit rounded-lg border p-3">
          <BiLink className="text-2xl text-secondary" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold text-primary">Google</p>
          <p className="text-xs text-secondary">google.com</p>
        </div>
      </div>
    );
  }

  if (gridItemSizeVariant === "1x4") {
    return (
      <div className="flex h-full w-full gap-5 rounded-2xl border p-5">
        <div className="h-fit w-fit rounded-lg border p-3">
          <BiLink className="text-2xl text-secondary" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold text-primary">Google</p>
          <p className="text-xs text-secondary">google.com</p>
        </div>
      </div>
    );
  }

  if (gridItemSizeVariant === "4x4") {
    return (
      <div className="flex h-full w-full flex-col gap-5 rounded-2xl border p-5">
        <div className="flex items-center gap-4">
          <div className="h-fit w-fit rounded-lg border p-3">
            <BiLink className="text-2xl text-secondary" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold text-primary">Google</p>
            <p className="text-xs text-secondary">google.com</p>
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
