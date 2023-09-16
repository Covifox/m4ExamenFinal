const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'vhfmadmin23',
    database: 'tienda',
    port: '5432'
});


const crearCategoria = async (req, res) => {
    const { id, nombre, usuario_id } = req.body;
    const response = await pool.query(
        'INSERT INTO categorias(id, nombre, usuario_id) VALUES ($1, $2, $3)', [id, nombre, usuario_id]);
    res.json({
        message: 'Categoria Creada',
        body: {
            user: {id, nombre, usuario_id}
        }
    })
};

const getCategoria = async (req, res) => {
    const response = await pool.query('SELECT * FROM categorias ORDER BY id');
    res.status(200).json(response.rows);
};

const getCategoriaId = async (req, res) => {
    const id = parseInt(req.params.id_categoria);
    const response = await pool.query('SELECT * FROM categorias WHERE id = $1', [id]);
    res.json(response.rows);
};

const actualizarCategoria= async (req, res) => {
    const id = parseInt(req.params.id_categoria);
    const { nombre, usuario_id } = req.body;
   
    const response =await pool.query('UPDATE categorias SET nombre = $1, usuario_id = $2 WHERE id = $3', 
    [nombre, usuario_id, id]);
    res.json('Categoria Actualizada');
};

const eliminarCategoria = async (req, res) => {
    const id = parseInt(req.params.id_categoria);
    await pool.query('DELETE FROM categorias where id = $1', [id]);
    res.json(`Categoria ${id} Borrada`);
};

module.exports = {
    crearCategoria,
    getCategoria,
    getCategoriaId,
    actualizarCategoria,
    eliminarCategoria
  };