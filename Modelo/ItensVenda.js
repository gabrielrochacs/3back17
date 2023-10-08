import ItensVendaBD from '../Persistencia/ItensVendaBD.js';

export default class ItensVenda {

    #id;
    #produto_id;
    #quantidade;
    #venda_id;

    constructor(id, produto_id, quantidade, venda_id) {
        this.#id = id;
        this.#produto_id = produto_id;
        this.#quantidade = quantidade;
        this.#venda_id = venda_id;
    }

    get id() {
        return this.#id;
    }

    set id(novoId) {
        this.#id = novoId;
    }

    get produto_id() {
        return this.#produto_id;
    }

    set produto_id(novoProdutoId) {
        this.#produto_id = novoProdutoId;
    }

    get quantidade() {
        return this.#quantidade;
    }

    set quantidade(novaQuantidade) {
        this.#quantidade = novaQuantidade;
    }

    get venda_id() {
        return this.#venda_id;
    }

    set venda_id(novaVendaId) {
        this.#venda_id = novaVendaId;
    }

    // Objeto ToJSON
    toJSON() {
        return {
            'id': this.#id,
            'produto_id': this.#produto_id,
            'quantidade': this.#quantidade,
            'venda_id': this.#venda_id
        }
    }

    // Métodos para interação com o banco de dados

    async gravar() {
        const itensVendaBD = new ItensVendaBD();
        this.id = await itensVendaBD.gravar(this);
    }

    async editar() {
        const itensVendaBD = new ItensVendaBD();
        await itensVendaBD.editar(this);
    }

    async excluir() {
        const itensVendaBD = new ItensVendaBD();
        await itensVendaBD.excluir(this);
    }

    async consulta(){
        const itensVendaBD = new ItensVendaBD();
        const ListaItensVenda = await itensVendaBD.consulta();
        return ListaItensVenda;
    }

    static async consultarPorVenda(venda_id) {
        const itensVendaBD = new ItensVendaBD();
        const ListaItensVenda = await itensVendaBD.consultarPorVenda(venda_id);
        return ListaItensVenda;
    }

    static async consultaPorId(id) {
        const itensVendaBD = new ItensVendaBD();
        const ListaItensVenda = await itensVendaBD.consultaPorId(id);
        return ListaItensVenda;
    }
};