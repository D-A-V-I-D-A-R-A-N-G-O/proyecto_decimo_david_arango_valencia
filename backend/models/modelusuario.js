const db = require('.../config/db')

const createUsuario = (nombre, email, tareas, callback)=>{
    const sql = 'INSERT INTO Usuario (nombre, email, tareas) VALUES (?,?,?)'
    return db.run(sql, [nombre, email, tareas], callback)
}

const getAllUsuarios = (nombre, email, tareas, callback)=>{
    const sql = 'SELECT*FROM Usuario'
    return db.run(sql, [nombre, email, tareas], callback)
}
const getUsuarioById = (id, callback) => {
    const sql = 'SELECT * FROM Usuario WHERE Usuario.id = ?'
    return db.run(sql, [id], callback)
}
const UpdateUsuario = (id, nombre, email, tareas, callback)=> {
    const sql = 'UPDATE Usuario SET nombre = ?, email = ?, tareas=? WHERE id = ?'
    return db.run(sql, [id, nombre, email, tareas], callback)
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