const ProductCard = ({productData}) => {

    const {productName, price, material} = productData;

    return(
        <div className="prod-card flex relative flex-wrap justify-center">
            <div>
                <img src="https://indusri.wpengine.com/wp-content/uploads/2023/08/shop-11.1.webp" alt="test"/>
            </div>
            <div className="relative bottom-5 left-5 text-center">
                <div className="flex items-center mb-3 justify-center pt-8">
                    <span className="text-ksC1 text-lg">$ {price}</span>
                </div>
                <h6 className="font-ksN text-xl text-ksC4 capitalize font-semibold">{productName}</h6>
                <span className="font-ksN text-base text-ksC4 capitalize">{material}</span>
            </div>
        </div>
    )
}

export default ProductCard;