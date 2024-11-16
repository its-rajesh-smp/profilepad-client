import { ArrowLeft } from "lucide-react";

function PrevButton() {
  return (
    <button
      className="custom-prev no-drag absolute left-2 top-[50%] z-10 -translate-y-1/2 transform rounded-full bg-black px-2 py-2 text-white"
      aria-label="Previous Slide"
    >
      <ArrowLeft className="h-4 w-4" />
    </button>
  );
}

export default PrevButton;
