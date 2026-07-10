import { useNavigate } from "react-router"
import { TEXTS } from "../../constants/texts"
import ButtonNavBar from "../atoms/ButtonNavBar"
import IconCart from "../atoms/IconCart"
import { ImMenu } from "react-icons/im"
import { DropdownIconSimple } from "../molecules/DropdownIconSimple"

const NavBar = () => {

    const navigate = useNavigate();


    const irACart = () => {
        console.log("estoy llendo al carrito")
        navigate("/cart");
    }

    const irAHome = () => {
        console.log("estoy llendo al carrito")
        navigate("/");
    }

    return (
        <>
            <div className="fixed top-0 z-50 bg-background/95 backdrop-blur-sm border-outline-variant/30 w-full">
                <nav className="flex justify-between items-center w-full px-margin-desktop py-4 px-8 max-w-container-max mx-auto">
                    <div className="font-headline-md text-headline-md text-primary tracking-tight">
                        <div className="basis-1/4">
                            <ButtonNavBar text={TEXTS.textTitleNavBar} onClick={() => irAHome()} />
                        </div>
                    </div>
                    <div className="hidden md:flex gap-8">
                        <ButtonNavBar
                            text={TEXTS.textNavBarCart}
                            onClick={() => irACart()}
                        />
                        <ButtonNavBar
                            text={"*Nosotros"}
                            onClick={() => console.log("Nosotros aun no se crea")}
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="text-primary p-2 btn-hover">
                            <span className="basis-1/4">
                                <IconCart />
                            </span>
                        </button>


                        <div className="flex items-center gap-4">

                            

                            <div className="md:hidden">
                                <DropdownIconSimple />
                            </div>

                        </div>



                        




                    </div>

                </nav>
            </div>
        </>

    )
}

export default NavBar

