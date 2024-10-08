
CREATE TABLE "TipoTarea" (
	"id"	INTEGER,
	"nombre"	TEXT NOT NULL,
	"dificultad"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE "Materia" (
	"id"	INTEGER,
	"nombre"	TEXT NOT NULL,
	"dificultad"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE "Usuario" (
	"id"	INTEGER,
	"nombre"	TEXT NOT NULL,
	"email"	TEXT NOT NULL UNIQUE,
	"tareas"	INTEGER,
	FOREIGN KEY("tareas") REFERENCES "Tarea"("id"),
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE "Tarea" (
	"id"	INTEGER,
	"descripcion"	TEXT NOT NULL,
	"tipo_tarea_id"	INTEGER NOT NULL,
	"area_materia_id"	INTEGER NOT NULL,
	"fecha_entrega"	TEXT NOT NULL,
	"mi_dificultad"	INTEGER CHECK("mi_dificultad" > 0 AND "mi_dificultad" < 11),
	"dificultad_total"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("area_materia_id") REFERENCES "Materia"("id"),
	FOREIGN KEY("tipo_tarea_id") REFERENCES "TipoTarea"("id")
);
