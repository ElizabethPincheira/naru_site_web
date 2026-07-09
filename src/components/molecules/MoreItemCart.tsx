import { TEXTS } from "../../constants/texts"
import ButtonGeneric from "../atoms/ButtonGeneric"
import Parrafo1 from "../atoms/Parrafo1"


const MoreItemCart = () => {
    return (
        <>
            <div className="p-8 border-2 border-dashed border-outline-variant/50 rounded-lg flex flex-col items-center justify-center text-center bg-surface-container-low/50">
                <Parrafo1
                    text={TEXTS.textMoreItemsCart} />
                <ButtonGeneric
                    text={TEXTS.textButtonMoreItems}
                    onClick={() => console.log("presiona boton del cart item ver mas")} />
            </div>



        </>
    )
}

export default MoreItemCart