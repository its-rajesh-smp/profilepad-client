import { Button } from "@/common/components/shadcn/ui/button";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { BiImage, BiLink, BiText } from "react-icons/bi";
import { createLayoutAct } from "../action-creators/layout.act";
import { DashboardCardType } from "../types/dashboard.type";

function ActionBar() {
  const dispatch = useAppDispatch();

  /**
   * Creates a new dashboard item of a given type.
   * @param {DashboardCardType} type The type of the item to be created.
   */
  const onCreateBtnClick = (type: DashboardCardType) => {
    dispatch(createLayoutAct(type));
  };

  return (
    <div className="fixed bottom-5 left-1/2 right-0 flex w-fit translate-x-[-50%] gap-2 rounded-md border bg-white p-2 shadow-md">
      <Button variant="default" size="xs">
        Share
      </Button>
      <Button
        onClick={() => onCreateBtnClick("link")}
        variant="secondary"
        size="xs"
        uiType="icon"
        icon={<BiLink />}
      />
      <Button
        onClick={() => onCreateBtnClick("image")}
        variant="secondary"
        size="xs"
        uiType="icon"
        icon={<BiImage />}
      />
      <Button
        onClick={() => onCreateBtnClick("text")}
        variant="secondary"
        size="xs"
        uiType="icon"
        icon={<BiText />}
      />
    </div>
  );
}

export default ActionBar;
