import ClienteBD from "../Persistencia/ClienteBD.js";

export default class Cliente {

    #cpf;
    #nome;
    #dataNasc;
    #telefone;
    #email;
    #cep;
    #logradouro;
    #numero;
    #complemento;
    #bairro;
    #cidade;
    #uf;

    constructor(cpf, nome, dataNasc, telefone, email, cep, logradouro, numero, complemento, bairro, cidade, uf) {
        this.#cpf = cpf;
        this.#nome = nome;
        this.#dataNasc = dataNasc;
        this.#telefone = telefone;
        this.#email = email;
        this.#cep = cep;
        this.#logradouro = logradouro;
        this.#numero = numero;
        this.#complemento = complemento;
        this.#bairro = bairro;
        this.#cidade = cidade;
        this.#uf = uf;
    }

    get cpf() {
        return this.#cpf;
    }

    get nome() {
        return this.#nome;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
    }

    get dataNasc() {
        return this.#dataNasc;
    }

    set dataNasc(novaData) {
        this.#dataNasc = novaData;
    }

    get telefone() {
        return this.#telefone;
    }

    set telefone(novoNumero) {
        this.#telefone = novoNumero;
    }

    get email() {
        return this.#email;
    }

    set email(novoEmail) {
        this.#email = novoEmail;
    }

    get cep() {
        return this.#cep;
    }

    set cep(novoCEP) {
        this.#cep = novoCEP;
    }

    get logradouro() {
        return this.#logradouro;
    }

    set logradouro(novoEndereco) {
        this.#logradouro = novoEndereco;
    }

    get numero() {
        return this.#numero;
    }

    set numero(novoNumero) {
        this.#numero = novoNumero;
    }

    get complemento() {
        return this.#complemento;
    }

    set complemento(novoComplemento) {
        this.#complemento = novoComplemento;
    }

    get bairro() {
        return this.#bairro;
    }

    set bairro(novoBairro) {
        this.#bairro = novoBairro;
    }

    get cidade() {
        return this.#cidade;
    }

    set cidade(novaCidade) {
        this.#cidade = novaCidade;
    }

    get uf() {
        return this.#uf;
    }

    set uf(novaUF) {
        this.#uf = novaUF;
    }

    // Objeto ToJSON
    toJSON() {
        return {
            'cpf': this.#cpf,
            'nome': this.#nome,
            'dataNasc': this.#dataNasc,
            'telefone': this.#telefone,
            'email': this.#email,
            'cep': this.#cep,
            'logradouro': this.#logradouro,
            'numero': this.#numero,
            'complemento': this.#complemento,
            'bairro': this.#bairro,
            'cidade': this.#cidade,
            'uf': this.#uf
        }
    }

    // Métodos para interação com o banco de dados

    async gravar() {
        const clienteBD = new ClienteBD();
        await clienteBD.gravar(this);
    }

    async alterar() {
        const clienteBD = new ClienteBD();
        await clienteBD.alteracao(this);
    }

    async consulta(nome) {
        const clienteBD = new ClienteBD();
        const ListaClientes = await clienteBD.consultar(nome)
        return ListaClientes;
    }

    async apagarCliente() {
        const clienteBD = new ClienteBD();
        await clienteBD.excluir(this);
    }

    async consultarCliente(cpf) {
        const clienteBD = new ClienteBD();
        const ListaClientes = await clienteBD.consultaCpf(cpf)
        return ListaClientes;
    }
}