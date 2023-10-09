import { Router } from "express";
import ClienteCtrl from "../Controle/ClienteCtrl.js"; // Certifique-se de importar o controle adequado

const rotaClientes = Router();
const clienteCtrl = new ClienteCtrl();

rotaClientes
    .post("/", clienteCtrl.gravarCliente)
    .put("/:cpf", clienteCtrl.editarCliente)
    .delete("/", clienteCtrl.excluirCliente)
    .get("/", clienteCtrl.consultarCliente);

export default rotaClientes;