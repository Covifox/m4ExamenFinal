const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'vhfmadmin23',
    database: 'tienda',
    port: '5432'
});

const crearUsuario = async (req, res) => {
    const { id, nombre, correo, contrasena, estado } = req.body;
    const response = await pool.query(
        'INSERT INTO usuarios(id, nombre, correo, contrasena, estado) VALUES ($1, $2, $3, $4, $5)', [id, nombre, correo, contrasena, estado]);
    res.json({
        message: 'Usuario Creado',
        body: {
            user: {id, nombre, correo, contrasena, estado}
        }
    })
};

const getUsuarios = async (req, res) => {
    const response = await pool.query('SELECT * FROM usuarios ORDER BY id');
    res.status(200).json(response.rows);
};

const getUsuariosId = async (req, res) => {
    const id = parseInt(req.params.id_usuario);
    const response = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);
    res.json(response.rows);
};

const actualizarUsuario = async (req, res) => {
    const id = parseInt(req.params.id_usuario);
    const { nombre, correo, contrasena, estado } = req.body;
   
    const response =await pool.query('UPDATE usuarios SET nombre = $1, correo = $2, contrasena = $3, estado = $4 WHERE id = $5', 
    [nombre, correo, contrasena, estado, id]);
    res.json('Usuario Actualizado');
};

const eliminarUsuario = async (req, res) => {
    const id = parseInt(req.params.id_usuario);
    await pool.query('DELETE FROM usuarios where id = $1', [id]);
    res.json(`Usuario ${id} Borrado`);
};

module.exports = {
    crearUsuario,
    getUsuarios,
    getUsuariosId,
    actualizarUsuario,
    eliminarUsuario,
  };