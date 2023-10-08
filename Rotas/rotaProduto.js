import { Router } from "express";
import ProdutoCtrl from "../Controle/ProdutoCtrl.js"; // Certifique-se de importar o controle adequado

const rotaProdutos = Router();
const produtoCtrl = new ProdutoCtrl();

rotaProdutos
    .post("/", produtoCtrl.gravar)
    .put("/", produtoCtrl.editar)
    .delete("/", produtoCtrl.excluir)
    .get("/", produtoCtrl.consultar);

export default rotaProdutos;