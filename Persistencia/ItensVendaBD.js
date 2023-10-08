import conectar from "./conexao.js";
import ItensVenda from "../Modelo/ItensVenda.js"; // Certifique-se de importar o modelo correto

export default class ItensVendaBD {

    // Gravar no banco de dados
    async gravar(itensVenda) {
        if (itensVenda instanceof ItensVenda) {
            const conexao = await conectar();
            const bd = 'INSERT INTO itensVenda(produto_id, quantidade, venda_id) VALUES(?,?,?)';

            const valores = [itensVenda.produto_id, itensVenda.quantidade, itensVenda.venda_id];
            const resultado = await conexao.query(bd, valores);
            return resultado[0].insertId;
        }
    }

    // Editar dados
    async editar(itensVenda) {
        if (itensVenda instanceof ItensVenda) {
            const conexao = await conectar();
            const bd = 'UPDATE itensVenda SET produto_id=?, quantidade=?, venda_id=? WHERE id=?';
            const valores = [itensVenda.produto_id, itensVenda.quantidade, itensVenda.venda_id, itensVenda.id];
            await conexao.query(bd, valores);
        }
    }

    // Excluir dados
    async excluir(itensVenda) {
        if (itensVenda instanceof ItensVenda) {
            const conexao = await conectar();
            const bd = 'DELETE FROM itensVenda WHERE id=?';
            const valores = [itensVenda.id];
            await conexao.query(bd, valores);
        }
    }

    async consulta() {
        const conexao = await conectar();
        const bd = 'SELECT * FROM itensVenda';
        const [rows] = await conexao.query(bd);

        const listaItensVenda = [];
        for (const row of rows) {
            const itensVenda = new ItensVenda(row['id'], row['produto_id'], row['quantidade'], row['venda_id']);
            listaItensVenda.push(itensVenda);
        }
        return listaItensVenda;
    }


    // Consultar dados por venda_id
    async consultarPorVenda(venda_id) {
        const conexao = await conectar();
        const bd = 'SELECT * FROM itensVenda WHERE venda_id=?';
        const valores = [venda_id];
        const [rows] = await conexao.query(bd, valores);

        const ListaItensVenda = [];
        for (const row of rows) {
            const itensVenda = new ItensVenda(row['id'], row['produto_id'], row['quantidade'], row['venda_id']);
            ListaItensVenda.push(itensVenda);
        }
        return ListaItensVenda;
    }

    // Consulta por ID
    async consultaPorId(id) {
        const conexao = await conectar();
        const bd = 'SELECT * FROM itensVenda WHERE id=?';
        const valores = [id];
        const [rows] = await conexao.query(bd, valores);

        const ListaItensVenda = [];
        for (const row of rows) {
            const itensVenda = new ItensVenda(row['id'], row['produto_id'], row['quantidade'], row['venda_id']);
            ListaItensVenda.push(itensVenda);
        }
        return ListaItensVenda;
    }
    static async consulta() {
        const conexao = await conectar();
        const bd = 'SELECT * FROM itensVenda';
        const [rows] = await conexao.query(bd);

        const listaItensVenda = [];
        for (const row of rows) {
            const itensVenda = new ItensVenda(row['id'], row['produto_id'], row['quantidade'], row['venda_id']);
            listaItensVenda.push(itensVenda);
        }
        return listaItensVenda;
    }
}