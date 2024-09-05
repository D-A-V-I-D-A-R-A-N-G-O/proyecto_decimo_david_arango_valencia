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

exports.CallAllMateria = (req, res) => {
    const {nombre, dificultad} = req.body
    Materia.CallAllMateriad((err, rows)=>{
        if (err) {
            res.status(500).send({message: 'Error al llamar las materias'});
        } else {
            res.status(200).json(rows);
        }

    });
}

exports.CallMateriaById = (req, res) => {
    const id = req.params.id;
    Materia.CallMateriaById(id, (err, row) => {
        if (err) { 
            res.status(500).send({ message: 'Error al obtener la materia' });
        } else { res.status(200).json(row); 

        }
    }); 
}; I