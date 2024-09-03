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
    const sql = 'SELECT * FROM Usuario WHERE Usuario.id = ?'
    return db.run(sql, [id], callback)
}
const UpdateUsuario = (id, nombre, email, callback)=> {
    const sql = 'UPDATE Usuario SET nombre = ?, email = ? WHERE id = ?'
    return db.run(sql, [id, nombre, email], callback)
}
const deleteUsuario = (id, callback) => {
    const sql = 'DELETE FROM Usuario WHERE Usuario.id = ?'
    return db.run(sql, [id], callback)
}

module.exports = {
    createUsuario,
    getAllUsuarios,
    getAllUsuarios,
    UpdateUsuario,
    deleteUsuario
}