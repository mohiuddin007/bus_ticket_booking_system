import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CommonLayout from "./components/layouts/CommonLayout";
import Home from "./pages/Home";
import ErrorPage from "./pages/Error";

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
    path: "about",
    element: <div className="text-red-500 font-bold">About</div>,
  },
  {
    path: "*",
    element: <ErrorPage/>
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
