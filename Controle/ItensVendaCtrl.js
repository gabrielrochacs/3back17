import ItensVenda from '../Modelo/ItensVenda.js';

export default class ItensVendaCtrl {

    gravar(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method === 'POST' && requisicao.is('application/json')) {
            const dados = requisicao.body;
            const id = dados.id;
            const produto_id = dados.produto_id;
            const quantidade = dados.quantidade;
            const venda_id = dados.venda_id;

            if (produto_id && venda_id && quantidade) {
                const itensVenda = new ItensVenda(id, produto_id, quantidade, venda_id);
                itensVenda.gravar().then(() => {
                    resposta.status(200).json({
                        status: true,
                        id: itensVenda.id,
                        mensagem: 'Item de venda gravado com sucesso !!!'
                    });
                }).catch((error) => {
                    resposta.status(500).json({
                        status: false,
                        mensagem: error.message
                    });
                });
            } else {
                resposta.status(400).json({
                    status: false,
                    mensagem: 'Verifique se os dados foram preenchidos corretamente.'
                });
            }
        } else {
            resposta.status(400).json({
                status: false,
                mensagem: 'Método inválido, verifique o formato do dado.'
            });
        }
    }

    editar(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method === 'PUT' && requisicao.is('application/json')) {
            const dados = requisicao.body;
            const id = dados.id;
            const produto_id = dados.produto_id;
            const quantidade = dados.quantidade;
            const venda_id = dados.venda_id;

            if (id && produto_id && quantidade && venda_id) {
                const itensVenda = new ItensVenda(id, produto_id, quantidade, venda_id);
                itensVenda.editar().then(() => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: 'Dados do item de venda alterados com sucesso !!!'
                    });
                }).catch((error) => {
                    resposta.status(500).json({
                        status: false,
                        mensagem: error.message
                    });
                });
            } else {
                resposta.status(400).json({
                    status: false,
                    mensagem: 'Verifique se os dados foram preenchidos corretamente.'
                });
            }
        } else {
            resposta.status(400).json({
                status: false,
                mensagem: 'Método inválido, verifique o formato do dado.'
            });
        }
    }

    excluir(requisicao, resposta) {
        resposta.type("application/json");
        if (requisicao.method === 'DELETE' && requisicao.is('application/json')) {
            const dados = requisicao.body;
            const id = dados.id;

            if (id) {
                const itensVenda = new ItensVenda(id);
                itensVenda.excluir().then(() => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: 'Item de venda apagado com sucesso !!!'
                    });
                }).catch((error) => {
                    resposta.json({
                        status: false,
                        mensagem: error.message
                    });
                });
            } else {
                resposta.status(400).json({
                    status: false,
                    mensagem: 'Verifique se o ID do item de venda está correto.'
                });
            }
        } else {
            resposta.status(400).json({
                status: false,
                mensagem: 'Método inválido, verifique o formato do dado.'
            });
        }
    }

    consultar(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method === 'GET') {
            const itensVenda = new ItensVenda();
            itensVenda.consulta().then((listaItensVenda) => {
                resposta.status(200).json(listaItensVenda);
            }).catch((error) => {
                resposta.status(500).json({
                    status: false,
                    mensagem: error.message
                });
            });
        } else {
            resposta.status(400).json({
                status: false,
                mensagem: 'Método inválido !!!'
            });
        }
    }

    consultaPorCodigo(requisicao, resposta) {
        resposta.type('application/json');

        const id = requisicao.params['id'];

        if (requisicao.method === 'GET') {
            const itensVenda = new ItensVenda();
            itensVenda.consultaPorCodigo(id).then((itensVenda) => {
                resposta.status(200).json(itensVenda);
            }).catch((error) => {
                resposta.status(500).json({
                    status: false,
                    mensagem: error.message
                });
            });
        } else {
            resposta.status(400).json({
                status: false,
                mensagem: 'Método inválido'
            });
        }
    }
}