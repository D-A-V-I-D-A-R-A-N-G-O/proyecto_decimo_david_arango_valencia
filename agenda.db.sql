BEGIN TRANSACTION;

CREATE TABLE "Materia" (
	"id"	INTEGER,
	"nombre"	TEXT NOT NULL,
	"dificultad"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE "Tarea" (
	"id"	INTEGER,
	"descripcion"	TEXT NOT NULL,
	"tipo_tarea_id"	INTEGER NOT NULL,
	"area_materia_id"	INTEGER NOT NULL,
	"fecha_entrega"	TEXT NOT NULL,
	"mi_dificultad"	BLOB,
	"dificultad_por_tipo"	TEXT NOT NULL,
	"tarea_de"	INTEGER NOT NULL,
	"dificultad_materia"	INTEGER,
	"dificultad total"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("area_materia_id") REFERENCES "Materia"("id"),
	FOREIGN KEY("dificultad_por_tipo") REFERENCES "TipoTarea"("dificultad"),
	FOREIGN KEY("mi_dificultad") REFERENCES "Tarea"("nivel_dificultad"),
	FOREIGN KEY("tarea_de") REFERENCES "Usuario"("id"),
	FOREIGN KEY("tipo_tarea_id") REFERENCES "TipoTarea"("id")
);

CREATE TABLE "TipoTarea" (
	"id"	INTEGER,
	"nombre"	TEXT NOT NULL,
	"dificultad"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE Usuario (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
);
COMMIT;
