import { GoogleOAuthProvider } from "@react-oauth/google";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./app/App";
import { Toaster } from "./common/components/shadcn/ui/sonner";
import { GOOGLE_OAUTH_CLIENT_ID } from "./common/constants/app.const";
import "./index.css";
import reduxStore from "./store/store";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <Provider store={reduxStore}>
    <GoogleOAuthProvider clientId={GOOGLE_OAUTH_CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
    <Toaster />
  </Provider>,
  // </StrictMode>,
);
