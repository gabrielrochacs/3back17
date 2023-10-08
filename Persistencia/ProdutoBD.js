import conectar from "./conexao.js";
import Produto from "../Modelo/Produto.js"; // Certifique-se de importar o modelo correto

export default class ProdutoBD {

    // Gravar no banco de dados
    async gravar(produto) {
        if (produto instanceof Produto) {
            const conexao = await conectar();
            const bd = 'INSERT INTO produto(nome, preco, descricao) VALUES(?,?,?)';

            const valores = [produto.nome, produto.preco, produto.descricao];
            const resultado = await conexao.query(bd, valores);
            return resultado[0].insertId;
        }
    }

    // Editar dados
    async editar(produto) {
        if (produto instanceof Produto) {
            const conexao = await conectar();
            const bd = 'UPDATE produto SET nome=?, preco=?, descricao=? WHERE id=?';
            const valores = [produto.nome, produto.preco, produto.descricao, produto.id];
            await conexao.query(bd, valores);
        }
    }

    // Excluir dados
    async excluir(produto) {
        if (produto instanceof Produto) {
            const conexao = await conectar();
            const bd = 'DELETE FROM produto WHERE id=?';
            const valores = [produto.id];
            await conexao.query(bd, valores);
        }
    }

    // Consultar todos os produtos
    async consulta() {
        const conexao = await conectar();
        const bd = 'SELECT * FROM produto';
        const [rows] = await conexao.query(bd);

        const listaProdutos = [];
        for (const row of rows) {
            const produto = new Produto(row['id'], row['nome'], row['preco'], row['descricao']);
            listaProdutos.push(produto);
        }
        return listaProdutos;
    }

    // Consulta por ID
    async consultaPorId(id) {
        const conexao = await conectar();
        const bd = 'SELECT * FROM produto WHERE id=?';
        const valores = [id];
        const [rows] = await conexao.query(bd, valores);

        const ListaProdutos = [];
        for (const row of rows) {
            const produto = new Produto(row['id'], row['nome'], row['preco'], row['descricao']);
            ListaProdutos.push(produto);
        }
        return ListaProdutos;
    }
}