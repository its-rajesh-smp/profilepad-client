import { Button } from "@/common/components/shadcn/ui/button";
import GridItemContext from "@/pages/dashboard/context/GridItemContext";
import { useContext } from "react";
import { FaCode, FaEye } from "react-icons/fa";

function HtmlToggleBtn() {
  const { htmlPreview, setHtmlPreview } = useContext(GridItemContext);
  return (
    <Button
      onClick={() => setHtmlPreview((prev) => !prev)}
      variant="default"
      size="icon"
      icon={
        htmlPreview ? (
          <FaCode className="h-4 w-4" />
        ) : (
          <FaEye className="h-4 w-4" />
        )
      }
    />
  );
}

export default HtmlToggleBtn;
