class Agendamento {
  constructor(id, funcionarioId, salaId, data, horaInicio, horaFim) {
    this.id = id;
    this.funcionarioId = funcionarioId;
    this.salaId = salaId;
    this.data = data;
    this.horaInicio = horaInicio;
    this.horaFim = horaFim;
  }
}
module.exports = Agendamento;
