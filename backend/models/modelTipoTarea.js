const db = require ('.../config/db')

const crealTipoTarea = (nombre, dificultad, callback)=> {
    const db = 'INSERT INTO TipoTarea(nombre, dificultad) VALUES (?, ?)'
    return sql.run(sql, [nombre, dificultad], callback)
}
const CallAllTipoTarea = (nombre, dificultad, callback)=>{
    const db = 'SELECT*FROM TipoTarea'
    return sql.run(sql, [nombre, dificultad], callback)
}
const CallTipoTareaById = (id, callback) => {
    const db = 'SELECT*FROM TipoTarea WHERElTipoTarea.id=?'
    return sql.run(sql, [id], callback)
}
const UpdatlTipoTarea = (nombre, dificultad, id, callback) =>{
    const db = 'UPDATE Usuario SET nombre = ?, dificultad = ? WHERE id = '
    return sql.run(sql, [nombre, dificultad, id], callback)
}
const deletlTipoTarea = (id, callback) => {
    const sql = 'DELETE FROM TipoTarea WHERE Usuario.id = ?'
    return db.run(sql, [id], callback)
}
    module.exports = {
    crealTipoTarea,
    CallAllTipoTarea,
    CallTipoTareaById,
    UpdatlTipoTarea,
    deletlTipoTarea
}