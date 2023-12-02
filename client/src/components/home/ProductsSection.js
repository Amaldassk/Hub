import { useSelector } from "react-redux";
import ProductCard from "../shared/ProductCard";

const ProductsSection = () => {

    const products = useSelector(state=>state.product?.productsList);
    console.log("products section",products);

    return(
        <>
        <div className="container mx-auto px-4">
            <div className="pt-28 pb-10">
                <h3 className="uppercase text-4xl text-ksC2">Current top<br/> sellers</h3>
            </div>
            <div className="grid grid-cols-3 gap-3 pb-20">
                {products[0] && products[0].map((product,i)=>{
                    return(
                        <ProductCard productData={product}/>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default ProductsSection;