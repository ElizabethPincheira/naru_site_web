
import { useNavigate } from "react-router"
import { TEXTS } from "../../constants/texts"
import ButtonCard from "../atoms/ButtonCard"
import ImageCard from "../atoms/ImageCard"
import Parrafo1 from "../atoms/Parrafo1"
import Parrafo2 from "../atoms/Parrafo2"
import type { MaceteroCardProps } from "@/models/product.model"

const Card = ({ maceteroCard }:MaceteroCardProps) => {


  //console.log(maceteroCard)

  const navigate = useNavigate();


  const irA = () => {
    console.log("estoy llendo al carrito")
    navigate("/cart");
  }


  return (
    <>
      <div className=" bg-gray-100 group cement-border rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
        <ImageCard />
        <div className="w-full p-4 h-56 flex flex-col">
          <Parrafo1
            text={maceteroCard.nombre}
          />
          <div className="flex-1 overflow-hidden">
          <Parrafo2
            text={maceteroCard.descripcion}
          />
          <Parrafo2
            text="**Stock**"
          />
          </div>
          <div className="flex justify-end">
            <Parrafo1
              text="**Precio**" />
          </div>
          <ButtonCard
            text={TEXTS.textButtonCard}
            onClick={() => irA()}
          />
        </div>
      </div>
    </>


  )
}

export default Card

