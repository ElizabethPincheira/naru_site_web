import { TEXTS } from "../../constants/texts"
import TitleProductGrid from "../atoms/TitleProductGrid"
import Card from "../molecules/Card"


const ProductGrid = () => {
    return (
        <>
            <TitleProductGrid
                text={TEXTS.textTitleProductGrid}
            />
            <Card />
        </>
    );
};


export default ProductGrid