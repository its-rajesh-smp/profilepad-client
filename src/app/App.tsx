import appRouter from "@/routes/app.router";
import { RouterProvider } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="h-full w-full">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
