-- Criando a tabela de filmes

create table filmes (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT, 
    nome VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
)