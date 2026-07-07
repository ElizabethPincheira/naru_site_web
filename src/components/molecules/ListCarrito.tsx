
import ButtonGeneric from "../atoms/ButtonGeneric"
import ListaCart from "../atoms/listaCart"
import TitleCartPage from "../atoms/TitleCartPage"
import  { TEXTS } from "../../constants/texts"



const ListCarrito = () => {
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

export default ListCarrito