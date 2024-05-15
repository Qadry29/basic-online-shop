import dbPool from "../config/database.js";

export const getDatabase = (page, pageSize) => {
    const offset = (page - 1)* pageSize;
    const SQLQuery = `SELECT * FROM product LIMIT ${offset}, ${pageSize}`;

    return dbPool.execute(SQLQuery);
}
export const createDatabase = (body) => {
    const SQLQuery = `INSERT INTO product (name, price) VALUE ('${body.name}', ${body.price})`;

    return dbPool.execute(SQLQuery);
}

export const updateDatabase = (body, idUser) => {
    const SQLQuery = `UPDATE product SET name='${body.name}', price=${body.price} WHERE product_id='${idUser}'`;

    return dbPool.execute(SQLQuery);
}

export const deleteDatabase = (idUser) => {
    const SQLQuery = `DELETE FROM product WHERE product_id=${idUser}`;

    return dbPool.execute(SQLQuery);
}

export const paymentDatabase = (body) => {
    const SQLQuery = `INSERT INTO payment (name, price) VALUE ('${body.name}', ${body.price})`;

    return dbPool.execute(SQLQuery);
}