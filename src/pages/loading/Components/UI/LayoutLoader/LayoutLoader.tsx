import "./layout-loader.css";

function LayoutLoader() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="layout-loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p>Layout is loading...</p>
    </div>
  );
}

export default LayoutLoader;
