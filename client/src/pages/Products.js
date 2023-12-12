import React from 'react'
import ProductBanner from '../components/products/ProductBanner'
import { useSelector } from 'react-redux'
import useProducts from '../hooks/useProducts'
import ProductCard from '../components/shared/ProductCard'

const Products = () => {
    useProducts()
    const products = useSelector(state=>state.product?.productsList);
    console.log(products);

  return (
    <>
        <ProductBanner/>
        <div className="container mx-auto px-4 grid grid-cols-4 gap-3 pb-10">
            {products && products.map((product,i)=>{
                return(
                    <ProductCard productData={product} key={product._id}/>
                )
            })}
        </div>
    </>
  )
}

export default Products