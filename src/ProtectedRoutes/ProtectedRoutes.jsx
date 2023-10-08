import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute({ redirectPath = "/login" }) {
  if (!localStorage.user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}