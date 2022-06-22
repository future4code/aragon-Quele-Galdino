# LABEDRINKS
Esta API gerencia lista de drinks avaliados.

## INSTRUÇÕES GERAIS

### AUTENTICAÇÃO
Toda requisição deve ter uma identificação de quem está fazendo a requisição. Ela deve ser enviada por meio do header Authorization, da seguinte forma:

```
Authorization: nome-sobrenome-turma
```

Por exemplo, se meu nome é Bob Marley e eu sou da turma Newton, o header deve ser:

```
Authorization: Bob-Marley-Newton
```

## REQUISIÇÕES

### REQUISIÇÃO 1

#### Método GET - Nome GetAllDrinks

Endereço url: https://labedrink.herokuapp.com/drink

#### DESCRIÇÃO
Esta requisição serve para ver todos os drinks registrados.

#### INPUT (Entrada)

Headers:

```
Authorization: nome-sobrenome-turma
```

#### OUTPUT (Saídas)

Retorna uma lista de drinks em forma de objetos com propriedades id, name, description e rating, onde:

id = id do drink
name = nome do drink
description = detalhes sobre o drink
rating = Nota do drink, de 0 a 10

Exemplo de resposta:
```
    {
    "result": [
        {
            "id": "bbd03622-f177-4840-8a21-e5292bca118c",
            "name": "Mojito",
            "description": "Coquetel à base de rum branco, originado em Cuba",
            "rating": 6.5
        },
        {
            "id": "0bd2ce4e-22da-41a6-a3cf-c1389a6a6b72",
            "name": "Tequila",
            "description": "Bebida alcoólica destilada feita da agave-azul, originada no México",
            "rating": 7
        }
    ]
    }
```

### REQUISIÇÃO 2

#### Método GET - Nome GetDrinkById

Endereço url: https://labedrink.herokuapp.com/drink/:id

#### DESCRIÇÃO

Esta requisição serve para ver um drink selecionado por seu id.

#### INPUT (Entrada)

Headers:

```
Authorization: nome-sobrenome-turma
```

Params:

```
id: drinkId
```

#### OUTPUT (Saídas)

Retorna um drink em forma de objeto com propriedades id, name, description e rating, onde:

id = id do drink
name = nome do drink
description = detalhes sobre o drink
rating = Nota do drink, de 0 a 10

Exemplo de resposta:
```
    {
    "result":
        {
            "id": "bbd03622-f177-4840-8a21-e5292bca118c",
            "name": "Mojito",
            "description": "Coquetel à base de rum branco, originado em Cuba",
            "rating": 6.5
        }
    }
```

### REQUISIÇÃO 3

#### Método POST - Nome CreateDrink

Endereço url: https://labedrink.herokuapp.com/drink

#### DESCRIÇÃO

Esta requisição serve para criar um novo drink.

#### INPUT (Entrada)

Headers:

```
Authorization: nome-sobrenome-turma
```

Body: Representa um drink em forma de objeto com propriedades name, description e rating, onde:

name = nome do drink
description = detalhes sobre o drink
rating = Nota do drink, de 0 a 10

Exemplo de tipagem das propriedades do objeto body:
```
    {
        "name": "string",
        "description": "string",
        "rating": number
    }
```

Observação: O id do drink é criado pela própria API.

#### OUTPUT (Saídas)

É esperado a mensagem "Drink criado com sucesso!" como resposta.

### REQUISIÇÃO 4

#### Método PUT - Nome UpdateDrinkRating

Endereço url: https://labedrink.herokuapp.com/drink/:id

#### DESCRIÇÃO

Esta requisição serve para alterar a nota de um drink.

#### INPUT (Entrada)

Headers:

```
Authorization: nome-sobrenome-turma
```

Params:

```
id: drinkId
```

Body: Objeto com propriedade rating, onde:

rating = Nota do drink, de 0 a 10

Exemplo de tipagem das propriedades do objeto body:
```
    {
        "rating": number
    }
```

#### OUTPUT (Saídas)

É esperado a mensagem "Nota do Drink atualizado com sucesso!" como resposta.

### REQUISIÇÃO 5

#### Método DELETE - Nome DeleteDrink

Endereço url: https://labedrink.herokuapp.com/drink/:id

#### DESCRIÇÃO

Esta requisição serve para remover um drink da lista.

#### INPUT (Entrada)

Headers:

```
Authorization: nome-sobrenome-turma
```

Params:

```
id: drinkId
```

#### OUTPUT (Saídas)

É esperado a mensagem "Drink removido com sucesso!" como resposta.