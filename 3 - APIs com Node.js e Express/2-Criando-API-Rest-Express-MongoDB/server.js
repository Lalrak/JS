// import http from "http";

// const PORT = 3000;

// const rotas = {
//   "/": "Curso de Node.js",
//   "/livros": "Entrei na rota livros",
//   "/autores": "Entrei na rota autores",
// };

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "content-type": "text/plain" });
//   res.end(rotas[req.url]);
// });

// server.listen(PORT, () => {
//   console.log("Servidor escutando!");
// });

import app from "./src/app.js";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});
