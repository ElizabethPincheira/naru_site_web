import HomePage from "../pages/homePage/HomePage"
import CartPage from "../pages/cartPage/CartPage"
import MainLayout from "../Layout/MainLayout"
import { createBrowserRouter } from "react-router"



export const AppRouter = createBrowserRouter([
    {
        path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/cart",
        element: <CartPage />
      }
    ]
  }
    
]);