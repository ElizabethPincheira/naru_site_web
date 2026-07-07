import { useNavigate } from "react-router"
import { TEXTS } from "../../constants/texts"
import ButtonNavBar from "../atoms/ButtonNavBar"
import IconNavBar from "../atoms/IconNavBar"
import TitleNavBar from "../atoms/TitleNavBar"

const NavBar = () => {

 const navigate = useNavigate();


 const irA = () => {
    console.log("estoy llendo al carrito")
    navigate("/cart");
 }


    return (
        <>
            <div className="flex flex-row">
                <div className="basis-1/4">
                    <TitleNavBar text={TEXTS.textTitleNavBar} />
                </div>
                <ButtonNavBar
                text={TEXTS.textNavBarCart}
                onClick={() => irA()}
            />
                <div className="basis-1/4">
                    <IconNavBar />
                </div>
            </div>
        </>

    )
}

export default NavBar