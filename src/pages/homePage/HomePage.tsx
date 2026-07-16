
import { productosMocks } from "@/constants/mocks/products.mocks";
import Hero from "../../components/organisms/Hero";
import ProductGrid from "../../components/organisms/ProductGrid";


const HomePage = () => {

const productHome = productosMocks
console.log(productHome)

  return (
    <>
        <Hero />
        <ProductGrid productList = {productHome} />  {/*Aquí aparece Peter Service, Home le dive que lleve la caja/sobre con el array de objetos a Grid*/}
    </>
  )
}

export default HomePage;