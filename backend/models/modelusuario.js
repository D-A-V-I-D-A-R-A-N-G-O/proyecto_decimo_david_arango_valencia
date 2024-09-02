const db = require('.../config/db')

const createUsuario = (nombre, email, callback)=>{
    const sql = 'INSERT INTO Usuario (nombre, email) VALUES (?,?)'
    return db.run(sql, [nombre, email], callback)
}

module.exports = {
    createUsuario 
}