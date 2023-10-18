import express from 'express';
import cors from 'cors';
import rotaCliente from './Rotas/rotaCliente.js';
import rotaVenda from './Rotas/rotaVenda.js';
import rotaProduto from './Rotas/rotaProduto.js';
import rotaItensVenda from './Rotas/rotaItensVenda.js'; // Importe a rota de ItensVenda

const porta = 4017;
const host = '0.0.0.0';

const appExpress = express();
appExpress.use(cors({
    origin: "*"
}));
 
appExpress.use(express.urlencoded({ extended: false }));
appExpress.use(express.json());

appExpress.use('/clientes', rotaCliente);
appExpress.use('/vendas', rotaVenda);
appExpress.use('/produtos', rotaProduto);
appExpress.use('/itensVendas', rotaItensVenda); // Adicione a rota de ItensVenda aqui

appExpress.listen(porta, host, () => {
    console.log(`Em execução http://${host}:${porta}`);
});