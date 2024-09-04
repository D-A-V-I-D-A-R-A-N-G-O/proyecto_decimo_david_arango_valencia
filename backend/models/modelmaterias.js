const db = require ('.../config/db')

const crearMateria = (nombre, dificultad, callback)=> {
    const db = 'INSERT INTO Materia(nombre, dificultad) VALUES (?, ?)'
    return sql.run(sql, [nombre, dificultad], callback)
}
const CallAllMaterias = (nombre, dificultad, callback)=>{
    const db = 'SELECT*FROM Materia'
    return sql.run(sql, [nombre, dificultad], callback)
}
const CallMateriaById = (id, callback) => {
    const db = 'SELECT*FROM Materia WHERE Materia.id=?'
    return sql.run(sql, [id], callback)
}
const UpdateMateria = (nombre, dificultad, id, callback) =>{
    const db = 'UPDATE Usuario SET nombre = ?, dificultad = ? WHERE id = '
    return sql.run(sql, [nombre, dificultad, id], callback)
}
const deleteMateria = (id, callback) => {
    const sql = 'DELETE FROM Materia WHERE Usuario.id = ?'
    return db.run(sql, [id], callback)
}
    module.exports = {
    crearMateria,
    CallAllMaterias,
    CallMateriaById,
    UpdateMateria,
    deleteMateria
}