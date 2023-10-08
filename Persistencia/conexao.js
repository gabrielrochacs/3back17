// Neste arquivo é programada a conexão com o Banco de Dados

import mysql from 'mysql2/promise'; 

export default async function conectar(){  
    if(global.conexao && global.conexao.status != 'disconnected'){
        return global.conexao;
    }    
    
    const conexao = await mysql.createConnection({
        host:'129.146.68.51',   // Tipo de conexão
        user:'aluno17-pfsii',        // root = Super Usuário  
        port: 3306,
        password:'gYFI7G9B9SPQETKqM6Pn',        // Senha
        database: 'backend17' // Nome do banco de dados
});

    global.conexao = conexao; // Oficializa conexão
    return conexao

}; 




