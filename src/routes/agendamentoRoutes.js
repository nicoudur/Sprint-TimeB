const express = require('express');
const router = express.Router();
const agendamentoController = require('../controllers/agendamentoController');
const auth = require('../middleware/auth');

router.post('/', auth, agendamentoController.create);
router.get('/', auth, agendamentoController.list);
router.delete('/:id', auth, agendamentoController.delete);

module.exports = router;
