import Loader from "@/common/components/UI/Loader";

function LoadingPage({
  loadingText = "Loading...",
  fullScreen = false,
}: {
  loadingText?: string;
  fullScreen?: boolean;
}) {
  return (
    <div
      className={`flex h-screen w-full items-center justify-center gap-2 ${fullScreen ? "fixed left-0 top-0 z-10 w-screen bg-white" : ""}`}
    >
      <Loader className="text-3xl" />
      <p>{loadingText}</p>
    </div>
  );
}

export default LoadingPage;
