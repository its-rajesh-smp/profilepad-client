import { Outlet, useNavigate } from "react-router-dom";

function GuestGuard() {
  const navigate = useNavigate();

  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <div>GuestGuard</div>;
}

export default GuestGuard;
