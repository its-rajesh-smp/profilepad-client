import { useAppSelector } from "@/common/hooks/useAppSelector";

function useItemDetails(id: string) {
  const { layoutItems } = useAppSelector(
    (state) => state.dashboardReducer.gridSlice,
  );

  return layoutItems.find((item: any) => item.id === id);
}

export default useItemDetails;
