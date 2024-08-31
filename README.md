# Modelo Entidad Relacional para mi proyecto 
## Integrantes / Autor
    David Arango Valencia 👾
## materia
    id(PK): el identificado unico de la materia
    nombre(FK): el nombre de la materia, a de ser texto
    dificultad(FK); un nivel de dificultad numerico del 1 al 10, para poder promediarlos con las demas dificultades
## Tarea
    id(PK): el identificador unico de la materia
    descripcion: descripcion de lo que se debe hacer en la tarea.(texto)
    tipo_tarea_id: el id o el nombre del tipo de la tarea(panfleto, expocición, taller, etc.)(numerico)
    area_materia_id: el area o la materia al la que pertenese la tarea.(numerico)
    fecha_entrega: cuando tiene que entregar la tarea.(alfanumerico)
    mi_dificultad: la dificultad que se le asigna a la tarea por persona.(numerico)
    dificultad total: en este campo se pone la dificultad total(promedio de las otras 3), para poder ordenarlo en el ranking. (numerico)
##tipotarea
    
