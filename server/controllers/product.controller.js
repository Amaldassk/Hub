import productModel from "../models/product.model.js"

const createProduct = async(req, res) => {
    const {id} = req.params
    try{
        const newProduct = await productModel.create(req.body);
        res.json(newProduct);
    } catch(err){
        throw new Error(err);
    }
}

const getProduct = async() => {
    try{
        const getAProduct = await productModel.findById(id);
        res.json(getAProduct);
    } catch(err){
        throw new Error(err);
    }
}

const getAllProducts = async() => {
    try{
        const getProducts = await productModel.find();
        res.json(getAllProducts);
    } catch(err){
        throw new Error(err);
    }
}

const deleteProduct = async() => {

}

const updateProduct = async() => {

}

export {createProduct, getProduct, getAllProducts, deleteProduct, updateProduct}