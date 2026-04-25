import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { updateAGridItemAct } from "../../actions-creators/grid.action";
import useGridItem from "../../hooks/useGridItem";

function TextUpdate({ fieldToUpdate }: { fieldToUpdate?: string }) {
  const dispatch = useAppDispatch();
  const currentSelectedGridItemId = useAppSelector(
    (state) => state.dashboardSlice.currentSelectedGridItemId,
  );
  const item = useGridItem(currentSelectedGridItemId);

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
    <AutoSaveTextField
      id="text"
      className="text-xxs focus:bg-transparent focus:text-black"
      fieldToUpdate={fieldToUpdate || ""}
      onChange={onTextChange}
      value={item?.metadata?.[fieldToUpdate || ""] || ""}
      placeholder="Type here..."
    />
  );
}

export default TextUpdate;
