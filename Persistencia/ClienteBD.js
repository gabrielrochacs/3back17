import conectar from "./conexao.js";
import Cliente from "../Modelo/Cliente.js"; // Certifique-se de importar o modelo correto

export default class ClienteBD {

    // Gravar no banco de dados
    async gravar(cliente) {
        if (cliente instanceof Cliente) {
            const conexao = await conectar();

            const bd = 'INSERT INTO cliente(cpf,nome,dataNasc,telefone,email,cep,logradouro,numero,complemento,bairro,cidade,uf) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)';

            const valores = [cliente.cpf, cliente.nome, cliente.dataNasc, cliente.telefone, cliente.email, cliente.cep, cliente.logradouro, cliente.numero, cliente.complemento, cliente.bairro, cliente.cidade, cliente.uf];

            const resultado = await conexao.query(bd, valores);
            return resultado[0].insertId;
        }
    }

    // Alterar dados
    async alteracao(cliente) {
        if (cliente instanceof Cliente) {
            const conexao = await conectar();

            const bd = "UPDATE cliente SET nome=?, dataNasc=?, telefone=?, email=?, cep=?, logradouro=?, numero=?, complemento=?, bairro=?, cidade=?, uf=? WHERE cpf=?";

            const valores = [cliente.nome, cliente.dataNasc, cliente.telefone, cliente.email, cliente.cep, cliente.logradouro, cliente.numero, cliente.complemento, cliente.bairro, cliente.cidade, cliente.uf, cliente.cpf];

            await conexao.query(bd, valores);
        }
    }

    // Exclusão de dados
    async excluir(cliente) {
        if (cliente instanceof Cliente) {
            const conexao = await conectar();

            const bd = "DELETE FROM cliente WHERE cpf=?";

            const valores = [cliente.cpf];

            try {
                await conexao.query(bd, valores);
                // Se chegou aqui, a exclusão foi bem-sucedida
                return { status: true, mensagem: "Cliente excluído com sucesso." };
            } catch (erro) {
                console.error('Erro ao excluir o cliente: ' + erro.message);
                // Se ocorrer um erro, retorne um status de erro e uma mensagem descritiva
                return { status: false, mensagem: "Erro ao excluir o cliente." };
            }
        } else {
            // Cliente inválido
            return { status: false, mensagem: "Cliente inválido." };
        }
    }


    // Consultar dados por nome
    async consultar(nome) {
        const conexao = await conectar();

        const bd = 'SELECT * FROM cliente WHERE nome LIKE ?';
        const valores = ['%' + nome + '%'];
        const [rows] = await conexao.query(bd, valores);

        const ListaClientes = [];
        for (const row of rows) {
            const cliente = new Cliente(row['cpf'], row['nome'], row['dataNasc'], row['telefone'], row['email'], row['cep'], row['logradouro'], row['numero'], row['complemento'], row['bairro'], row['cidade'], row['uf']);
            ListaClientes.push(cliente);
        }
        return ListaClientes;
    }

    // Consulta por CPF
    async consultaCpf(cpf) {
        const conexao = await conectar();

        const bd = 'SELECT * FROM cliente WHERE cpf = ?';
        const valores = [cpf];
        const [rows] = await conexao.query(bd, valores);

        const ListaClientes = [];
        for (const row of rows) {
            const cliente = new Cliente(row['cpf'], row['nome'], row['dataNasc'], row['telefone'], row['email'], row['cep'], row['logradouro'], row['numero'], row['complemento'], row['bairro'], row['cidade'], row['uf']);
            ListaClientes.push(cliente);
        }
        return ListaClientes;
    }
}