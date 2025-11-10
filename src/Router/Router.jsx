import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import MyExports from "../pages/MyExports";
import MyImports from "../pages/MyImports";
import AddExport from "../pages/AddExports";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "../PrivateRoute/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    hydrateFallbackElement: <div>Loading...</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-products",
        element: <AllProducts />,
        loader: () => fetch("http://localhost:3000/data"),
      },
      {
        path: "/my-exports",
        element: (
          // <PrivateRouter>
          <MyExports />
          // </PrivateRouter>
        ),
      },
      {
        path: "/my-imports",
        element: (
          // <PrivateRouter>
          <MyImports />
          // </PrivateRouter>
        ),
      },
      {
        path: "/add-export",
        element: (
          // <PrivateRouter>
          <AddExport />
          // </PrivateRouter>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
