import ButtonGeneric from "../../components/atoms/ButtonGeneric"
import ListaCart from "../../components/atoms/listaCart"
import TitleCartPage from "../../components/atoms/TitleCartPage"
import { TEXTS } from "../../constants/texts"


const CartPage = () => {
  return (

    <>

      <TitleCartPage
        text={TEXTS.textTitleCartPage} />

      <ListaCart />
      <ButtonGeneric
        text={TEXTS.textButtonGenericCont}
        onClick={() => console.log("Botón continuar con la compra presionado")}
      />

      <ButtonGeneric
        text={TEXTS.textButtonGenericRetr}
        onClick={() => console.log("Botón seguir comprando presionado")}
      />


    </>

  )
}

export default CartPage
