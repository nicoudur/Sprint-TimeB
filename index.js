const express = require('express');
const app = express();
const funcionarioRoutes = require('./src/routes/funcionarioRoutes');
const salaRoutes = require('./src/routes/salaRoutes');
const agendamentoRoutes = require('./src/routes/agendamentoRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./resources/swagger.json');

app.use(express.json());

app.use('/funcionarios', funcionarioRoutes);
app.use('/salas', salaRoutes);
app.use('/agendamentos', agendamentoRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
