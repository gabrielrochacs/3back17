import VendaBD from "../Persistencia/VendaBD.js";

export default class Venda {

    #id;
    #data;
    #valor;
    #cliente_id;

    constructor(id, data, valor, cliente_id) {
        this.#id = id;
        this.#data = data;
        this.#valor = valor;
        this.#cliente_id = cliente_id;
    }

    get id() {
        return this.#id;
    }

    set id(novoId) {
        this.#id = novoId;
    }

    get data() {
        return this.#data;
    }

    set data(novaData) {
        this.#data = novaData;
    }

    get valor() {
        return this.#valor;
    }

    set valor(novoValor) {
        this.#valor = novoValor;
    }

    get cliente_id() {
        return this.#cliente_id;
    }

    set cliente_id(novoClienteId) {
        this.#cliente_id = novoClienteId;
    }

    // Objeto ToJSON
    toJSON() {
        return {
            'id': this.#id,
            'data': this.#data,
            'valor': this.#valor,
            'cliente_id': this.#cliente_id
        }
    }

    // Métodos para interação com o banco de dados

    async gravar() {
        const vendaBD = new VendaBD();
        this.id = await vendaBD.gravar(this);
    }

    async editar() {
        const vendaBD = new VendaBD();
        await vendaBD.editar(this);
    }

    async excluir() {
        const vendaBD = new VendaBD();
        await vendaBD.excluir(this);
    }

    async consulta() {
        const vendaBD = new VendaBD();
        const listaVendas = await vendaBD.consultar();
        return listaVendas;
    }

    static async consultarPorCliente(cliente_id) {
        const vendaBD = new VendaBD();
        const ListaVendas = await vendaBD.consultarPorCliente(cliente_id);
        return ListaVendas;
    }

    static async consultaPorId(id) {
        const vendaBD = new VendaBD();
        const ListaVendas = await vendaBD.consultaPorId(id);
        return ListaVendas;
    }
};