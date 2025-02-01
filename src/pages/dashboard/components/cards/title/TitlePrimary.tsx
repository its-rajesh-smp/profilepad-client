import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";

function TitlePrimary() {
  return (
    <div className="flex h-full w-full items-center rounded-2xl border px-4">
      <AutoSaveTextField
        defaultValue="hello world"
        fieldToUpdate="title"
        id="title"
        className="text-2xl font-bold"
      />
    </div>
  );
}

export default TitlePrimary;
