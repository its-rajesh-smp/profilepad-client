export const APP_NAME = "Dashboard";
export const APP_ICON =
  "https://cdn-icons-png.flaticon.com/512/8022/8022077.png";
export const APP_ENV: string = "Production";
export const API_URL =
  APP_ENV == "Production"
    ? "profilepad-server.vercel.app"
    : "http://localhost:3000";
export const SOCKET = false;
