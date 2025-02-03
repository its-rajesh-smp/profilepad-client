import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { updateAGridItemAct } from "@/pages/dashboard/actions-creators/grid.action";
import GridItemContext from "@/pages/dashboard/contexts/grid-item.context";
import { useContext } from "react";

function TitlePrimary() {
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
      className="flex h-full w-full items-center rounded-2xl border bg-white px-4 transition-colors duration-300"
    >
      <AutoSaveTextField
        onChange={onTextChange}
        placeholder="Enter title"
        value={item?.metadata?.primaryText}
        fieldToUpdate="primaryText"
        id="primaryText"
        style={{ ...item?.styles?.primaryText, ...item?.styles?.card }}
        className="bg-white text-2xl font-bold"
      />
    </div>
  );
}

export default TitlePrimary;
