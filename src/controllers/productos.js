const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'vhfmadmin23',
    database: 'tienda',
    port: '5432'
});

const crearProducto = async (req, res) => {
    const { id, nombre, precio_initario, estado, categoria_id, usuario_id } = req.body;
    const response = await pool.query(
        'INSERT INTO productos(id, nombre, precio_initario, estado, categoria_id, usuario_id) VALUES ($1, $2, $3, $4, $5, $6)', [id, nombre, precio_initario, estado, categoria_id, usuario_id]);
    res.json({
        message: 'Producto Creado',
        body: {
            user: {id, nombre, precio_initario, estado, categoria_id, usuario_id }
        }
    })
};

const getProducto = async (req, res) => {
    const response = await pool.query('SELECT * FROM productos ORDER BY id');
    res.status(200).json(response.rows);
};

const getProductoId = async (req, res) => {
    const id = parseInt(req.params.id_producto);
    const response = await pool.query('SELECT * FROM productos WHERE id = $1', [id]);
    res.json(response.rows);
};

const actualizarProducto= async (req, res) => {
    const id = parseInt(req.params.id_producto);
    const { nombre, precio_initario, estado, categoria_id, usuario_id } = req.body;
   
    const response =await pool.query('UPDATE productos SET nombre = $1, precio_initario = $2, estado = $3, categoria_id = $4, usuario_id = $5  WHERE id = $6', 
    [nombre, precio_initario, estado, categoria_id, usuario_id, id]);
    res.json('Producto Actualizado');
};

const eliminarProducto = async (req, res) => {
    const id = parseInt(req.params.id_producto);
    await pool.query('DELETE FROM productos where id = $1', [id]);
    res.json(`Producto ${id} Borrado`);
};

module.exports = {
    crearProducto,
    getProducto,
    getProductoId,
    actualizarProducto,
    eliminarProducto
  };