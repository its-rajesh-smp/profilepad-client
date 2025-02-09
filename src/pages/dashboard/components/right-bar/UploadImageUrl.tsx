import UploadImage from "@/common/components/UI/UploadImage";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { uploadFileAndUpdateAGridItemAct } from "../../actions-creators/grid.action";
import useGridItem from "../../hooks/useGridItem";
import { useState } from "react";

function UploadImageUrl({ fieldToUpdate }: { fieldToUpdate?: string }) {
  const dispatch = useAppDispatch();
  const currentSelectedGridItemId = useAppSelector(
    (state) => state.dashboardSlice.currentSelectedGridItemId,
  );
  const item = useGridItem(currentSelectedGridItemId);
  const [uploading, setUploading] = useState(false);

  /**
   * Handles the file change event by dispatching an action to upload
   * the image and update the grid item with the given form data.
   * @param formData - The form data containing the image to be uploaded.
   */
  const onFileChange = async (formData: FormData) => {
    setUploading(true);
    await dispatch(
      uploadFileAndUpdateAGridItemAct(item.id, fieldToUpdate, formData),
    );
    setUploading(false);
  };

  return (
    <UploadImage
      defaultImage={
        item?.metadata && fieldToUpdate ? item?.metadata[fieldToUpdate] : ""
      }
      onChange={onFileChange}
      isUploading={uploading}
    />
  );
}

export default UploadImageUrl;
