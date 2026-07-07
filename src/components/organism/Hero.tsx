import { TEXTS } from "../../constants/texts"
import ButtonCta from "../atoms/ButtonCta"
import TextHero from "../atoms/TextHero"
import TitleHero from "../atoms/TitleHero"


const Hero = () => {
  return (
    <>   
    <TitleHero text={TEXTS.textTitleHero} />
      <TextHero text={TEXTS.textHero} />
      <ButtonCta
        text={TEXTS.textButtonCta}
        onClick={() => console.log("Botón CTA presionado")}
      />
    
    </>
  )
}

export default Hero