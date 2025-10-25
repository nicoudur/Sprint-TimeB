const express = require('express');
const router = express.Router();
const salaController = require('../controllers/salaController');
const auth = require('../middleware/auth');

router.post('/', auth, salaController.create);
router.get('/', auth, salaController.list);
router.delete('/:id', auth, salaController.delete);
router.get('/disponiveis', auth, salaController.disponiveis);

module.exports = router;
