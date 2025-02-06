import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { updateAGridItemAct } from "@/pages/dashboard/actions-creators/grid.action";
import { gridItemColorVariants } from "@/pages/dashboard/constants/gid-card-color-schema.const";

import GridItemContext from "@/pages/dashboard/contexts/grid-item.context";
import { useContext } from "react";

function TitlePrimary() {
  const { item } = useContext(GridItemContext);
  const dispatch = useAppDispatch();

  /**
   * Updates the grid item's metadata with the provided data.
   * Dispatches an action to update the grid item in the store.
   * @param dataToUpdate - The data to merge into the grid item's metadata.
   */
  const onTextChange = (_id: string, dataToUpdate: any) => {
    dispatch(
      updateAGridItemAct(item.id, {
        metadata: { ...item.metadata, ...dataToUpdate },
      }),
    );
  };

  const colorSchema = gridItemColorVariants[item.colorVariant || "white"];

  return (
    <div
      className={`flex h-full w-full items-center rounded-2xl border ${colorSchema.backgroundColor} px-4 transition-all duration-300`}
    >
      <AutoSaveTextField
        onChange={onTextChange}
        placeholder="Enter title"
        value={item?.metadata?.primaryText}
        fieldToUpdate="primaryText"
        id="primaryText"
        className={`bg-inherit text-2xl font-bold ${colorSchema.primaryTextColor}`}
      />
    </div>
  );
}

export default TitlePrimary;
