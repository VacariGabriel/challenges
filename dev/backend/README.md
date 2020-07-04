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
- JWT
- Jest
- Docker

## Como rodar o projeto ?

Clone o repositório

`git clone https://github.com/VacariGabriel/challenges.git`

Navegue até o diretório

`cd challenges/dev/backend/`

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

  docker run -p 3333:3333 ihero:1.0.0
```

## Endpoints

- /login - (POST)
- /hero - (POST)
- /authorized/heroes - (GET, POST, PUT e DELETE)
- /authorized/historic - (GET)

## Requests

- /login - GET

```json
{
  "login": "sait",
  "password": "123"
}
```

**Response**

```json
{
  "message": "Login realizado com sucesso",
  "token": *token*
}
```

- /hero - POST

```json
{
  "name": "Death Gatling",
  "login": "gat",
  "password": "2025",
  "lat": -11.409874,
  "lng": -41.280857,
  "rank": "A"
}
```

**Response**

```json
{
  "message": "Herói criado com sucesso"
}
```

- /authorized/heroes - GET

Authorization: _token_

**Response**

```json
[
  {
    "id": 1,
    "name": "Saitama",
    "lat": 53.6062532721887,
    "lng": -2.121395227451485,
    "rank": "C"
  },
  {
    "id": 2,
    "name": "Mumen Rider",
    "lat": -39.695807,
    "lng": -91.235771,
    "rank": "B"
  }
]
```

- /authorized/heroes - PUT

Authorization: _token_

```json
{
  "id": 2,
  "name": "Iaian",
  "rank": "A"
}
```

**Response**

```json
{
  "message": "Herói atualizado com sucesso "
}
```

- /authorized/heroes - DELETE

Authorization: _token_

```json
{
  "id": 2
}
```

**Response**

```json
{
  "message": "Herói deletado com sucesso"
}
```

- /authorized/historic - GET

**Response**

```json
[
  {
    "hero_name": "Genos",
    "hero_rank": "S",
    "threat_name": "Very Strong Threat",
    "threat_rank": "God"
  },
  {
    "hero_name": "Máscara Doce",
    "hero_rank": "A",
    "threat_name": "Medium Threat",
    "threat_rank": "Dragon"
  }
]
```
