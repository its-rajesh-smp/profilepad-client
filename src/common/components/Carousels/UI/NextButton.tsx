import { ArrowRight } from "lucide-react";

function NextButton({ btnRef }: any) {
  return (
    <button
      ref={btnRef}
      className="custom-next no-drag absolute right-2 top-[50%] z-10 -translate-y-1/2 transform rounded-full bg-black px-2 py-2 text-white"
      aria-label="Next Slide"
    >
      <ArrowRight className="h-4 w-4" />
    </button>
  );
}

export default NextButton;
