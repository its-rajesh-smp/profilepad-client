import { Button } from "@/common/components/shadcn/ui/button";
import { BiImage, BiLink, BiText } from "react-icons/bi";

function ActionBar() {
  return (
    <div className="fixed bottom-5 left-1/2 right-0 flex w-fit translate-x-[-50%] gap-2 rounded-md border bg-white p-2 shadow-md">
      <Button variant="default" size="xs">
        Share
      </Button>
      <Button variant="secondary" size="xs" uiType="icon" icon={<BiLink />} />
      <Button variant="secondary" size="xs" uiType="icon" icon={<BiImage />} />
      <Button variant="secondary" size="xs" uiType="icon" icon={<BiText />} />
    </div>
  );
}

export default ActionBar;
