import React from 'react'
import { Link } from "react-router-dom";
import Banner from '../../assets/banner.jpg';

const ProductBanner = () => {
  return (
    <div className='relative overflow-hidden h-[400]'>
        <div className='before:bg-black before:opacity-40 before:absolute before:top-0 before:left-0 before:w-full before:h-full'>
            <img src={Banner} alt="KS Industries"/>
        </div>
        <div className='intro-layer absolute top-1/2 left-[10%] transform -translate-y-1/2 w-full text-left'>
            <h3 className='capitalize tracking-wider text-white m-0 text-6xl font-ksA leading-relaxed'>Our Products</h3>
            <h2 className='tracking-wider text-white m-0 text-2xl font-ksN'><Link to="/">Home</Link> / <span className='text-ksC2'>Products</span></h2>
        </div>
    </div>
  )
}

export default ProductBanner