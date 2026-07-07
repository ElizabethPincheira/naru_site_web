import { TEXTS } from "../../constants/texts"
import ButtonCard from "../atoms/ButtonCard"
import ImageCard from "../atoms/ImageCard"
import PriceCard from "../atoms/PriceCard"
import TitileCard from "../atoms/TitileCard"




const Card = () => {
  return (
    <>
    
    <TitileCard
    text="titulo que cambia"
    />

    <ImageCard/>

    <PriceCard
    text={"5000"}/>

    <ButtonCard
      text={TEXTS.textButtonCard}
      onClick={() => console.log("Botón presionado")}
    />
    </>
    

  )
}

export default Card