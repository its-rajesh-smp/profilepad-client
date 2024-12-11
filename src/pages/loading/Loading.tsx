import Loader from "@/common/components/UI/Loader";

function Loading() {
  return (
    <div className="flex h-screen items-center justify-center gap-2">
      <Loader className="text-3xl" />
      <p>Loading...</p>
    </div>
  );
}

export default Loading;
