import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import CommonLoading from '../loader/CommonLoading';
import { MdOutlineDeleteForever } from "react-icons/md";
import DeleteProductmodal from '../modals/DeleteProductmodal';

const ProductListing = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productId, setProductId] = useState('');

    const products = useSelector(state=>state.product?.productsList);
    console.log(products,"ppppppppppppppppppppp");

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    const handleDeleteClick = (id) => {
        setProductId(id);
        setIsModalOpen(true);
    }

  if(!products) return <CommonLoading/>

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden dark:bg-slate-800/25">
        <table className="border-collapse table-auto w-full text-sm">
            <thead>
                <tr>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-2 pb-3 text-slate-400 dark:text-slate-200 text-left"></th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-2 pb-3 text-slate-400 dark:text-slate-200 text-left">Product Name</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-2 pb-3 text-slate-400 dark:text-slate-200 text-left">Gauge</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-2 pb-3 text-slate-400 dark:text-slate-200 text-left">Powder Coated</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-2 pb-3 text-slate-400 dark:text-slate-200 text-left">Color</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-2 pb-3 text-slate-400 dark:text-slate-200 text-left">Price</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-2 pb-3 text-slate-400 dark:text-slate-200 text-left">Size</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-2 pb-3 text-slate-400 dark:text-slate-200 text-left"></th>
                </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-800">
                {products && products.map((product,i)=>{
                    return(
                        <tr key={product._id}>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"><img className="h-10 w-10 rounded-md object-cover" src={product.images[0]} alt=""/></td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{product.productName}</td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{product.gauge}</td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{product.powderCoated}</td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{product.color}</td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{product.price}</td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{product.size}</td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                                <MdOutlineDeleteForever className='cursor-pointer hover:text-blue-500 text-lg' onClick={()=>handleDeleteClick(product._id)}/>
                                <DeleteProductmodal isOpen={isModalOpen} onClose={handleCloseModal} productId={productId}/>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default ProductListing