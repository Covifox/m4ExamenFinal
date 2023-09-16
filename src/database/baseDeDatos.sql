DROP TABLE IF EXISTS usuarios; 
CREATE TABLE usuarios(
id integer NOT NULL,
nombre varchar NOT NULL,
correo varchar,
contrasena varchar,
estado boolean,
PRIMARY KEY(id) 
);

DROP TABLE IF EXISTS categorias; 
CREATE TABLE categorias(
id integer NOT NULL,
nombre varchar NOT NULL,
usuario_id  integer NOT NULL,
PRIMARY KEY(id) 
);

DROP TABLE IF EXISTS productos; 
CREATE TABLE productos(
id integer NOT NULL,
nombre varchar NOT NULL,
precio_initario float,
estado boolean,
categoria_id integer,
usuario_id integer,
PRIMARY KEY(id) 
);

// Usuarios
INSERT INTO usuarios(id, nombre, correo, contrasena, estado)
VALUES (1, 'Victor Flores', 'vhflores@gmail.com', 'abc', TRUE);

INSERT INTO usuarios(id, nombre, correo, contrasena, estado)
VALUES (2, 'Juan Perez', 'jperez@gmail.com', '123', TRUE);

INSERT INTO usuarios(id, nombre, correo, contrasena, estado)
VALUES (3, 'Maria Ramos', 'mramos@gmail.com', '123abc', TRUE);

//Categorias
INSERT INTO categorias(id, nombre, usuario_id)	
VALUES (1, 'LACTEOS', 1);

INSERT INTO categorias(id, nombre, usuario_id)	
VALUES (2, 'PASTAS', 1);

//productos

INSERT INTO productos(id, nombre, precio_initario, estado, categoria_id, usuario_id)
VALUES (1, 'Leche Pil', 6.50, TRUE, 1, 1);

INSERT INTO productos(id, nombre, precio_initario, estado, categoria_id, usuario_id)
VALUES (2, 'Leche Pairumani', 7.50, TRUE, 1, 1);

INSERT INTO productos(id, nombre, precio_initario, estado, categoria_id, usuario_id)
VALUES (3, 'Fideo Rosca', 12, TRUE, 2, 1);

INSERT INTO productos(id, nombre, precio_initario, estado, categoria_id, usuario_id)
VALUES (4, 'Fideo Tallarin', 10, TRUE, 2, 1);
