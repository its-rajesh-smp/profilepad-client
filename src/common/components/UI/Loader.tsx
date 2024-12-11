import { FiLoader } from "react-icons/fi";

function Loader({ className }: { className?: string }) {
  return <FiLoader className={`animate-spin ${className}`} />;
}

export default Loader;
