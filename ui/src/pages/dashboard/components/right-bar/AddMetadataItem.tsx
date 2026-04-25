import { Button } from "@/common/components/shadcn/ui/button";
import AutoSaveTextField from "@/common/components/UI/AutoSaveTextField";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { createUUID } from "@/common/utils/uuid.util";
import { LuExternalLink } from "react-icons/lu";
import { TiDeleteOutline } from "react-icons/ti";
import { updateAGridItemAct } from "../../actions-creators/grid.action";
import useGridItem from "../../hooks/useGridItem";
import { IMetadataItem } from "../../types/dashboard-item.type";

function AddMetadataItem({}: { fieldToUpdate?: string }) {
  const dispatch = useAppDispatch();
  const currentSelectedGridItemId = useAppSelector(
    (state) => state.dashboardSlice.currentSelectedGridItemId,
  );
  const item = useGridItem(currentSelectedGridItemId);

  /**
   * Updates the grid item's metadata with the provided data.
   * Dispatches an action to update the grid item in the store.
   * @param dataToUpdate - The data to merge into the grid item's metadata.
   */
  const addNewItem = () => {
    const newItemData = { id: createUUID(), primaryText: "Company Name" };
    dispatch(
      updateAGridItemAct(item.id, {
        metadata: {
          ...(item?.metadata || {}),
          metadataItems: [
            ...(item?.metadata?.metadataItems || []),
            newItemData,
          ],
        },
      }),
    );
  };

  /**
   * Removes the item from the grid item's metadata
   * @param id - The id of the item to remove
   */
  const removeItem = (id: string) => {
    dispatch(
      updateAGridItemAct(item.id, {
        metadata: {
          ...(item?.metadata || {}),
          metadataItems: item?.metadata?.metadataItems?.filter(
            (metadataItem: any) => metadataItem.id !== id,
          ),
        },
      }),
    );
  };

  const updateItem = (id: string, dataToUpdate: any) => {
    dispatch(
      updateAGridItemAct(item.id, {
        metadata: {
          ...(item?.metadata || {}),
          metadataItems: item?.metadata?.metadataItems?.map(
            (metadataItem: any) => {
              if (metadataItem.id === id) {
                return { ...metadataItem, ...dataToUpdate };
              }
              return metadataItem;
            },
          ),
        },
      }),
    );
  };

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="flex flex-col gap-4">
        {item?.metadata?.metadataItems?.map((metadataItem: IMetadataItem) => {
          return (
            <MetadataItem
              removeItem={removeItem}
              key={metadataItem.id}
              metadataItem={metadataItem}
              updateItem={updateItem}
            />
          );
        })}
      </div>
      <Button size="sm" onClick={addNewItem}>
        +
      </Button>
    </div>
  );
}

function MetadataItem({
  metadataItem,
  removeItem,
  updateItem,
}: {
  metadataItem: IMetadataItem;
  removeItem: (id: string) => void;
  updateItem: (id: string, dataToUpdate: any) => void;
}) {
  const onTextChange = (_: any, dataToUpdate: any) => {
    updateItem(metadataItem.id, dataToUpdate);
  };

  return (
    <div
      key={metadataItem.id}
      className="relative flex items-center justify-between gap-1 p-2"
    >
      <div className="flex w-full flex-col gap-1">
        {/* 
        FIXME:
        When we are changing the text here it is not changing in the WorkExperience.
        Because AutoSaveTextField using local state (useRef).
        */}

        {/* <div className="flex items-center gap-1">
          <LuBuilding2 />
          <AutoSaveTextField
            onChange={onTextChange}
            id="primaryText"
            fieldToUpdate="primaryText"
            placeholder="Sharpener.tech"
            value={metadataItem.primaryText}
            className="text-xs focus:bg-transparent focus:text-primary"
          />
        </div>
        <div className="flex items-center gap-1">
          <LuCalendar />
          <AutoSaveTextField
            onChange={onTextChange}
            id="tertiaryText"
            fieldToUpdate="tertiaryText"
            placeholder="2023 - 2025"
            value={metadataItem.tertiaryText}
            className="text-xs focus:bg-transparent focus:text-primary"
          />
        </div> */}
        <div className="flex gap-1">
          <LuExternalLink />
          <AutoSaveTextField
            onChange={onTextChange}
            id="href"
            fieldToUpdate="href"
            placeholder="www.sharpener.tech"
            value={metadataItem.href}
            className="text-xs focus:bg-transparent focus:text-primary"
          />
        </div>
      </div>
      <Button
        type="button"
        icon={<TiDeleteOutline />}
        size="icon"
        variant="ghost"
        className="absolute right-0 top-0 h-8 w-8 bg-zinc-200 p-0 hover:bg-red-500 hover:text-white"
        onClick={() => removeItem(metadataItem.id)}
      />
    </div>
  );
}

export default AddMetadataItem;
