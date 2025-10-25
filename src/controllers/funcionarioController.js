const funcionarioService = require('../services/funcionarioService');
const jwt = require('jsonwebtoken');
const SECRET = 'sprinttimeb';

exports.register = (req, res) => {
  const { nome, email, senha } = req.body;
  if (!nome || !email || !senha) return res.status(400).json({ error: 'Campos obrigatórios' });
  if (funcionarioService.findByEmail(email)) return res.status(400).json({ error: 'Email já cadastrado' });
  const funcionario = funcionarioService.createFuncionario(nome, email, senha);
  res.status(201).json({ id: funcionario.id, nome: funcionario.nome, email: funcionario.email });
};

exports.login = (req, res) => {
  const { email, senha } = req.body;
  const funcionario = funcionarioService.findByEmail(email);
  if (!funcionario || funcionario.senha !== senha) return res.status(401).json({ error: 'Credenciais inválidas' });
  const token = jwt.sign({ id: funcionario.id }, SECRET, { expiresIn: '1d' });
  res.json({ token });
};

exports.list = (req, res) => {
  res.json(funcionarioService.getFuncionarios().map(f => ({ id: f.id, nome: f.nome, email: f.email })));
};

exports.delete = (req, res) => {
  const id = parseInt(req.params.id);
  funcionarioService.deleteFuncionario(id);
  res.status(204).send();
};
