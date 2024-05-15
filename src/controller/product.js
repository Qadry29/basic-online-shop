import {getDatabase, createDatabase, updateDatabase, deleteDatabase, paymentDatabase} from "../models/product.js";

export const getProduct = async (req, res) => {
    const page = req.query.page || 1;
    const pageSize = 10;
    try {
        const [data] = await getDatabase(page, pageSize);
        res.json({
            message: 'product',
            currentPage: page,
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error
        })
    }
};

export const createProduct = async (req, res) => {
    const {body} = req;
    try {
        await createDatabase(body);
        res.json({
            message: "success add product",
            data: body
        })

    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error
        })
    }
};

export const updateProduct = async (req, res) => {
    const {idUser} = req.params;
    const {body} = req;
    try {
        await updateDatabase (body, idUser);
        res.json({
            message: 'update product success',
            data: {
                id: idUser,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error
        })
    }
};

export const deleteProduct = async (req, res) => {
    const {idUser} = req.params;
    try {
        await deleteDatabase(idUser);
        res.json({
            message: 'delete product success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error
        })
    }
};

export const paymentProduct = async (req, res) => {
    const {body} = req;
    try {
        await paymentDatabase(body);
        res.json({
            message: "payment success",
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: "server error",
            serverMessage: error
        })
    }
};