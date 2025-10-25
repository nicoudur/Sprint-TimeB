const salaService = require('../services/salaService');

exports.create = (req, res) => {
  const { nome } = req.body;
  if (!nome) return res.status(400).json({ error: 'Nome obrigatório' });
  if (salaService.getSalas().find(s => s.nome === nome)) return res.status(400).json({ error: 'Sala já existe' });
  const sala = salaService.createSala(nome);
  res.status(201).json(sala);
};

exports.list = (req, res) => {
  res.json(salaService.getSalas());
};

exports.delete = (req, res) => {
  const id = parseInt(req.params.id);
  salaService.deleteSala(id);
  res.status(204).send();
};

exports.disponiveis = (req, res) => {
  const { data, horaInicio, horaFim } = req.query;
  if (!data || !horaInicio || !horaFim) return res.status(400).json({ error: 'Parâmetros obrigatórios' });
  const salas = salaService.getSalasDisponiveis(data, horaInicio, horaFim);
  res.json(salas);
};
