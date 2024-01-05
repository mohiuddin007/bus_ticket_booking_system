import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CommonLayout from "./components/layouts/CommonLayout";
import Home from "./pages/Home";
import ErrorPage from "./pages/Error";
import Booking from "./pages/Booking";
import User from "./pages/User";
import AuthLayout from "./components/layouts/AuthLayout";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import PrivateRoute from "./components/auth/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CommonLayout>
        <Home />
      </CommonLayout>
    ),
  },
  {
    path: "/booking/:slug",
    element: (
      <CommonLayout>
        <PrivateRoute>
          <Booking />
        </PrivateRoute>
      </CommonLayout>
    ),
  },
  {
    path: "/user",
    element: (
      <CommonLayout>
        <PrivateRoute>
          <User />
        </PrivateRoute>
      </CommonLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <AuthLayout>
        <Login />
      </AuthLayout>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthLayout>
        <SignUp />
      </AuthLayout>
    ),
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
