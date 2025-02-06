import ChooseColor from "@/common/components/shadcn/choose-color";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { updateAGridItemAct } from "../../actions-creators/grid.action";
import useGridItem from "../../hooks/useGridItem";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { gridItemColorVariants } from "../../constants/gid-card-color-schema.const";

function SelectCardColor() {
  const currentSelectedGridItemId = useAppSelector(
    (state) => state.dashboardSlice.currentSelectedGridItemId,
  );
  const dispatch = useAppDispatch();
  const item = useGridItem(currentSelectedGridItemId);

  const onClick = (value: string) => {
    const dataToUpdate = {
      colorVariant: value,
    };
    dispatch(updateAGridItemAct(item.id, dataToUpdate));
  };

  return (
    <div>
      <RadioGroup
        onValueChange={onClick}
        className={`grid grid-cols-7`}
        defaultValue="black"
        value={item?.colorVariant || "white"}
      >
        {Object.entries(gridItemColorVariants).map(([key, styles], index) => (
          <RadioGroupItem
            key={key}
            value={key}
            id={`${index}-${key}`}
            aria-label={key.charAt(0).toUpperCase() + key.slice(1)}
            className={`h-10 w-10 rounded-md border shadow-md ${styles.borderColor} ${styles.backgroundColor} data-[state=checked]:ring-2 data-[state=checked]:ring-offset-2`}
          />
        ))}
      </RadioGroup>
    </div>
  );
}

export default SelectCardColor;
