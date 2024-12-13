import { GoogleOAuthProvider } from "@react-oauth/google";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./app/App";
import { Toaster } from "./common/components/shadcn/ui/sonner";
import "./index.css";
import reduxStore from "./store/store";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <Provider store={reduxStore}>
    <GoogleOAuthProvider clientId="144611473759-6ck46mv7p5cptj41cg1lo8rd1lr2c8m9.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
    <Toaster />
  </Provider>,
  // </StrictMode>,
);
