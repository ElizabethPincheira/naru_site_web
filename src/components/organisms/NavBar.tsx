import { useNavigate } from "react-router"
import { TEXTS } from "../../constants/texts"
import ButtonNavBar from "../atoms/ButtonNavBar"
import IconNavBar from "../atoms/IconNavBar"
import H2Title from "../atoms/H2Title"

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
                        <ButtonNavBar text={TEXTS.textTitleNavBar} onClick={() => irAHome()}/>
                        </div>
                    </div>
                    <div className="hidden md:flex gap-8">
                        <ButtonNavBar
                            text={TEXTS.textNavBarCart}
                            onClick={() => irACart()}
                        />
                        <ButtonNavBar
                            text={"**Otra Page**"}
                            onClick={() => console.log("aun no se crea")}
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="text-primary p-2 btn-hover">
                            <span className="basis-1/4">
                                <IconNavBar />
                            </span>
                        </button>
                    </div>

                </nav>
            </div>
        </>

    )
}

export default NavBar

/*

<header class="fixed top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-outline-variant/30 w-full">
<nav class="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto">
<div class="font-headline-md text-headline-md text-primary tracking-tight">Macetas Artesanales</div>
<div class="hidden md:flex gap-8">
<a class="text-primary border-b-2 border-primary font-bold pb-1 font-label-md text-label-md" href="#">Home</a>
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-md text-label-md" href="#productos">Products</a>
</div>
<div class="flex items-center gap-4">
<button class="text-primary p-2 btn-hover">
<span class="material-symbols-outlined">shopping_cart</span>
</button>
<button class="md:hidden text-primary p-2">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</nav>
</header>
*/