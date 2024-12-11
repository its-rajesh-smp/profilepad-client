import { Button } from "@/common/components/shadcn/ui/button";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { BiImage, BiLink, BiText } from "react-icons/bi";
import { createLayoutAct } from "../../action-creators/layout-item.act";
import { IDashboardCard } from "../../types/dashboard.type";
import ActionButtonWithInput from "../UI/ActionButtonWithInput";

function InitialCard({ type }: IDashboardCard) {
  const dispatch = useAppDispatch();

  /**
   * Creates a new dashboard item of a given type.
   * @param data The data to be sent to the server.
   */
  const onCreateBtnClick = (data: any) => {
    dispatch(createLayoutAct(data));
  };

  const renderCardInput = () => {
    const triggerClassName =
      "border-none shadow-none outline-none focus-visible:ring-0";
    switch (type) {
      case "link":
        return (
          <ActionButtonWithInput
            triggerClassName={triggerClassName}
            tooltipText="URL"
            onSubmit={onCreateBtnClick}
            fieldName="url"
            type="link"
            icon={<BiLink />}
          />
        );
      case "image":
        return (
          <ActionButtonWithInput
            triggerClassName={triggerClassName}
            tooltipText="Image URL"
            onSubmit={onCreateBtnClick}
            fieldName="src"
            type="image"
            buttonVariant="outline"
            icon={<BiImage />}
          />
        );
      case "text":
        return (
          <Button
            tooltipText="Text"
            className={triggerClassName}
            onClick={() => onCreateBtnClick({ type: "text" })}
            variant="outline"
            size="xs"
            uiType="icon"
            icon={<BiText />}
          />
        );
    }
  };
  return (
    <div className="no-drag flex h-full w-full items-center justify-center">
      {renderCardInput()}
    </div>
  );
}

export default InitialCard;
