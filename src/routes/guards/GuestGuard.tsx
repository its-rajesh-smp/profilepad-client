import { useAppSelector } from "@/common/hooks/useAppSelector";
import { Navigate, Outlet } from "react-router-dom";

function GuestGuard() {
  const isAuthenticated = useAppSelector(
    (state) => state.authSlice.isAuthenticated,
  );

  return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />;
}

export default GuestGuard;
