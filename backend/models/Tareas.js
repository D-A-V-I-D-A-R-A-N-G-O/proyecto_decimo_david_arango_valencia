const db = require ('.../config/db')

const crearTarea = (descripcion, mi_dificultad, area_materia_id, tipo_tarea_id, fecha_entrega, dificultad_total, callback)=> {
    const db = 'INSERT INTO Tarea(descripcion, mi_dificultad, area_materia_id, tipo_tarea_id, fecha_entrega, dificultad_total) VALUES (?, ?, ?, ?, ?, ?)'
    return sql.run(sql, [descripcion, mi_dificultad, area_materia_id, tipo_tarea_id, fecha_entrega, dificultad_total], callback)
}
const CallAllTarea = (descripcion, mi_dificultad, area_materia_id, tipo_tarea_id, fecha_entrega, dificultad_total, callback)=>{
    const db = 'SELECT*FROM Tarea'
    return sql.run(sql, [descripcion, mi_dificultad, area_materia_id, tipo_tarea_id, fecha_entrega, dificultad_total], callback)
}
const CallTareaById = (id, callback) => {
    const db = 'SELECT*FROM Tarea WHERE Tarea.id=?'
    return sql.run(sql, [id], callback)
}
const UpdateTarea = (descripcion, mi_dificultad, area_materia_id, tipo_tarea_id, fecha_entrega, dificultad_total, id, callback) =>{
    const db = 'UPDATE Tarea SET descripcion = ?, mi_dificultad = ?, area_materia_id = ?, tipo_tarea_id = ?, fecha_entrega = ?, dificultad_total = ? WHERE id = ?'
    return sql.run(sql, [descripcion, mi_dificultad, area_materia_id, tipo_tarea_id, fecha_entrega, dificultad_total, id], callback)
}
const deleteTarea = (id, callback) => {
    const sql = 'DELETE FROM Tarea WHERE Tarea.id = ?'
    return db.run(sql, [id], callback)
}
    module.exports = {
    crearTarea,
    CallAllTarea,
    CallTareaById,
    UpdateTarea,
    deleteTarea
}