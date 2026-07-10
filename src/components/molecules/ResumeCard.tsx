import ImageCard from "../atoms/ImageCard"
import Parrafo1 from "../atoms/Parrafo1"


const ResumeCart = () => {


    return (
        <>
            <div className="flex items-center gap-6 p-4 border border-outline-variant/30 rounded-lg bg-surface-container-lowest transition-transform hover:scale-[1.01]">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-surface-container shrink-0 overflow-hidden rounded">
                    <ImageCard />
                </div>
                <div className="grow flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <Parrafo1
                            text="**Titulo**"
                        />
                        <Parrafo1
                            text="**Titulo**"
                        />

                        <Parrafo1
                            text="**Descripcion**"
                        />

                        <div className="mt-2 flex items-center gap-2">
                            <Parrafo1
                                text="**Cantidad **"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">

                        <Parrafo1
                            text="**Precio**" />
                    </div>
                
                </div>
                

            </div>
            


        </>
    )
}

export default ResumeCart