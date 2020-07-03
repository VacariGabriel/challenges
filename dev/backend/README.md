# iHero

Sistema de gerenciamento de distribuição de Heros para combater ameaças.

## O que achei ?

Achei o tema bem interessante, com total referência ao One Punch-Man por isso foi bem legal desenvolver. Tive algumas dificuldades na implementação da regra de negócio, voltando atrás em algumas decisões porém consegui desenvolver bastante com os meus conhecimentos em Nodejs e JS.

## Como foi feito o projeto

- Modelagem dos dados
- Criação do projeto
- Implementação da modelagem
- Testes das funcionalidades
- Criação das funcionalidades
- Refatoração

A primeira coisa feita após o entendimento do problema foi a modelagem de dados, depois a criação do projeto e a implementação da mogelagem com **knex** e **sqlite3**. Com a modelagem implementada foi criado as migrations e seed e logo em seguida os testes das funcionalidades, conforme o retorno dos testes utilizei _baby steps_ para a implementação das funcionalidades até que o teste passasse.
Ao decorrer do desenvolvimento foram feitos ajustes nas dependências e até mesmo na modelo do banco.

_Observação_
O arquivo .env esta no repositório para fins de facilidade para o avaliador, apenas isso.

## Principais tecnologias

- Express
- Knex
- Sqlite3
- Jest
- Docker

## Como rodar o projeto ?

**Sem Docker**

```
  npm install

  npm run knex:migrate

  npm run knex:seed

  npm test

  npm run dev
```

**Com Docker**

```
  docker build -t ihero:1.0.0 .

  docker run -p 3333:3333 iheros:1.0.0
```
