import { TEXTS } from "../../constants/texts"
import IconNavBar from "../atoms/IconNavBar"
import TextNavBar from "../atoms/TextNavBar"
import TitleNavBar from "../atoms/TitleNavBar"



const NavBar = () => {
    return (
        <>
            <div className="flex flex-row">
                <div className="basis-1/4">
                    <TitleNavBar text={TEXTS.textTitleNavBar} />
                </div>
                <div className="basis-2/4">
                    <TextNavBar text={TEXTS.textNavBar} />
                </div>
                <div className="basis-1/4">
                    <IconNavBar />
                </div>
            </div>
        </>

    )
}

export default NavBar