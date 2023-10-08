import Venda from '../Modelo/Venda.js';

export default class VendaCtrl {

    gravar(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method === 'POST' && requisicao.is('application/json')) {
            const dados = requisicao.body;
            const id = dados.id;
            const data = dados.data;
            const valor = dados.valor;
            const cliente_id = dados.cliente_id;

            if (data && valor && cliente_id) {
                const venda = new Venda(id, data, valor, cliente_id);
                venda.gravar().then(() => {
                    resposta.status(200).json({
                        status: true,
                        id: venda.id,
                        mensagem: 'Venda gravada com sucesso !!!'
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
            const data = dados.data;
            const valor = dados.valor;
            const cliente_id = dados.cliente_id;

            if (id && data && valor && cliente_id) {
                const venda = new Venda(id, data, valor, cliente_id);
                venda.editar().then(() => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: 'Dados da venda alterados com sucesso !!!'
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
                const venda = new Venda(id);
                venda.excluir().then(() => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: 'Venda apagada com sucesso !!!'
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
                    mensagem: 'Verifique se o ID da venda está correto.'
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
            const venda = new Venda(); // Crie uma instância de Venda
            venda.consulta().then((listaVendas) => {
                resposta.status(200).json(listaVendas);
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
            const venda = new Venda();
            venda.consultaPorCodigo(id).then((vendas) => {
                resposta.status(200).json(vendas);
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