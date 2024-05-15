import dbPool from "../config/database.js"

// menampilkan data
export const getDatabase = () => {
    const SQLQuery = 'SELECT * FROM users';
    
    return dbPool.execute(SQLQuery);
}

// cek dan buat data
export const checkEmailDatabase = (email) => {
    const SQLQuery = `SELECT * FROM users WHERE email= ?`;

    return dbPool.execute(SQLQuery, [email]);
}

export const createDatabase = (body) => {
    const {name, email, pass} = body;
    const SQLQuery = `INSERT INTO users (name, email, pass) VALUE (?, ?, ?)`;
        
    return dbPool.execute(SQLQuery, [name, email, pass]);
}

export const updateDatabase = (body, idUser) => {
    const SQLQuery = `UPDATE users SET name='${body.name}', email='${body.email}', pass='${body.pass}' WHERE users_id='${idUser}'`

    return dbPool.execute(SQLQuery);
}

export const deleteDatabase = (idUser) => {
    const SQLQuery = `DELETE FROM users WHERE users_id=${idUser}`;

    return dbPool.execute(SQLQuery);
}

export const loginDatabase = (body) => {
    const {email, pass } = body;
    const SQLQuery = `SELECT * FROM users WHERE email = ? AND pass = ? `;

    return dbPool.execute(SQLQuery, [email, pass]);
}