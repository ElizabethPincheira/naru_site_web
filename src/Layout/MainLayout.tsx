import { Outlet } from "react-router"
import Footer from "../components/organism/footer"
import NavBar from "../components/organism/NavBar"

const MainLayout = () => {
  return (
    <>
      <NavBar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default MainLayout

