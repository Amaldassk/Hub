import { useEffect } from "react";
import BannerSection from "./BannerSection";
import ProductsSection from "./ProductsSection";
import useProducts from "../../hooks/useProducts";

const MainSection = () => {
 
    useProducts();

    return(
        <>
        <BannerSection/>
        <ProductsSection/>
        </>
    )
}

export default MainSection;