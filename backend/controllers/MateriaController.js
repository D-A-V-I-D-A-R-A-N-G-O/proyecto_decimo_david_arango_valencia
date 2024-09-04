const Materia = require('.../models/modelmaterias')

exports.crearMateria = (req, res) => {
    const {nombre, dificultad} = req.body
    Materia.crearMateria(nombre, dificultad, (err)=>{
        if (err) {
            res.status(500).send({message: 'Error al crear la materia'});
        } else {
            res.status(201).send({message: 'Materia creada de forma exitosa'});
        }

    });
};