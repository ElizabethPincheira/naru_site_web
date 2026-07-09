
import ButtonGeneric from "../atoms/ButtonGeneric"
import { TEXTS } from "../../constants/texts"
import ImageCard from "../atoms/ImageCard"
import Parrafo1 from "../atoms/Parrafo1"



const ProductCart = () => {
  return (
    <>
      <ImageCard />
      <Parrafo1
        text="**Titulo**" />

        <Parrafo1
        text="**Descripcion**"/>
        
        <Parrafo1
        text="**Precio**"/>


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

export default ProductCart