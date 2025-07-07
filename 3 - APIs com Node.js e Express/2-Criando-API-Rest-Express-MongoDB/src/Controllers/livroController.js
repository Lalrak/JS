import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (err) {
      res
        .status(500)
        .json({ message: `Erro ao listar livros: ${err.message}` });
    }
  }

  static async ListarLivroPorId(req, res) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      res
        .status(200)
        .json({ message: "Livro encontrado com sucesso!", livroEncontrado });
    } catch (err) {
      res.status(500).json({ message: `Erro ao buscar livro: ${err.message}` });
    }
  }

  static async cadastrarLivro(req, res) {
    const novolivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novolivro.autor);
      const livroCompleto = {
        ...novolivro,
        autor: { ...autorEncontrado._doc },
      };
      const livroCriado = await livro.create(livroCompleto);
      res
        .status(201)
        .json({ message: "Livro cadastrado com sucesso!", livro: novolivro });
    } catch (err) {
      res.status(500).json({
        message: `Erro ao cadastrar livro: ${err.message} `,
      });
    }
  }

  static async atualizarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Livro atualizado com sucesso!", livro });
    } catch (err) {
      res
        .status(500)
        .json({ message: `Erro ao atualizar livro: ${err.message}` });
    }
  }

  static async deletarLivros(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: "Livro removido com sucesso!", livro });
    } catch (err) {
      res
        .status(500)
        .json({ message: `Erro ao remover livro: ${err.message}` });
    }
  }

  static async listarLivrosPorEditora(req, res) {
    const editora = req.query.editora;
    try {
      const livrosPorEditora = await livro.find({ editora: editora });
      res
        .status(200)
        .json({ message: "Livros encontrados com sucesso!", livrosPorEditora });
    } catch (err) {
      res
        .status(500)
        .json({ message: `Erro ao listar livros por editora: ${err.message}` });
    }
  }
}

export default LivroController;
