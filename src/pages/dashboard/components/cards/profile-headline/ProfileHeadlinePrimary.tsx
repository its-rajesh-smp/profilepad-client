import LazyImage from "@/common/components/LazyImage/LazyImage";
import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { updateAGridItemAct } from "@/pages/dashboard/actions-creators/grid.action";
import GridItemContext from "@/pages/dashboard/contexts/grid-item.context";
import { useContext } from "react";

function ProfileHeadlinePrimary() {
  const { item } = useContext(GridItemContext);
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

  return (
    <div
      style={item?.styles?.card}
      className="flex h-full w-full flex-col items-center gap-1 rounded-2xl border bg-white p-5 transition-all duration-300"
    >
      <div>
        <LazyImage
          wrapperClassName="w-20 h-20"
          className="h-20 w-20 rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <AutoSaveTextField
          style={item?.styles?.card}
          value={item?.metadata?.primaryText}
          placeholder="Rajesh SMP"
          fieldToUpdate="primaryText"
          id="primaryText"
          className="text-center text-lg font-semibold"
          onChange={onTextChange}
        />
        <AutoSaveTextField
          style={item?.styles?.card}
          value={item?.metadata?.secondaryText}
          placeholder="Creator @ ProfilePad.io"
          fieldToUpdate="secondaryText"
          id="secondaryText"
          className="rounded-sm text-center text-xs"
          onChange={onTextChange}
        />
      </div>
    </div>
  );
}

export default ProfileHeadlinePrimary;
