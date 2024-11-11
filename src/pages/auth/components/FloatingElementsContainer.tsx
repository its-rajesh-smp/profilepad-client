import { authPageFloatingItems } from "../constants/floating-items.const";
import FloatingElement from "./UI/FloatingElement";

function FloatingElementsContainer() {
  return (
    <div className="hidden h-full w-1/2 grid-cols-3 grid-rows-3 items-center lg:grid">
      {authPageFloatingItems.map((imageUrl, index) => (
        <FloatingElement key={index} src={imageUrl} />
      ))}
    </div>
  );
}

export default FloatingElementsContainer;
