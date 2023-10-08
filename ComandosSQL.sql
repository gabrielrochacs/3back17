CREATE TABLE Clientes (
    codigo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    telefone VARCHAR(20) NOT NULL
);

CREATE TABLE Produtos (
    codigo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    precoCusto DECIMAL(10, 2) NOT NULL,
    precoVenda DECIMAL(10, 2) NOT NULL,
    qtdEstoque INT NOT NULL,
    codigoCategoria INT NOT NULL,
    CONSTRAINT fk_categoria FOREIGN KEY (codigoCategoria) REFERENCES Categorias(codigo)
);

CREATE TABLE Categorias (
    codigo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

-- CREATE TABLE Vendas (
--     codigo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     dataVenda DATE NOT NULL,
--     nome_cliente VARCHAR(255) NOT NULL,
--     CONSTRAINT fk_cliente FOREIGN KEY (nome_cliente) REFERENCES Clientes(nome)
-- );

CREATE TABLE Vendas (
    codigo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dataVenda DATE NOT NULL,
    nome_cliente VARCHAR(255) NOT NULL,
    FOREIGN KEY (nome_cliente) REFERENCES Clientes(nome)
);

CREATE TABLE VendasProdutos (
    codigo_produto INT NOT NULL,
    codigo_venda INT NOT NULL,
    qtd_item FLOAT NOT NULL DEFAULT 1.0,
    valor_item FLOAT NOT NULL DEFAULT 0.0,
    valor_desconto FLOAT NOT NULL DEFAULT 0.0,
    PRIMARY KEY (codigo_produto, codigo_venda),
    FOREIGN KEY (codigo_produto) REFERENCES Produtos(codigo),
    FOREIGN KEY (codigo_venda) REFERENCES Vendas(codigo)
);










-- CREATE TABLE Vendas{
-- codigo int not null primary key auto_increment,
-- pessoa varchar(55) not null,
-- foreign key (pessoa_rifa) references rifa(pessoa)
-- }

-- CREATE TABLE Vendas_rifa{
-- codigo_rifa int not null,
-- codigo_Vendas int not null,
-- primary key(codigo_rifa,codigo_Vendas),
-- foreign key(codigo_rifa) references rifa(codigo),
-- foreign key(codigo_Vendas) references Vendas(codigo)
-- }

-- INSERT INTO Vendas(pessoa, valorTotal) VALUES('Gabriel', 100);

-- INSERT INTO Vendas_rifa(codigo_rifa, codigo_Vendas, qtd_rifa, valor_rifa) VALUES(1, 1, 2, 10);

-- CREATE TABLE rifa (
--     codigo INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
--     tipo VARCHAR(255),
--     premiacao VARCHAR(255),
--     dataInicio DATE,
--     dataSorteio DATE,
--     pessoa VARCHAR(255)
-- );

-- -------------------------------------------

-- CREATE TABLE rifa (
--     codigo INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
--     tipo VARCHAR(255),
--     premiacao VARCHAR(255),
--     dataInicio DATE,
--     dataSorteio DATE,
--     pessoa VARCHAR(255)
-- );

-- CREATE TABLE Vendas(
-- codigo int not null primary key auto_increment,
-- pessoa varchar(55) not null,
-- foreign key (pessoa_rifa) references rifa(pessoa)
-- )

-- CREATE TABLE Vendas_rifa(
-- codigo_rifa int not null,
-- codigo_Vendas int not null,
-- primary key(codigo_rifa,codigo_Vendas),
-- foreign key(codigo_rifa) references rifa(codigo),
-- foreign key(codigo_Vendas) references Vendas(codigo)
-- )

-- INSERT INTO contato (codigo, contato, metodo)
-- VALUES (23, '1899999999', 'SMS');