import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { verifyUserAct } from "@/pages/auth/action-creators/register.act";
import appRouter from "@/routes/app.router";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(verifyUserAct());
  }, []);

  return (
    <div className="h-full w-full">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
