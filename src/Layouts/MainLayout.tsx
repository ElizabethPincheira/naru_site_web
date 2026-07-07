import { Outlet } from "react-router"
import NavBar from "../components/organisms/NavBar"
import Footer from "../components/organisms/footer"

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

