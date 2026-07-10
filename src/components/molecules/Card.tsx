
import { useNavigate } from "react-router"
import { TEXTS } from "../../constants/texts"
import ButtonCard from "../atoms/ButtonCard"
import ImageCard from "../atoms/ImageCard"
import Parrafo1 from "../atoms/Parrafo1"
import Parrafo2 from "../atoms/Parrafo2"

const Card = () => {

  const navigate = useNavigate();


  const irA = () => {
    console.log("estoy llendo al carrito")
    navigate("/cart");
  }


  return (
    <>
      <div className="group bg-surface-container-lowest justify-items-center cement-border rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
        <ImageCard />
        <div className="w-full pt-4 space-y-5">
          <Parrafo2
            text="**Titulo**"
          />
          <Parrafo1
            text="**Descripcion***************"
          />
            <Parrafo1
              text="**Precio**" />
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


