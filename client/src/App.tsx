import { useRoutes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import AdminProductList from "./pages/admin/product/List";
import AdminProductAdd from "./pages/admin/product/Add";
import AdminProductEdit from "./pages/admin/product/Edit";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ClientLayout from "./layouts/ClientLayout";
import Cart from "./pages/Cart";
import Homepage from "./pages/Homepage";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/checkOut";
import LoginPage from "./pages/test";
import PrivateRoute from "./components/PrivateRouter";
import ShopList from "./pages/shop";
import CheckoutPage from "./pages/test";
import Oder from "./pages/oder";

const routeConfig = [
  {
    path: "admin",
    element:  (<PrivateRoute><AdminLayout /></PrivateRoute>),
    children: [
      {
        path: "",
        element: <AdminProductList />,
      },
      {
        path: "product/add",
        element: <AdminProductAdd />,
      },
      {
        path: "product/edit/:id",
        element: <AdminProductEdit />,
      },
    ],
  },
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/shop",
        element: <ShopList />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "oder",
        element: <Oder />,
      },
    ],
  },
];

function App() {
  const routes = useRoutes(routeConfig);

  return <main>{routes}</main>;
}

export default App;
