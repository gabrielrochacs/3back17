import Produto from '../Modelo/Produto.js';

export default class ProdutoCtrl {

    gravar(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method === 'POST' && requisicao.is('application/json')) {
            const dados = requisicao.body;
            const nome = dados.nome;
            const preco = dados.preco;
            const descricao = dados.descricao;

            if (nome !== undefined && preco !== undefined && descricao !== undefined) {
                const produto = new Produto(undefined, nome, preco, descricao); // 'undefined' para o campo 'id'
                produto.gravar().then(() => {
                    resposta.status(200).json({
                        status: true,
                        codProduto: produto.codProduto,
                        mensagem: 'Produto gravado com sucesso !!!'
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
            // const id = dados.id;
            const nome = dados.nome;
            const preco = dados.preco;
            const descricao = dados.descricao;

            if (nome !== undefined && preco !== undefined && descricao !== undefined) {
                const produto = new Produto(nome, preco, descricao);
                produto.alterar().then(() => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: 'Dados do produto alterados com sucesso !!!'
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

            if (id !== undefined) {
                const produto = new Produto(id);
                produto.apagar().then(() => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: 'Produto apagado com sucesso !!!'
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
                    mensagem: 'Verifique se o código do produto está correto.'
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
            const produto = new Produto();
            produto.consulta().then((listaProdutos) => {
                resposta.status(200).json(listaProdutos);
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
            const produto = new Produto();
            produto.consultaPorCodigo(id).then((produtos) => {
                resposta.status(200).json(produtos);
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