import ChooseColor from "@/common/components/shadcn/choose-color";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { updateAGridItemFromSettingAct } from "../../actions-creators/grid.action";
import {
  generateStylesToUpdate,
  getStylesUsingStyleUpdatePath,
} from "../../utils/grid-item.util";

function SelectCardColor({ stylesToUpdate }: { stylesToUpdate: string }) {
  const currentSelectedGridItem = useAppSelector(
    (state) => state.dashboardReducer.dashboardSlice.currentSelectedGridItem,
  );
  const dispatch = useAppDispatch();

  const onClick = (value: string) => {
    if (!currentSelectedGridItem || !stylesToUpdate) return;

    const dataToUpdate = generateStylesToUpdate(
      stylesToUpdate,
      value,
      currentSelectedGridItem.styles,
    );

    dispatch(
      updateAGridItemFromSettingAct({
        styles: dataToUpdate,
      }),
    );
  };

  const currentValue = getStylesUsingStyleUpdatePath(
    currentSelectedGridItem?.styles,
    stylesToUpdate,
  );
  return (
    <div className="">
      <ChooseColor
        value={currentValue}
        onChange={onClick}
        className="grid grid-cols-7"
      />
    </div>
  );
}

export default SelectCardColor;
