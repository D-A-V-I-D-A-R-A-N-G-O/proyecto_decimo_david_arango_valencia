
CREATE TABLE Usuario (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    nombre TEXT NOT NULL,

    email TEXT NOT NULL UNIQUE

);



-- Creación de la tabla TipoTarea

CREATE TABLE TipoTarea (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    nombre TEXT NOT NULL

);



-- Creación de la tabla Materia

CREATE TABLE Materia (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    nombre TEXT NOT NULL

);



-- Creación de la tabla Tarea

CREATE TABLE Tarea (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    descripcion TEXT NOT NULL,

    tipo_tarea_id INTEGER NOT NULL,

    area_materia_id INTEGER NOT NULL,

    fecha_entrega TEXT NOT NULL, 

    nivel_dificultad INTEGER,

    tiempo_estimado REAL NOT NULL,

    prioridad REAL,

    FOREIGN KEY (tipo_tarea_id) REFERENCES TipoTarea(id),

    FOREIGN KEY (area_materia_id) REFERENCES Materia(id)

);



-- Creación de la tabla EncuestaDificultad

CREATE TABLE EncuestaDificultad (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    tarea_id INTEGER NOT NULL,

    usuario_id INTEGER NOT NULL,

    nivel_dificultad INTEGER, 

    FOREIGN KEY (tarea_id) REFERENCES Tarea(id),

    FOREIGN KEY (usuario_id) REFERENCES Usuario(id)

);
