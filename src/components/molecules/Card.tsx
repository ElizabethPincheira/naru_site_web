
import { useNavigate } from "react-router"
import { TEXTS } from "../../constants/texts"
import ButtonCard from "../atoms/ButtonCard"
import ImageCard from "../atoms/ImageCard"
import PriceCard from "../atoms/PriceCard"
import TitleCard from "../atoms/TitleCard"




const Card = () => {

  const navigate = useNavigate();


 const irA = () => {
    console.log("estoy llendo al carrito")
    navigate("/form");
 }

  return (
    <>

      <TitleCard
        text="titulo que cambia"
      />

      <ImageCard />

      <PriceCard
        text={"5000"} />

      <ButtonCard
        text={TEXTS.textButtonCard}
        onClick={() => irA()}
      />
    </>


  )
}

export default Card
function useNavigateate() {
  throw new Error("Function not implemented.")
}

