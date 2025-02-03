import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { AlignCenter, AlignLeft, AlignRight } from "lucide-react";
import { updateAGridItemFromSettingAct } from "../../actions-creators/grid.action";
import {
  generateStylesToUpdate,
  getStylesUsingStyleUpdatePath,
} from "../../utils/grid-item.util";

function SelectTextPosition({ stylesToUpdate }: { stylesToUpdate: string }) {
  const currentSelectedGridItem = useAppSelector(
    (state) => state.dashboardReducer.dashboardSlice.currentSelectedGridItem,
  );
  const dispatch = useAppDispatch();

  const onClick = (alignment: "left" | "center" | "right") => {
    if (!currentSelectedGridItem || !stylesToUpdate) return;

    const dataToUpdate = generateStylesToUpdate(
      stylesToUpdate,
      alignment,
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
    <div className="flex flex-row gap-5">
      <AlignLeft
        onClick={() => onClick("left")}
        data-state={currentValue === "left" || !currentValue}
        className="h-5 w-5 cursor-pointer text-secondary data-[state=true]:text-blue-500"
      />
      <AlignCenter
        onClick={() => onClick("center")}
        data-state={currentValue === "center"}
        className="h-5 w-5 cursor-pointer text-secondary data-[state=true]:text-blue-500"
      />
      <AlignRight
        onClick={() => onClick("right")}
        data-state={currentValue === "right"}
        className="h-5 w-5 cursor-pointer text-secondary data-[state=true]:text-blue-500"
      />
    </div>
  );
}

export default SelectTextPosition;
