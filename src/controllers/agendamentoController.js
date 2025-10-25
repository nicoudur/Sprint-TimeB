const agendamentoService = require('../services/agendamentoService');

exports.create = (req, res) => {
  const { salaId, data, horaInicio, horaFim } = req.body;
  const missing = [];
  if (!salaId) missing.push('salaId');
  if (!data) missing.push('data');
  if (!horaInicio) missing.push('horaInicio');
  if (!horaFim) missing.push('horaFim');
  if (missing.length) {
    return res.status(400).json({ error: 'Campos obrigatórios ausentes', missingFields: missing });
  }
  const agendamento = agendamentoService.createAgendamento(req.userId, salaId, data, horaInicio, horaFim);
  if (!agendamento) return res.status(400).json({ error: 'Sala ocupada no horário selecionado' });
  res.status(201).json(agendamento);
};

exports.list = (req, res) => {
  const ags = agendamentoService.getAgendamentosByFuncionario(req.userId);
  res.json(ags);
};

exports.delete = (req, res) => {
  const id = parseInt(req.params.id);
  const db = require('../models/db');
  const agendamento = db.agendamentos.find(a => a.id === id);
  if (!agendamento) {
    return res.status(404).json({ error: 'Agendamento não encontrado' });
  }
  if (agendamento.funcionarioId !== req.userId) {
    return res.status(403).json({ error: 'Só o próprio funcionário pode cancelar um agendamento' });
  }
  const agendamentoService = require('../services/agendamentoService');
  agendamentoService.deleteAgendamento(id, req.userId);
  res.status(204).send();
};
