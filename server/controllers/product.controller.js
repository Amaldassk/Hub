import productModel from "../models/product.model.js"

const createProduct = async(req, res) => {
    try{
        const newProduct = await productModel.create(req.body);
        res.json(newProduct);
    } catch(err){
        throw new Error(err);
    }
}

const getProduct = async(req, res) => {
    const id = req.params.id;
    try{
        const getAProduct = await productModel.findById(id);
        res.json(getAProduct);
    } catch(err){
        throw new Error(err);
    }
}

const getAllProducts = async(req, res) => {
    try{
        const getProducts = await productModel.find();
        res.json(getProducts);
    } catch(err){
        throw new Error(err);
    }
}

const deleteProduct = async(req, res) => {
    const {id} = req.body;
    try{
        const deleteProduct = await productModel.findByIdAndDelete(id);
        res.json(deleteProduct);
    } catch(err){
        throw new Error(err);
    }
}

const updateProduct = async() => {
    const {id} = req.body;
    try{
        const updateProduct = await productModel.findByIdAndUpdate(id. req.body,{new:true});
        res.json(updateProduct);
    } catch(err){
        throw new Error(err);
    }
}

export {createProduct, getProduct, getAllProducts, deleteProduct, updateProduct}