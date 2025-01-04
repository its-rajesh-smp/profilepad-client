import { Button } from "@/common/components/shadcn/ui/button";
import { IoOpenOutline } from "react-icons/io5";
import { toast } from "sonner";

function VisitWebsite({
  url,
  type = "link",
  icon = <IoOpenOutline />,
  text = "Visit",
}: {
  type?: "link" | "button";
  url: string | undefined;
  text?: string;
  icon?: React.ReactNode;
}) {
  /**
   * Opens the specified URL in a new browser tab.
   * Or opens the blog in the modal
   */
  const onBtnClick = () => {
    if (!url) {
      return toast.error("Oops! No URL found");
    }
    window.open(url, "_blank");
  };

  switch (type) {
    case "link":
      return (
        <Button
          onClick={onBtnClick}
          variant="ghost"
          className="no-drag w-fit px-3 text-sm"
          type="button"
          icon={icon}
        />
      );

    case "button":
      return (
        <Button
          onClick={onBtnClick}
          size="xs"
          className="no-drag w-fit px-3 text-xs"
          type="button"
        >
          {text}
        </Button>
      );
  }
}

export default VisitWebsite;
