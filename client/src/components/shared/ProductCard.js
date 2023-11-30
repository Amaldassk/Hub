const ProductCard = ({productData}) => {

    const {productName, price, material} = productData;

    return(
        <div className="prod-card flex relative">
            <div>
                <img src="https://manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/10/home-7-product-list-img-03.jpg" alt="test"/>
            </div>
            <div className="absolute bottom-5 left-5">
                <div className="flex items-center mb-3">
                    <span className="text-ksC1 text-lg">$ {price}</span>
                </div>
                <h6 className="font-ksN text-xl text-white uppercase">{productName}</h6>
                <span className="font-ksN text-xl text-white uppercase">{material}</span>
            </div>
        </div>
    )
}

export default ProductCard;