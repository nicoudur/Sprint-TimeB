const express = require('express');
const router = express.Router();
const funcionarioController = require('../controllers/funcionarioController');
const auth = require('../middleware/auth');

router.post('/register', funcionarioController.register);
router.post('/login', funcionarioController.login);
router.get('/', auth, funcionarioController.list);
router.delete('/:id', auth, funcionarioController.delete);

module.exports = router;
