import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./app/App";
import { Toaster } from "./common/components/shadcn/ui/sonner";
import "./index.css";
import reduxStore from "./store/store";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <Provider store={reduxStore}>
    <App />
    <Toaster />
  </Provider>,
  // </StrictMode>,
);
