import { useNavigate } from "react-router"
import { TEXTS } from "../../constants/texts"
import ButtonGeneric from "../atoms/ButtonGeneric"
import H2Title from "../atoms/H2Title"
import ImageCard from "../atoms/ImageCard"
import Parrafo1 from "../atoms/Parrafo1"


const Congratulations = () => {


    const navigate = useNavigate();
    const irA = () => {
        console.log("regresa al inicio")
        navigate("/");
        
    }




    return (
        <>
            <div className="bg-background text-on-background min-h-screen flex flex-items-center justify-center p-4 my-10">
                <main className="relative z-10 w-full max-w-2xl bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden text-center transition-all duration-700">
                    <div className="px-gutter py-16 flex flex-col items-center">
                        <div className="relative mb-12 success-animation">
                            <div className="w-48 h-48 bg-secondary-container/50 rounded-full flex items-center justify-center relative overflow-hidden">
                                <ImageCard />
                            </div>
                        </div>
                        <div className="max-w-md mx-auto space-y-6">
                            <H2Title text={TEXTS.textCongratulation} />
                            <Parrafo1 text={TEXTS.textParrafoCongratulation} />
                        </div>
<ButtonGeneric text={TEXTS.textButtonV} onClick={() => irA()}/>

                    </div>

                </main>
            </div>


        </>



    )
}

export default Congratulations