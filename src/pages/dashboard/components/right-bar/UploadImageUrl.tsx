import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { updateAGridItemFromSettingAct } from "../../actions-creators/grid.action";

function UploadImageUrl() {
  const dispatch = useAppDispatch();
  const currentSelectedGridItem = useAppSelector(
    (state) => state.dashboardReducer.dashboardSlice.currentSelectedGridItem,
  );

  const onChange = (_id: string, value: any) => {
    if (!currentSelectedGridItem) return;
    dispatch(
      updateAGridItemFromSettingAct({
        metadata: { ...currentSelectedGridItem.metadata, ...value },
      }),
    );
  };

  return (
    <AutoSaveTextField
      id="src"
      fieldToUpdate="profileImg.src"
      className="bg-white"
      value=""
      placeholder="Enter image URL"
      onChange={onChange}
    />
  );
}

export default UploadImageUrl;
