import { useNavigate } from "react-router"
import { TEXTS } from "../../constants/texts"
import H2Title from "../atoms/H2Title"
import Parrafo1 from "../atoms/Parrafo1"
import ResumeCard from "../molecules/ResumeCard"
import ButtonGeneric from "../atoms/ButtonGeneric"


const ResumeCart = () => {

  const navigate = useNavigate();
  const irA = () => {
    console.log("terminar compra y pagar flow")
    navigate("/congratulation");

  }

  const regresar = () => {
    console.log("estoy regresando al form")
    navigate("/cart");
  }


  return (
    <>
      <div className="font-body-md text-body-md overflow-x-hidden">
        <main className="relative z-10 min-h-screen flex flex-col items-center px-margin-mobile md:px-margin-desktop py-12">
          <div className="w-full max-w-2xl">

            <div className="mb-12 text-center my-8">
              <Parrafo1
                text={TEXTS.textResumeText} />
              <H2Title
                text={TEXTS.titleResumePage} />
            </div>
            <div className="grid grid-cols-1 gap-8 ">
              <section className="bg-gray-100 mx-8 bg-surface-container-low  p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-6">

                  <H2Title
                    text={TEXTS.textTitleResumeFile} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                  <div className="space-y-1 mb-8">
                    <p className="font-label-md text-label-md text-secondary opacity-70 uppercase">Nombre Completo</p>
                    <p className="font-body-lg text-body-lg text-on-surface">Julián Rodríguez</p>
                  </div>
                </div>
                <div className="space-y-1 mb-8">
                  <p className="font-label-md text-label-md text-secondary opacity-70 uppercase">Correo Electrónico</p>
                  <p className="font-body-lg text-body-lg text-on-surface">julian.rodriguez@example.com</p>
                </div>
                <div className="space-y-1 mb-8">
                  <p className="font-label-md text-label-md text-secondary opacity-70 uppercase">Teléfono</p>
                  <p className="font-body-lg text-body-lg text-on-surface">+54 9 11 1234-5678</p>
                </div>
                <div className="space-y-1 mb-8">
                  <p className="font-label-md text-label-md text-secondary opacity-70 uppercase">Dirección de Entrega</p>
                  <p className="font-body-lg text-body-lg text-on-surface">Av. Santa Fe 1234, CABA</p>
                </div>
              </section>

              <section className=" bg-gray-100 mx-8 bg-surface-container-lowest p-4 rounded-lg">

                <div className="flex items-center gap-3 mb-6">
                  <H2Title text={TEXTS.textPedido} />
                </div>
                <ResumeCard />
                <div className="mt-8 space-y-3">

                  <div className="flex justify-between text-secondary">
                    <Parrafo1 text={TEXTS.textResume2} />
                    <Parrafo1 text={"**sub total**"} />
                  </div>
                  <div className="flex justify-between text-secondary">
                    <Parrafo1 text={TEXTS.textResumeEnvio} />
                    <Parrafo1 text={"**XXX**"} />
                  </div>

                  <div className="flex justify-between pt-4 mt-4 border-t border-outline-variant/50">
                    <Parrafo1 text={TEXTS.textTotalFin} />
                    <p className="font-headline-md text-headline-md text-primary">$10.000</p>
                  </div>

                </div>
              </section>
              <div className="flex flex-col md:flex-row gap-4 pt-8 p-8 ">
                <ButtonGeneric
                  text={TEXTS.textButtonGenericRetr}
                  onClick={() => { regresar(), console.log("boton regresar al formulario") }} />

                <ButtonGeneric
                  text={TEXTS.textButtonGenericCont}
                  onClick={() => { irA(), console.log("ir al flow") }} />
              </div>
            </div>
          </div >
        </main >












      </div >











    </>
  )
}

export default ResumeCart