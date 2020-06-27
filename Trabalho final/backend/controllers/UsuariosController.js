const express = require('express');
const router = express.Router();
const service = require('../services/UsuariosService');

// GET api/usuarios
router.get('/', async (req, res) => {
    const Usuarios = await service.findAll();
    res.json(Usuarios);
});

// GET api/usuarios/:id
router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id) || null;
    const Usuario = await service.findById(id);
    if (!Usuario) {
        return res.status(404).json({ error: 'Usuario not found!' })
    }
    return res.json(Usuario);
});

// POST api/usuarios
router.post('/', async (req, res) => {
    const result = await service.add(req.body);
    return res.json(result);
});

// PUT api/usuarios/:id
router.put('/:id', async (req, res) => {
    const result = await service.update(req.body);
    if (!result) {
        return res.status(404).json({ error: 'Usuario not found!' })
    }
    return res.json(result);
});

// DELETE api/usuarios/:id
router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id) || null;
    const result = await service.deleteById(id);
    if (!result) {
        return res.status(404).json({ error: 'Usuario not found!' })
    }
    return res.json(result);
});

module.exports = router;