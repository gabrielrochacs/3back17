import conectar from "./conexao.js";
import Venda from "../Modelo/Venda.js"; // Certifique-se de importar o modelo correto

export default class VendaBD {

   // Gravar no banco de dados
   async gravar(venda) {
      if (venda instanceof Venda) {
         const conexao = await conectar();
         const bd = 'INSERT INTO venda(data, valor, cliente_id) VALUES(?,?,?)';

         const valores = [venda.data, venda.valor, venda.cliente_id];
         const resultado = await conexao.query(bd, valores);
         return resultado[0].insertId;
      }
   }

   // Editar dados
   async editar(venda) {
      if (venda instanceof Venda) {
         const conexao = await conectar();
         const bd = 'UPDATE venda SET data=?, valor=?, cliente_id=? WHERE id=?';
         const valores = [venda.data, venda.valor, venda.cliente_id, venda.id];
         await conexao.query(bd, valores);
      }
   }

   // Excluir dados
   async excluir(venda) {
      if (venda instanceof Venda) {
         const conexao = await conectar();
         const bd = 'DELETE FROM venda WHERE id=?';
         const valores = [venda.id];
         await conexao.query(bd, valores);
      }
   }

   async consultar() {
      const conexao = await conectar();
      const bd = 'SELECT * FROM venda';
      const [rows] = await conexao.query(bd);

      const listaVendas = [];
      for (const row of rows) {
         const venda = new Venda(row['id'], row['data'], row['valor'], row['cliente_id']);
         listaVendas.push(venda);
      }
      return listaVendas;
   }


   // Consultar dados por cliente_id
   async consultarPorCliente(cliente_id) {
      const conexao = await conectar();
      const bd = 'SELECT * FROM venda WHERE cliente_id=?';
      const valores = [cliente_id];
      const [rows] = await conexao.query(bd, valores);

      const ListaVendas = [];
      for (const row of rows) {
         const venda = new Venda(row['id'], row['data'], row['valor'], row['cliente_id']);
         ListaVendas.push(venda);
      }
      return ListaVendas;
   }

   // Consulta por ID
   async consultaPorId(id) {
      const conexao = await conectar();
      const bd = 'SELECT * FROM venda WHERE id=?';
      const valores = [id];
      const [rows] = await conexao.query(bd, valores);

      const ListaVendas = [];
      for (const row of rows) {
         const venda = new Venda(row['id'], row['data'], row['valor'], row['cliente_id']);
         ListaVendas.push(venda);
      }
      return ListaVendas;
   }
}