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
module.exports = {
    crearMateria,
    CallAllMaterias,
    CallMateriaById
}