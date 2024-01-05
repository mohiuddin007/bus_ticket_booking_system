/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
 import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const userInfo = useSelector((state) => state.user.userInfo);

  if (!userInfo) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
export default PrivateRoute;