# Aula - Requisições HTTPs

## Inicie o projeto por aqui
- Passo 1: Crie uma branch a partir da branch master para trabalhar no exercício de hoje. O nome da branch de hoje deve ser: labedrinks;
- Passo 2: Dentro da pasta do módulo atual, crie uma pasta chamada labedrinks para trabalhar no exercício de hoje;
- Passo 3: Para entrega, siga os passos do enunciado

## Enunciado
Hoje, vocês irão praticar o consumo de requisições usando as extensões Thunder Client/ REST Client no VSCode. A atividade será feita utilizando a API chamada LabeDrinks. Ela possibilitará que vocês criem, editem, encontrem e removam drinks em uma lista de registros.

Acesse a documentação no seguinte arquivo: documentacao-labe-drinks.md

## Entrega
Para a entrega, vocês criarão uma pasta de nome req-http para esta aula. Dentro dela, vocês colocarão os arquivos contendo as requisições criadas. A seguir, temos orientações de uso e criação dos documentos necessários usando REST Client ou Thunder Client.

### Usando o REST Client
Para utilização do REST Client, utilize o documento a seguir: instrucoes-rest-client.md

### Usando o Thunder Client
Para utilização do Thunder Client, importe a coleção de requisições. Está localizado no seguinte arquivo:
LabeDrinks.postman_collection.json

## Exercícios

### Exercício 1
Comece criando seus 3 drinks favoritos, dando nome, descrição e uma nota.
Dica1: Use o endpoint CreateDrink
Dica2: Crie um drink de cada vez.

### Exercício 2
Verifique se os drinks criados aparecem em sua lista de drinks.
Dica: Use o endpoint GetAllDrinks

### Exercício 3
Busque um drink específico criado.
Dica1: Use o endpoint GetDrinkById
Dica2: Pegue o id do drink pela requisição do exercício 2.

### Exercício 4
Modifique a nota de um drink.
Dica1: Use o endpoint UpdateDrinkRating
Dica2: Pegue o id do drink pela requisição do exercício 2.

### Exercício 5
Remova um drink da lista.
Dica1: Use o endpoint DeleteDrink
Dica2: Pegue o id do drink pela requisição do exercício 2.