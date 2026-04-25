import { useApiLoader } from "@/common/hooks/useApiLoader";

const LineLoader = () => {
  const { loading } = useApiLoader();
  return (
    loading && (
      <div className="fixed left-0 top-0 z-50 h-0.5 w-full overflow-hidden bg-gray-200">
        <div className="h-full w-1/2 animate-progress bg-blue-500"></div>
      </div>
    )
  );
};

export default LineLoader;
