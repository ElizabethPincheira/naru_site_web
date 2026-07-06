import { BrowserRouter, Route, Routes } from "react-router"
import HomePage from "../pages/homePage/HomePage"
import CartPage from "../pages/cartPage/CartPage"



export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </BrowserRouter>
    )
}