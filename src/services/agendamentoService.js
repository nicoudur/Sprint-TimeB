const db = require('../models/db');
const Agendamento = require('../models/Agendamento');

function createAgendamento(funcionarioId, salaId, data, horaInicio, horaFim) {
  // Verifica conflito
  const conflito = db.agendamentos.find(a =>
    a.salaId === salaId && a.data === data && (
      (horaInicio >= a.horaInicio && horaInicio < a.horaFim) ||
      (horaFim > a.horaInicio && horaFim <= a.horaFim) ||
      (horaInicio <= a.horaInicio && horaFim >= a.horaFim)
    )
  );
  if (conflito) return null;
  const id = db.agendamentos.length ? Math.max(...db.agendamentos.map(a => a.id)) + 1 : 1;
  const agendamento = new Agendamento(id, funcionarioId, salaId, data, horaInicio, horaFim);
  db.agendamentos.push(agendamento);
  return agendamento;
}

function getAgendamentosByFuncionario(funcionarioId) {
  return db.agendamentos.filter(a => a.funcionarioId === funcionarioId);
}

function deleteAgendamento(id, funcionarioId) {
  const idx = db.agendamentos.findIndex(a => a.id === id);
  if (idx === -1) return false;
  if (db.agendamentos[idx].funcionarioId !== funcionarioId) return false;
  db.agendamentos.splice(idx, 1);
  return true;
}

module.exports = {
  createAgendamento,
  getAgendamentosByFuncionario,
  deleteAgendamento
};
