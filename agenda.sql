
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
CREATE TABLE  "Tarea" (
	"id"	INTEGER,
	"descripcion"	TEXT NOT NULL,
	"tipo_tarea_id"	INTEGER NOT NULL,
	"area_materia_id"	INTEGER NOT NULL,
	"fecha_entrega"	TEXT NOT NULL,
	"mi_dificultad"	INTEGER,
	"dificultad_por_tipo"	INTEGER NOT NULL,
	"dificultad total"	INTEGER,
	"dificultad_por_materia"	INTEGER,
	FOREIGN KEY("area_materia_id") REFERENCES "Materia"("id"),
	FOREIGN KEY("mi_dificultad") REFERENCES "Tarea"("nivel_dificultad"),
	FOREIGN KEY("dificultad_por_materia") REFERENCES "Materia"("dificultad"),
	FOREIGN KEY("tipo_tarea_id") REFERENCES "TipoTarea"("id"),
	FOREIGN KEY("dificultad_por_tipo") REFERENCES "TipoTarea"("dificultad"),
	PRIMARY KEY("id" AUTOINCREMENT)
);
