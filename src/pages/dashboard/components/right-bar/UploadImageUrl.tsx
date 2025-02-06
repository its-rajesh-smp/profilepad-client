import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { updateAGridItemAct } from "../../actions-creators/grid.action";
import useGridItem from "../../hooks/useGridItem";

function UploadImageUrl({ fieldToUpdate }: { fieldToUpdate?: string }) {
  const dispatch = useAppDispatch();
  const currentSelectedGridItemId = useAppSelector(
    (state) => state.dashboardSlice.currentSelectedGridItemId,
  );
  const item = useGridItem(currentSelectedGridItemId);

  const onChange = (_id: string, value: any) => {
    const dataToUpdate = {
      metadata: { ...item.metadata, ...value },
    };
    dispatch(updateAGridItemAct(item.id, dataToUpdate));
  };

  return (
    <AutoSaveTextField
      id="src"
      fieldToUpdate={fieldToUpdate || "metadata.src"}
      value={(item?.metadata || {})[fieldToUpdate as any] || ""}
      className="bg-white"
      placeholder="Enter image URL"
      onChange={onChange}
    />
  );
}

export default UploadImageUrl;
