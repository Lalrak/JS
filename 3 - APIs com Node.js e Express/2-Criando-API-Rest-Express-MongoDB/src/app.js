import express from "express";
import connectDb from "./config/dbConnect.js";

const conexao = await connectDb();
conexao.on("error", (error) => {
  console.error(`Erro na conexão com o banco:`, error);
});

conexao.once("open", () => {
  console.log("Conexão com o banco de dados estabelecida com sucesso!");
});

const app = express();
app.use(express.json());

const livros = [
  {
    Id: 1,
    Titulo: "Senhor dos anéis",
  },
  {
    Id: 2,
    Titulo: "Harry Potter",
  },
  {
    Id: 3,
    Titulo: "O Hobbit",
  },
];

function buscaLivros(id) {
  return livros.findIndex((livro) => livro.id === Number(id));
}

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso!");
});

app.get("/livros/:id", (req, res) => {
  const index = buscaLivros(req.params.id);
  res.status(200).json(livros[index]);
});

app.put("/livros/:id", (req, res) => {
  const index = buscaLivros(req.params.id);
  livros[index].Titulo = req.body.Titulo;
  res.status(200).send("Livro atualizado com sucesso!");
});

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivros(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Livro removido com sucesso!");
});

export default app;
