require('dotenv').config()
const app = require('./app')
const db = require('./config/db')

const PORT = process.env.PORT || 3001

db.serialize(()=>{
    //inizialisar las tablas de la base de datos

    app.listen(PORT, ()=>{
        console.log('Servidor ejecutandose en el puerto ', PORT)
    })
})