function SelectCardType() {
  const defaultClassName =
    "flex  items-center rounded-2xl border bg-white px-4";
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2">
        <div className={`${defaultClassName} h-24 w-full`} />
        <div className={`${defaultClassName} h-48 w-full`} />
      </div>
      <div className="flex flex-col gap-2">
        <div className={`${defaultClassName} h-14 w-full`} />
        <div className={`${defaultClassName} h-24 w-full`} />
      </div>
      <div className={`${defaultClassName} h-48 w-full`} />
    </div>
  );
}

export default SelectCardType;
