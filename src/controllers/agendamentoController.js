const agendamentoService = require('../services/agendamentoService');

exports.create = (req, res) => {
  const { salaId, data, horaInicio, horaFim } = req.body;
  if (!salaId || !data || !horaInicio || !horaFim) return res.status(400).json({ error: 'Campos obrigatórios' });
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
  const ok = agendamentoService.deleteAgendamento(id, req.userId);
  if (!ok) return res.status(403).json({ error: 'Só o próprio funcionário pode cancelar seu agendamento ou agendamento não encontrado' });
  res.status(204).send();
};
