import productModel from "../models/product.model.js"

const createProduct = async(req, res) => {
    try{
        const newProduct = await productModel.create(req.body);
        res.json(newProduct);
    } catch(err){
        throw new Error(err);
    }
}

const getProduct = async() => {

}

const getAllProducts = async() => {

}

const deleteProduct = async() => {

}

const updateProduct = async() => {

}

export {createProduct, getProduct, getAllProducts, deleteProduct, updateProduct}