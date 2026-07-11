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
            <div className="bg-background text-on-background flex flex-items-center justify-center p-4 my-10">
                <main className="relative bg-surface-container-lowest rounded-lg overflow-hidden text-center  ">
                    <div className="bg-gray-100 px-gutter py-16 flex flex-col items-center">
                        <div className="relative mb-12 success-animation">
                            <div className="w-48 h-48 bg-secondary-container/50 rounded-full flex items-center justify-center relative overflow-hidden">
                                <ImageCard />
                            </div>
                        </div>
                        <div className="max-w-md mx-auto space-y-6">
                            <H2Title text={TEXTS.textCongratulation} />
                            <Parrafo1 text={TEXTS.textParrafoCongratulation} />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 pt-8 p-8 ">
                            <ButtonGeneric text={TEXTS.textButtonV} onClick={() => irA()} />
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Congratulations