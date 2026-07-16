import type { ProductGridProps } from "@/models/product.model";
import { TEXTS } from "../../constants/texts"
import H2Title from "../atoms/H2Title"; 
import Card from "../molecules/Card";

const ProductGrid = ({productList}: ProductGridProps ) => {
console.log(productList)

    return (
        <>
            <section className="px-15 my-5 py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="productos">
                <div className="flex flex-col md:flex-row justify-center text-center mb-12 gap-4">
                    <H2Title
                        text={TEXTS.textTitleProductGrid}
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-15">
                    {
                        productList.map((macetero) => (
                            <Card
                                key={macetero.id}
                                maceteroCard={macetero}
                            />
                        ))
                    }
                </div>
            </section>
        </>
    );
};


export default ProductGrid