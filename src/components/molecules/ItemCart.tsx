
import { TEXTS } from "../../constants/texts"
import ButtonDeleteCart from "../atoms/ButtonDeleteCart"
import ImageCard from "../atoms/ImageCard"
import Parrafo1 from "../atoms/Parrafo1"
import Parrafo2 from "../atoms/Parrafo2"


const ItemCart = () => {


    const deleteItem = () => {
        console.log("estoy borrando el item de la lista del carrito")
    }

    return (
        <>
            <div className=" bg-gray-100 flex items-center gap-6 p-4 rounded-lg ">
                <div className="w-20 h-20 md:w-32 md:h-32 bg-surface-container shrink-0 overflow-hidden rounded">
                    <ImageCard />
                </div>
                <div className="ml-4 grow flex flex-col md:flex-row md:items-center justify-between gap-4 w-full ">
                    <div>
                        <Parrafo2
                            text="**Titulo**"
                        />
                        <Parrafo2
                            text="**Detalle o cantidad*"
                        />
                    </div>
                    <div className="flex flex-col items-end md:items-end gap-2">

                        <Parrafo1
                            text="**Precio**" />

                        <ButtonDeleteCart
                            text={TEXTS.textDeleteCart}
                            onClick={deleteItem} />

                    </div>


                </div>

            </div>


        </>


    )
}

export default ItemCart


