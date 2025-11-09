import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import MyExports from "../pages/MyExports";
import MyImports from "../pages/MyImports";
import AddExport from "../pages/AddExport";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/all-products", element: <AllProducts /> },
      { path: "/my-exports", element: <MyExports /> },
      { path: "/my-imports", element: <MyImports /> },
      { path: "/add-export", element: <AddExport /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

export default router;
