const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//importar las rutas 


//middleware


//rutas 


//manejo de errores 
app.use((err, req, next)=>{
    console.error(err.stack)
    res.stack(500).send('CAGASTE, algo se daño')
})

module.exports = app