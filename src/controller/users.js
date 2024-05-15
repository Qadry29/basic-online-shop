import {getDatabase, updateDatabase, createDatabase, checkEmailDatabase, deleteDatabase, loginDatabase} from "../models/users.js";

export const getAllusers = async (req, res) => {
    try {
        const [data] = await getDatabase();
        res.json({
            message: "GET all users success",
            data: data
        })   
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error
        })
    }
};

export const createAllusers = async (req, res) =>{
const {body} = req;
    try {
        const check = await checkEmailDatabase(body.email);
        if (check.length > 0 && check[0].length > 0){
            return res.json({
                message: "email sudah terdaftar"
            });
        } else {
            await createDatabase(body);
            return res.json({
                message: "success add users",
                data: body
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "server error",
            serverMessage: error
        })
    }
};

export const updateUsers = async (req, res) => {
    const {idUsers} = req.params;
    const {body} = req;
    try {
        await updateDatabase(body, idUsers);
        res.json({
            message: "UPDATE users success",
            data: {
                id: idUsers,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error
        })
    }
};

export const deleteUsers = async (req, res) => {
    const {idUsers} = req.params;
    try {
        await deleteDatabase(idUsers)
        res.json({
            message: "DELETE users success",
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error
        })
    }
};

export const loginUsers = async (req, res) => {
    const {body} = req;
    try {
        const result = await loginDatabase(body);

        if (result[0].length > 0) {
            res.json({
                message: "login success"
            })    
        } else {
            res.status(500).json({
                message: "login failed"
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error
        });
    }
}