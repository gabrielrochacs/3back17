import Cliente from "../Modelo/Cliente.js";

export default class ClienteCtrl {

    async gravarCliente(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method === 'POST' && requisicao.is('application/json')) {
            const dados = requisicao.body;
            const cpf = dados.cpf;
            const nome = dados.nome;
            const dataNasc = dados.dataNasc;
            const telefone = dados.telefone;
            const email = dados.email;
            const cep = dados.cep;
            const logradouro = dados.logradouro;
            const numero = dados.numero;
            const complemento = dados.complemento;
            const bairro = dados.bairro;
            const cidade = dados.cidade;
            const uf = dados.uf;

            if (cpf && nome && dataNasc && telefone && email && cep && logradouro && numero && complemento && bairro && cidade && uf) {
                const cliente = new Cliente(cpf, nome, dataNasc, telefone, email, cep, logradouro, numero, complemento, bairro, cidade, uf);
                cliente.gravar(cliente).then(() => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: 'Cliente gravado com sucesso !!!'
                    });
                }).catch((erro) => {
                    resposta.status(500).json({
                        status: false,
                        mensagem: erro.message
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

    async editarCliente(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method === 'PUT' && requisicao.is('application/json')) {
            const dados = requisicao.body;
            const cpf = dados.cpf;
            const nome = dados.nome;
            const dataNasc = dados.dataNasc;
            const telefone = dados.telefone;
            const email = dados.email;
            const cep = dados.cep;
            const logradouro = dados.logradouro;
            const numero = dados.numero;
            const complemento = dados.complemento;
            const bairro = dados.bairro;
            const cidade = dados.cidade;
            const uf = dados.uf;

            if (cpf && nome && dataNasc && telefone && email && cep && logradouro && numero && complemento && bairro && cidade && uf) {
                const cliente = new Cliente(cpf, nome, dataNasc, telefone, email, cep, logradouro, numero, complemento, bairro, cidade, uf);
                cliente.alterar(cliente).then(() => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: 'Dados do cliente alterados com sucesso !!!'
                    });
                }).catch((erro) => {
                    resposta.status(500).json({
                        status: false,
                        mensagem: erro.message
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

    async excluirCliente(requisicao, resposta) {
        if (requisicao.method === 'DELETE') {
            const cpf = requisicao.params['cpf'];

            if (cpf) {
                const cliente = new Cliente(); // Inicialize a classe Cliente corretamente
                cliente.apagar(cpf).then(() => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: 'Dados apagados com sucesso !!!'
                    });
                }).catch((erro) => {
                    resposta.status(500).json({
                        status: false,
                        mensagem: erro.message
                    });
                });
            } else {
                resposta.status(400).json({
                    status: false,
                    mensagem: 'Verifique se o CPF do cliente está correto.'
                });
            }
        } else {
            resposta.status(400).json({
                status: false,
                mensagem: 'Método inválido, verifique o formato do dado.'
            });
        }
    }

    consultarCliente(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method === 'GET') {
            const cliente = new Cliente(); // Inicialize a classe Cliente corretamente
            cliente.consulta('').then((ListaClientes) => {
                resposta.status(200).json(ListaClientes);
            }).catch((erro) => {
                resposta.status(500).json({
                    status: false,
                    mensagem: erro.message
                });
            });
        } else {
            resposta.status(400).json({
                status: false,
                mensagem: 'Método inválido'
            });
        }
    }

    consultaClientePorCpf(requisicao, resposta) {
        resposta.type('application/json');

        const cpf = requisicao.params['cpf'];

        if (requisicao.method === 'GET') {
            const cliente = new Cliente(); // Inicialize a classe Cliente corretamente
            cliente.consultarCliente(cpf).then((Clientes) => {
                resposta.status(200).json(Clientes);
            }).catch((erro) => {
                resposta.status(500).json({
                    status: false,
                    mensagem: erro.message
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