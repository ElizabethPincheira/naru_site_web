import { useNavigate } from "react-router";
import { TEXTS } from "../../constants/texts"
import ButtonGeneric from "../atoms/ButtonGeneric"
import H2Title from "../atoms/H2Title"


const Formulario = () => {


    const navigate = useNavigate();


    const irA = () => {
        console.log("estoy llendo al page resume")
        navigate("/resume");
    }

    const regresar = () => {
        console.log("estoy regresando")
        navigate("/cart");
    }



    return (

        <>
            <div className=" bg-background font-body-md text-on-surface organic-texture min-h-screen flex items-center justify-center px-margin-mobile md:px-0">
                <main className="w-full max-w-lg mx-auto">
                    <div className="mx-8">

                    <div className="text-center mb-10 my-8">
                        <H2Title
                            text={TEXTS.textButtonGenericCont} />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-8 md:p-12 ">
                        <div className="space-y-2 mb-8">
                            <label className="font-label-md text-label-md text-on-surface-variant flex items-center gap-2">
                                NOMBRE COMPLETO
                            </label>
                            <input className="w-full bg-surface-container-low border-outline-variant/50 border rounded py-3 px-4 text-on-surface font-body-md form-input-focus transition-all duration-200" placeholder="Ej. Juan Pérez" type="text" />
                        </div>
                        <div className="space-y-2 mb-8">
                            <label className="font-label-md text-label-md text-on-surface-variant">
                                CORREO ELECTRÓNICO
                            </label>
                            <input className="w-full bg-surface-container-low border-outline-variant/50 border rounded py-3 px-4 text-on-surface font-body-md form-input-focus transition-all duration-200" placeholder="email@ejemplo.com" type="email" />
                        </div>
                        <div className="space-y-2 mb-8">
                            <label className="font-label-md text-label-md text-on-surface-variant">
                                TELÉFONO DE CONTACTO
                            </label>
                            <input className="w-full bg-surface-container-low border-outline-variant/50 border rounded py-3 px-4 text-on-surface font-body-md form-input-focus transition-all duration-200" placeholder="+54 9 11 ..." type="tel" />
                        </div>
                        <div className="space-y-2 mb-8">
                            <label className="font-label-md text-label-md text-on-surface-variant">
                                DIRECCIÓN DE ENVÍO
                            </label>
                            <textarea className="w-full bg-surface-container-low border-outline-variant/50 border rounded py-3 px-4 text-on-surface font-body-md form-input-focus transition-all duration-200 resize-none" placeholder="Calle, número, departamento, ciudad..." ></textarea>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 pt-8">
                        <ButtonGeneric
                            text={TEXTS.textButtonGenericRetr}
                            onClick={() => { regresar(), console.log("boton regresar al formulario") }} />

                        <ButtonGeneric
                            text={TEXTS.textButtonGenericCont}
                            onClick={() =>{irA(), console.log("boton al resume")}  } />
                    </div>
                    </div>
                </main>
            </div >
        </>
    )
}

export default Formulario