import { Router } from "express";
import ItensVendaCtrl from "../Controle/ItensVendaCtrl.js"; // Certifique-se de importar o controle adequado

const rotaItensVenda = Router();
const itensVendaCtrl = new ItensVendaCtrl();

rotaItensVenda
    .post("/", itensVendaCtrl.gravar)
    .put("/", itensVendaCtrl.editar)
    .delete("/", itensVendaCtrl.excluir)
    .get("/", itensVendaCtrl.consultar);

export default rotaItensVenda;