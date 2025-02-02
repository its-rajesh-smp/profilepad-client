import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";

function UploadImageUrl() {
  return (
    <AutoSaveTextField
      id=""
      type="input"
      fieldToUpdate="src"
      className="bg-white"
      defaultValue=""
      inputPlaceholder="Enter image URL"
    />
  );
}

export default UploadImageUrl;
