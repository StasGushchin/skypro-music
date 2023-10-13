import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute({ user, redirectPath = "/login" }) {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}