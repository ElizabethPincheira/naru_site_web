import { useNavigate } from "react-router";
import { TEXTS } from "../../constants/texts"
import Parrafo1 from "../atoms/Parrafo1"
import ButtonDeco from "../atoms/ButtonDeco";


const MoreItemCart = () => {

const navigate = useNavigate();


  const irAHome = () => {
    console.log("estoy llendo al carrito")
    navigate("/");
  }

    return (

        <>
            <div className=" bg-gray-100 gap-6 bg-surface-container-lowest p-8 border-2 border-dashed  rounded-lg flex flex-col items-center justify-center text-center bg-surface-container-lowest w-full">
                <div className="w-full min-w-0">
                    <Parrafo1
                        text={TEXTS.textMoreItemsCart} />
                </div>
                <div className="mx-8">

                <ButtonDeco
                    text={TEXTS.textButtonMoreItems}
                    onClick={() => irAHome()} />

                </div>
            </div>



        </>
    )
}

export default MoreItemCart