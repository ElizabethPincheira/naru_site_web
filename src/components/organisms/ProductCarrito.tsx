import { TEXTS } from "../../constants/texts"
import H2Title from "../atoms/H2Title"
import Parrafo1 from "../atoms/Parrafo1"
import ItemCart from "../molecules/ItemCart"
import MoreItemCart from "../molecules/MoreItemCart"
import Resume from "../molecules/Resume"


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
            <MoreItemCart />
          </div>
        </div>


        <div className="lg:col-span-4 sticky top-28">

          <Resume />
        </div>
      </main>

    </>
  )
}

export default ProductCarrito




