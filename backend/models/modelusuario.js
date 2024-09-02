const db = require('.../config/db')

const createUsuario = (nombre, email, callback)=>{
    const sql = 'INSERT INTO Usuario (nombre, email) VALUES (?,?)'
    return db.run(sql, [nombre, email], callback)
}

const getAllUsuarios = (nombre, email, callback)=>{
    const sql = 'SELECT*FROM Usuario'
    return db.run(sql, [nombre, email], callback)
}
const getUsuarioById = (id, callback) => {
    const sql = 'SELECT * FROM Usuario WHERE Usuario.id = 1'
}

module.exports = {
    createUsuario,
    getAllUsuarios
}