import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { verifyUserAct } from "@/pages/auth/action-creators/register.act";
import LoadingPage from "@/pages/loading-page/LoadingPage";
import appRouter from "@/routes/app.router";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await dispatch(verifyUserAct());
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="h-full w-full">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
