
import { useNavigate } from "react-router"
import { TEXTS } from "../../constants/texts"
import ButtonCard from "../atoms/ButtonCard"
import ImageCard from "../atoms/ImageCard"
import Parrafo1 from "../atoms/Parrafo1"

const Card = () => {

  const navigate = useNavigate();


  const irA = () => {
    console.log("estoy llendo al carrito")
    navigate("/cart");
  }


  return (
    <>
      <div className="group bg-surface-container-lowest cement-border rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">

        <div className="aspect-square relative overflow-hidden bg-surface-variant">
          <ImageCard />
        </div>

        <div className="p-6 space-y-3">

          <Parrafo1
            text="**Titulo**"
          />

          <Parrafo1
            text="**Descripcion**"
          />


          <div className="flex items-center gap-2">

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


