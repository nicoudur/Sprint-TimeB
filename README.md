# API de Agendamento de Salas de Reunião

Esta API permite o agendamento e gerenciamento de salas de reunião, evitando conflitos de uso entre equipes. A autenticação é obrigatória para todos os endpoints (JWT).

## Tecnologias
- Node.js
- Express
- JWT para autenticação
- Banco de dados em memória
- Swagger para documentação

## Instalação
1. Instale as dependências:
   ```powershell
   npm install express swagger-ui-express jsonwebtoken
   ```
2. Inicie o servidor:
   ```powershell
   node index.js
   ```

## Endpoints principais
Consulte a documentação Swagger em `/api-docs` para detalhes completos dos endpoints, modelos de resposta e códigos de erro.

- **Funcionário**
  - `POST /funcionarios/register` — Registro de funcionário
  - `POST /funcionarios/login` — Login e obtenção do token JWT
  - `GET /funcionarios` — Listar funcionários (autenticado)
  - `DELETE /funcionarios/:id` — Remover funcionário (autenticado)

- **Sala**
  - `POST /salas` — Criar sala
  - `GET /salas` — Listar salas
  - `DELETE /salas/:id` — Remover sala
  - `GET /salas/disponiveis?data=YYYY-MM-DD&horaInicio=HH:mm&horaFim=HH:mm` — Salas disponíveis no horário

- **Agendamento**
  - `POST /agendamentos` — Criar agendamento
  - `GET /agendamentos` — Listar agendamentos do usuário
  - `DELETE /agendamentos/:id` — Cancelar agendamento (apenas pelo próprio usuário)

## Autenticação
Todos os endpoints (exceto registro e login) exigem o header:
```
Authorization: Bearer <token>
```

## Estrutura do projeto
```
src/
  controllers/
  models/
  routes/
  services/
  middleware/
resources/
  swagger.json
index.js
```

## Observações
- O banco de dados é volátil (em memória).
- A documentação Swagger detalha os modelos JSON e os status code de erro.
- O visual da aplicação será tratado por outro time.

---
