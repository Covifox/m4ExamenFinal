const { Router } = require('express');
const router = Router();

// Rutas Usuarios
const { crearUsuario, getUsuarios, getUsuariosId, actualizarUsuario, eliminarUsuario } = require('../controllers/usuarios');

router.post('/usuarios', crearUsuario);
router.get('/usuarios', getUsuarios);
router.get('/usuarios/:id_usuario', getUsuariosId);
router.put('/usuarios/:id_usuario', actualizarUsuario)
router.delete('/usuarios/:id_usuario', eliminarUsuario);

// Rutas Categorias
const { crearCategoria, getCategoria, getCategoriaId, actualizarCategoria, eliminarCategoria } = require('../controllers/categorias');

router.post('/categorias', crearCategoria);
router.get('/categorias', getCategoria);
router.get('/categorias/:id_categoria', getCategoriaId);
router.put('/categorias/:id_categoria', actualizarCategoria)
router.delete('/categorias/:id_categoria', eliminarCategoria);

crearCategoria, getCategoria, getCategoriaId, actualizarCategoria, eliminarCategoria

// Rutas Productos
const { crearProducto, getProducto, getProductoId, actualizarProducto, eliminarProducto } = require('../controllers/productos');

router.post('/productos', crearProducto);
router.get('/productos', getProducto);
router.get('/productos/:id_producto', getProductoId);
router.put('/productos/:id_producto', actualizarProducto)
router.delete('/productos/:id_producto', eliminarProducto);

module.exports = router;