import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectRoute = () => {
  const location = useLocation();
  const isAuth = localStorage.getItem("user");
  return isAuth ? <Outlet /> : <Navigate to="/login" replace state={{from: location}} />;
};

export default ProtectRoute
export const protectedRoutes = () => {
  return <div>hola</div>;
};
