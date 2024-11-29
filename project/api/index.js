const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const users = [
  {
    id: 1,
    name: "Ana Silva",
    email: "ana.silva@example.com",
    cellphone: "(11) 98765-4321"
  },
  {
    id: 2,
    name: "Carlos Oliveira",
    email: "carlos.oliveira@example.com",
    cellphone: "(21) 91234-5678"
  },
  {
    id: 3,
    name: "Beatriz Santos",
    email: "beatriz.santos@example.com",
    cellphone: "(31) 99876-5432"
  },
  {
    id: 4,
    name: "Eduardo Pereira",
    email: "eduardo.pereira@example.com",
    cellphone: "(41) 98765-1234"
  },
  {
    id: 5,
    name: "Fernanda Costa",
    email: "fernanda.costa@example.com",
    cellphone: "(51) 97654-3210"
  }
];

// Rota para retornar todos os usuários
app.get("/", (req, res) => {
  try {
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Algo deu errado no servidor" });
  }
});

// Rota para retornar um usuário específico pelo id
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  res.status(200).json(user);
});

// Middleware de rota não encontrada (404)
app.use((req, res) => {
  res.status(404).json({ message: "Rota não encontrada" });
});

// Middleware de tratamento de erros genéricos
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Erro interno do servidor" });
});

app.listen(3000, () => console.log("Servidor rodando...🔥"));
