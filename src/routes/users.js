import express from "express";
import {getAllusers, createAllusers, updateUsers, deleteUsers, loginUsers} from "../controller/users.js";

const routerUsers = express.Router();

//Create_Post
routerUsers.post('/', createAllusers);
//Read_Get
routerUsers.get('/', getAllusers);
//Update_Patch
routerUsers.patch('/:idUsers', updateUsers);
//Delete_Delete
routerUsers.delete('/:idUsers', deleteUsers)
//login_Post
routerUsers.post('/login',loginUsers);

export {routerUsers};