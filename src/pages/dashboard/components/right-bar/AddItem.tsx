import { Button } from "@/common/components/shadcn/ui/button";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { createUUID } from "@/common/utils/uuid.util";
import { updateAGridItemAct } from "../../actions-creators/grid.action";
import useGridItem from "../../hooks/useGridItem";
import { Tag } from "lucide-react";

function AddItem({ fieldToUpdate }: { fieldToUpdate?: string }) {
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
  const addNewItem = () => {
    const newItemData = { id: createUUID() };
    dispatch(
      updateAGridItemAct(item.id, {
        metadata: {
          ...(item?.metadata || {}),
          items: [...(item?.metadata?.items || []), newItemData],
        },
      }),
    );
  };

  return (
    <div className="flex h-full w-full flex-col gap-1">
      <div>
        {item?.metadata?.items?.map((item: any, index: number) => {
          return <Tag key={item.id} className="text-primary" />;
        })}
      </div>
      <Button onClick={addNewItem}>+</Button>
    </div>
  );
}

export default AddItem;
