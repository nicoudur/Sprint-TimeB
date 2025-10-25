
const funcionarios = [
  { id: 1, nome: 'Admin', email: 'admin@empresa.com', senha: '1234' },
  { id: 2, nome: 'Igor', email: 'igor@empresa.com', senha: '1234' }
];

const salas = [
  { id: 1, nome: 'Sala Azul' },
  { id: 2, nome: 'Sala Verde' }
];

const agendamentos = [
  { id: 1, funcionarioId: 1, salaId: 1, data: '2025-10-26', horaInicio: '09:00', horaFim: '10:00' }
];

module.exports = {
  funcionarios,
  salas,
  agendamentos
};
