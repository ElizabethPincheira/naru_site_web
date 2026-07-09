import { TEXTS } from "../../constants/texts"
import H2Title from "../atoms/H2Title"


const Formulario = () => {
    return (

        <>
            <body className="bg-background font-body-md text-on-surface organic-texture min-h-screen flex items-center justify-center px-margin-mobile md:px-0">
                <main className="w-full max-w-lg mx-auto py-12">
                    <div className="text-center mb-10 my-8">
                        <H2Title
                            text={TEXTS.textButtonGenericCont} />
                      
                    </div>











                </main>
            </body>
        </>
    )
}

export default Formulario