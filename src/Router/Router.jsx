import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import MyExports from "../pages/MyExports";
import MyImports from "../pages/MyImports";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "../PrivateRoute/PrivateRouter";
import ProductDetails from "../pages/ProductDetails";
import AddExports from "../pages/AddExports";
import Error from "../Components/Error";
import LoadingSpinner from "../Components/LoadingSpinner";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <Error />,
    hydrateFallbackElement: <LoadingSpinner />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const res = await fetch("http://localhost:5000/latestProducts");
          return res.json();
        },
      },

      {
        path: "/all-products",
        element: <AllProducts />,
        loader: () => fetch("http://localhost:5000/data"),
      },
      {
        path: "/my-exports",
        element: (
          <PrivateRouter>
            <MyExports />
          </PrivateRouter>
        ),
      },
      {
        path: "/my-imports",
        element: (
          <PrivateRouter>
            <MyImports />
          </PrivateRouter>
        ),
      },
      {
        path: "/add-export",
        element: (
          <PrivateRouter>
            <AddExports />
          </PrivateRouter>
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
      {
        path: "/product/:id",
        element: (
          <PrivateRouter>
            <ProductDetails />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/data/${params.id}`),
      },
    ],
  },
]);

export default router;
