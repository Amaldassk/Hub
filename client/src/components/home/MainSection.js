import { useEffect } from "react";
import BannerSection from "./BannerSection";
import ProductsSection from "./ProductsSection";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";

const MainSection = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts());
    },[]);

    return(
        <>
        <BannerSection/>
        <ProductsSection/>
        </>
    )
}

export default MainSection;