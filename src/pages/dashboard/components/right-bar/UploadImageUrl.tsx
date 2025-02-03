import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { updateAGridItemAct } from "../../actions-creators/grid.action";

function UploadImageUrl() {
  const dispatch = useAppDispatch();
  const currentSelectedGridItem = useAppSelector(
    (state) => state.dashboardSlice.currentSelectedGridItem,
  );

  const onChange = (_id: string, value: any) => {
    if (!currentSelectedGridItem) return;
    dispatch(
      updateAGridItemAct(
        currentSelectedGridItem.id,
        {
          metadata: { ...currentSelectedGridItem.metadata, ...value },
        },
        true,
      ),
    );
  };

  return (
    <AutoSaveTextField
      id="src"
      fieldToUpdate="profileImg.src"
      className="bg-white"
      value={currentSelectedGridItem?.metadata?.profileImg?.src}
      placeholder="Enter image URL"
      onChange={onChange}
    />
  );
}

export default UploadImageUrl;
