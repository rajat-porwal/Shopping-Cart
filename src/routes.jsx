import App from "./App";
import HomePage from "./components/HomePage/HomePage";
import CartPage from "./components/CartPage/CartPage";
import Checkout from "./components/Checkout/Checkout";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "homepage", element: <HomePage /> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
];

export default routes;
