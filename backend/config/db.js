const sqlite3 = require('sqlite3').verbose
const path = require('path')

//ruta a la db
const dbpath = path.resolve(__dirname, '../database/agenda.db')
//coneccion a la base de datos
const db = new sqlite3.Database(dbpath, (err)=>{
    if (err) {
        console.log('error al abrir la base de datos ❌🛢️: ', err)
    } else{
        console.log('conexion exitosa 🛢️✅')
    }
})

module.exports = db