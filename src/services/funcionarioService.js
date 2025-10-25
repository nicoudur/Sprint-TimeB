const db = require('../models/db');
const Funcionario = require('../models/Funcionario');

function findByEmail(email) {
  return db.funcionarios.find(f => f.email === email);
}

function createFuncionario(nome, email, senha) {
  const id = db.funcionarios.length ? Math.max(...db.funcionarios.map(f => f.id)) + 1 : 1;
  const funcionario = new Funcionario(id, nome, email, senha);
  db.funcionarios.push(funcionario);
  return funcionario;
}

function getFuncionarios() {
  return db.funcionarios;
}

function deleteFuncionario(id) {
  const idx = db.funcionarios.findIndex(f => f.id === id);
  if (idx !== -1) db.funcionarios.splice(idx, 1);
}

function getFuncionarioById(id) {
  return db.funcionarios.find(f => f.id === id);
}

module.exports = {
  findByEmail,
  createFuncionario,
  getFuncionarios,
  deleteFuncionario,
  getFuncionarioById
};
