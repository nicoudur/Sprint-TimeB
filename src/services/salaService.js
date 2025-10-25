const db = require('../models/db');
const Sala = require('../models/Sala');

function createSala(nome) {
  const id = db.salas.length ? Math.max(...db.salas.map(s => s.id)) + 1 : 1;
  const sala = new Sala(id, nome);
  db.salas.push(sala);
  return sala;
}

function getSalas() {
  return db.salas;
}

function deleteSala(id) {
  const idx = db.salas.findIndex(s => s.id === id);
  if (idx !== -1) db.salas.splice(idx, 1);
}

function getSalasDisponiveis(data, horaInicio, horaFim) {
  const ocupadas = db.agendamentos.filter(a =>
    a.data === data && (
      (horaInicio >= a.horaInicio && horaInicio < a.horaFim) ||
      (horaFim > a.horaInicio && horaFim <= a.horaFim) ||
      (horaInicio <= a.horaInicio && horaFim >= a.horaFim)
    )
  ).map(a => a.salaId);
  return db.salas.filter(s => !ocupadas.includes(s.id));
}

module.exports = {
  createSala,
  getSalas,
  deleteSala,
  getSalasDisponiveis
};
