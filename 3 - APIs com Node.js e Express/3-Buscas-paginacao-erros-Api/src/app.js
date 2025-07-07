import express from "express";
import connectDb from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await connectDb();
conexao.on("error", (error) => {
  console.error(`Erro na conexão com o banco:`, error);
});

conexao.once("open", () => {
  console.log("Conexão com o banco de dados estabelecida com sucesso!");
});

const app = express();
routes(app);

export default app;
