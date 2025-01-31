import { useAppSelector } from "@/common/hooks/useAppSelector";
import { IGridItem } from "../types/dashboard-item.type";

function useItemDetails(id: string) {
  const { layoutItems } = useAppSelector(
    (state) => state.dashboardReducer.gridSlice,
  );
  const item: IGridItem = layoutItems.find((item: IGridItem) => item.id === id);
  return item;
}

export default useItemDetails;
