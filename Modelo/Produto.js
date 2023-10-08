import ProdutoBD from "../Persistencia/ProdutoBD.js";

export default class Produto {

    #id;
    #nome;
    #preco;
    #descricao;

    constructor(id, nome, preco, descricao) {
        this.#id = id;
        this.#nome = nome;
        this.#preco = preco;
        this.#descricao = descricao;
    }

    get id() {
        return this.#id;
    }

    set id(novoId) {
        this.#id = novoId;
    }

    get nome() {
        return this.#nome;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
    }

    get preco() {
        return this.#preco;
    }

    set preco(novoPreco) {
        this.#preco = novoPreco;
    }

    get descricao() {
        return this.#descricao;
    }

    set descricao(novaDescricao) {
        this.#descricao = novaDescricao;
    }

    // Objeto ToJSON
    toJSON() {
        return {
            'id': this.#id,
            'nome': this.#nome,
            'preco': this.#preco,
            'descricao': this.#descricao
        }
    }

    // Métodos para interação com o banco de dados

    async gravar() {
        const produtoBD = new ProdutoBD();
        this.id = await produtoBD.gravar(this);
    }

    async editar() {
        const produtoBD = new ProdutoBD();
        await produtoBD.editar(this);
    }

    async excluir() {
        const produtoBD = new ProdutoBD();
        await produtoBD.excluir(this);
    }

    async consulta() {
    const produtoBD = new ProdutoBD();
    const listaProdutos = await produtoBD.consulta();
    return listaProdutos;
}

    static async consultarTodos() {
        const produtoBD = new ProdutoBD();
        const ListaProdutos = await produtoBD.consultarTodos();
        return ListaProdutos;
    }

    static async consultaPorId(id) {
        const produtoBD = new ProdutoBD();
        const ListaProdutos = await produtoBD.consultaPorId(id);
        return ListaProdutos;
    }
};