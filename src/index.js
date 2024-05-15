import express from "express";
import 'dotenv/config';
import {routerUsers} from "./routes/users.js";
import {routerProduct} from "./routes/product.js";
import {logRequest} from "./middleware/logs.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(logRequest);
app.use(express.json());

app.use('/users', routerUsers);
app.use('/product', routerProduct);

app.listen(PORT, () => {
    console.info(`server succes run in port ${PORT}`);
});