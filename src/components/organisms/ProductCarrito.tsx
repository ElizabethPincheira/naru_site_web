import { TEXTS } from "../../constants/texts"
import ButtonGeneric from "../atoms/ButtonGeneric"
import H2Title from "../atoms/H2Title"
import Parrafo1 from "../atoms/Parrafo1"
import ItemCart from "../molecules/ItemCart"


const ProductCarrito = () => {
  return (

    <>
      <main className="grow max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-12">
        <div className="my-8">
          <H2Title
            text={TEXTS.textTitleCart} />
          <Parrafo1
            text={TEXTS.textParrafoCart} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-6 p-4 border border-outline-variant/30 rounded-lg bg-surface-container-lowest transition-transform hover:scale-[1.01]">
              <ItemCart />
            </div>
          </div>
        </div>
        <div className="p-8 border-2 border-dashed border-outline-variant/50 rounded-lg flex flex-col items-center justify-center text-center bg-surface-container-low/50">
          <Parrafo1
            text={TEXTS.textMoreItemsCart} />
            <ButtonGeneric
            text={TEXTS.textButtonMoreItems}
            onClick={() => console.log("presiona boton del cart item ver mas")}/>
        </div>




      </main>

    </>
  )
}

export default ProductCarrito