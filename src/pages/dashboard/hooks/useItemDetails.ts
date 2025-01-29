import { useAppSelector } from "@/common/hooks/useAppSelector";

function useItemDetails(id: string) {
  const { layoutItems } = useAppSelector(
    (state) => state.dashboardReducer.gridSlice,
  );
  const item = layoutItems.find((item: any) => item.id === id);
  console.log(item);
  return item;
}

export default useItemDetails;
