import { useNavigate } from "react-router"
import { TEXTS } from "../../constants/texts"
import ButtonGeneric from "../atoms/ButtonGeneric"
import H2Title from "../atoms/H2Title"
import Parrafo1 from "../atoms/Parrafo1"
import Parrafo2 from "../atoms/Parrafo2"


const Resume = () => {

    const navigate = useNavigate();

    const irA = () => {
        console.log("estoy llendo al carrito")
        navigate("/form");
    }





    return (
        <>
            <div className="bg-gray-100 p-8 bg-surface-container rounded-lg border border-outline-variant/20">
                <div className="mb-4">
                    <H2Title
                        text={TEXTS.textTitleResume} />
                </div>
                <div className="space-y-4 mb-8">

                    <div className="flex justify-between font-body-md text-on-surface-variant">
                        <Parrafo2
                            text={TEXTS.textResumeSubTotal} />
                        <Parrafo2
                            text={"**Subtotal**"} />
                    </div>

                    <div className="flex justify-between font-body-md text-on-surface-variant">
                        <Parrafo2
                            text={TEXTS.textResumeSubTotalDespacho} />
                        <Parrafo2
                            text={"**Subtotal**"} />
                    </div>

                    <div className="pt-4 border-t border-outline-variant/30 flex justify-between items-center">

                        <Parrafo1
                            text={TEXTS.textResumeTotal} />
                        <Parrafo1
                            text={"**total**"} />

                    </div>

                    <ButtonGeneric
                        text={TEXTS.textButtonContinuar}
                        onClick={() => irA()} />

                </div>

            </div>
        </>
    )
}

export default Resume