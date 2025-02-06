import ChooseColor from "@/common/components/shadcn/choose-color";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { updateAGridItemAct } from "../../actions-creators/grid.action";
import useGridItem from "../../hooks/useGridItem";

function SelectCardColor({ stylesToUpdate }: { stylesToUpdate: string }) {
  const currentSelectedGridItemId = useAppSelector(
    (state) => state.dashboardSlice.currentSelectedGridItemId,
  );
  const dispatch = useAppDispatch();
  const item = useGridItem(currentSelectedGridItemId);

  const onClick = (value: string) => {
    const dataToUpdate = {
      styles: { ...item?.styles, [stylesToUpdate]: value },
    };
    dispatch(updateAGridItemAct(item.id, dataToUpdate));
  };

  return (
    <div>
      <ChooseColor
        onChange={onClick}
        value={item?.styles?.[stylesToUpdate]}
        className="grid grid-cols-7"
      />
    </div>
  );
}

export default SelectCardColor;
