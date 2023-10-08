import { Router } from "express";
import VendaCtrl from "../Controle/VendaCtrl.js"; // Certifique-se de importar o controle adequado

const rotaVendas = Router();
const vendaCtrl = new VendaCtrl();

rotaVendas
    .post("/", vendaCtrl.gravar)
    .put("/", vendaCtrl.editar)
    .delete("/", vendaCtrl.excluir)
    .get("/", vendaCtrl.consultar);

export default rotaVendas;