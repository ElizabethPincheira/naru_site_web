import IconNavBar from "../atoms/IconNavBar"
import TextNavBar from "../atoms/textNavBar"
import TitleNavBar from "../atoms/TitleNavBar"



const NavBar = () => {
    return (
        <>
            <div className="flex flex-row">
                <div className="basis-1/4">
                    <TitleNavBar />
                </div>
                <div className="basis-2/4">
                    <TextNavBar />
                </div>
                <div className="basis-1/4">
                    <IconNavBar />
                </div>
            </div>
        </>

    )
}

export default NavBar