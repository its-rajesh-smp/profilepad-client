import { Button } from "@/common/components/shadcn/ui/button";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { FcGallery, FcLink } from "react-icons/fc";
import { RxText } from "react-icons/rx";
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
      "border-none shadow-none outline-none bg-gray-50  focus-visible:ring-0 w-full h-full";

    switch (type) {
      case "link":
        return (
          <ActionButtonWithInput
            triggerClassName={triggerClassName}
            onSubmit={onCreateBtnClick}
            fieldName="url"
            type="link"
            icon={<InitialCardIcon icon={<FcLink />} text="Link" />}
          />
        );
      case "image":
        return (
          <ActionButtonWithInput
            triggerClassName={triggerClassName}
            onSubmit={onCreateBtnClick}
            fieldName="src"
            type="image"
            buttonVariant="outline"
            icon={<InitialCardIcon icon={<FcGallery />} text="Image" />}
          />
        );
      case "text":
        return (
          <Button
            className={triggerClassName}
            onClick={() => onCreateBtnClick({ type: "text" })}
            variant="outline"
            size="xs"
            uiType="icon"
            icon={<InitialCardIcon icon={<RxText />} text="Text" />}
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

function InitialCardIcon({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1 font-semibold text-gray-500">
      {icon}
      <p>{text}</p>
    </div>
  );
}
