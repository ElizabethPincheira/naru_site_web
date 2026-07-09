import HomePage from "../pages/homePage/HomePage"
import CartPage from "../pages/cartPage/CartPage"
import MainLayout from "../Layouts/MainLayout"
import { createBrowserRouter } from "react-router"
import FormPage from "../pages/formPage/FormPage";
import ResumePage from "../pages/resumePage/ResumePage";



export const AppRouter = createBrowserRouter([
  {
    path: "/", element: <MainLayout />, children:
      [
        { index: true, element: <HomePage /> },
        { path: "/cart", element: <CartPage /> },
        { path: "/form", element: <FormPage /> },
        { path: "/resume", element: <ResumePage /> },
      ]
  }
]);