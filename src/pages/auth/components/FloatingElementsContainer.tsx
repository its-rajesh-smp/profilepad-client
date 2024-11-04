import FloatingElement from "./UI/FloatingElement";

function FloatingElementsContainer() {
  return (
    <div className="hidden h-full w-1/2 grid-cols-3 grid-rows-3 items-center lg:grid">
      <FloatingElement />
      <FloatingElement />
      <FloatingElement />
      <FloatingElement />
      <FloatingElement />
      <FloatingElement />
      <FloatingElement />
      <FloatingElement />
      <FloatingElement />
    </div>
  );
}

export default FloatingElementsContainer;
