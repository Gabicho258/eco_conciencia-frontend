import { Navigate, Outlet } from "react-router-dom";
interface ProtectedRouteProps {
  isAuthenticated: boolean | "" | null;
  children: React.ReactNode;
  redirectTo?: string; // optional prop to redirect to when not authenticated  // default value is "/"  // if not provided, will redirect to "/" by default when not authenticated  // if provided, will redirect to the specified route when not authenticated  // if authenticated, will render the children component or outlet  // if not authenticated, will render nothing  // if children prop is not provided, will render nothing and not render the outlet  // if children prop is provided but is empty, will render nothing and not render the outlet  // if children prop is provided and is not empty, will render the children component or outlet  // if isAuthenticated is true and children prop is provided but is empty, will render nothing and not render the outlet  // if isAuthenticated is true and children prop is provided and is not empty, will render the children component or outlet  // if isAuthenticated is
}

export const ProtectedRoute = ({
  isAuthenticated,
  children,
  redirectTo = "/",
}: ProtectedRouteProps) => {
  if (!isAuthenticated) {
    console.log("first");
    return <Navigate to={redirectTo} />;
  }
  return children ? children : <Outlet />;
};
