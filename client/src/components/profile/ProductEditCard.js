import { useState } from "react";
import AddProductModal from "../modals/AddProductModal";
import { Link } from "react-router-dom";

const ProductEditCard = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div className="rounded-md border bg-white p-6 basis-6/12">
            <div className="flex flex-col items-center justify-between">
                <div className="flex flex-col items-center justify-center">

                    <div>
                        <div className="text-sm font-semibold text-gray-700 hover:underline">
                            <Link onClick={handleOpenModal}>Add Product</Link>
                            <AddProductModal isOpen={isModalOpen} onClose={handleCloseModal}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductEditCard;