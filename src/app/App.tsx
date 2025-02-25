import ApiLoader from "@/common/components/UI/LineLoader";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { fetchUserAct } from "@/pages/auth/action-creators/register.act";
import LoadingPage from "@/pages/loading-page/LoadingPage";
import appRouter from "@/routes/app.router";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import LineLoader from "@/common/components/UI/LineLoader";

function App() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await dispatch(fetchUserAct());
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="h-full w-full">
      <LineLoader />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
