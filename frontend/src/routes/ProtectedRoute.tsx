import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  canActivate: unknown;
  redirectPath: string;
}

export function ProtectedRoute({
  canActivate,
  redirectPath = '/',
}: ProtectedRouteProps) {
  if (!canActivate) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />; // Charge all wrapper
}
