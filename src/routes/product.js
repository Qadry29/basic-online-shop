import express from "express";
import {getProduct, createProduct, updateProduct, deleteProduct, paymentProduct} from "../controller/product.js";

const routerProduct = express.Router();

//GetProduct
routerProduct.get('/', getProduct);
//CreateProduct
routerProduct.post('/',createProduct);
//UpdateProduct
routerProduct.patch('/:idUser',updateProduct);
//DeleteProduct
routerProduct.delete('/:idUser', deleteProduct);
//Payment
routerProduct.post('/payment',paymentProduct);

export {routerProduct};