import { TEXTS } from "../../constants/texts"
import ButtonCta from "../atoms/ButtonCta"
import ImageHero from "../atoms/ImageHero"
import H1Title from "../atoms/H1Title"
import Parrafo1 from "../atoms/Parrafo1"
import ButtonDeco from "../atoms/ButtonDeco"

const Hero = () => {
    return (
        <>
            <main className="grow max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-12">
                <section className="relative h-[85vh] min-h-150 flex items-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <ImageHero />
                        <div className="absolute inset-0 bg-linear-to-r from-background/90 via-background/40 to-transparent"></div>
                    </div>
                    <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid md:grid-cols-2 gap-12 items-center px-10 ">
                        <div className="space-y-6 ">
                            <H1Title text={TEXTS.textTitleHero} />
                            <Parrafo1 text={TEXTS.textHero} />
                        </div>
                        <div className="space flex justify-center items-center py-4">
                            <ButtonCta
                                text={TEXTS.textButtonCta}
                                onClick={() => console.log("Botón CTA presionado")}/>
                            <div className="mx-8">
                                <ButtonDeco
                                    text={"*Nosotros"}
                                    onClick={() => console.log("Botón CTA presionado")}/>
                            </div>
                        </div>
                    </div>
                </section >
            </main>
        </>
    )
}

export default Hero