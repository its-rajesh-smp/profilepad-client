import { useAppSelector } from "@/common/hooks/useAppSelector";
import { IGridItem } from "../types/dashboard-item.type";

function useGridItem(id: string) {
  const layoutItems = useAppSelector((state) => state.gridSlice.layoutItems);
  const item: IGridItem = layoutItems.find(
    (item: IGridItem) => item.id === id,
  ) as IGridItem;

  return item;
}

export default useGridItem;
