import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import useProducts from "../../hooks/useProducts";
import ProductListing from "./ProductListing";

const ProductDashboard = () => {

    useProducts();

    return(
        <div className="container mx-auto px-4">
            <div className="flex justify-between my-2 p-2 items-center mt-3">
                <h3 className="text-xl">Products</h3>
                <button className="inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none sm:ml-3 sm:w-auto sm:text-sm bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Add product</button>
            </div>
            <ProductListing/>
        </div>
    )
}

export default ProductDashboard;