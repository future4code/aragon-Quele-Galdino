//Exercicio 2

//Crie um arquivo chamado data.ts que exporta um array de produtos. Cada produto será representado por um objeto com propriedades: id (string), name (string) e price (number). Insira manualmente ao menos 3 produtos neste array.
//Dicas:
//• Os produtos devem ser representados por um type específico, com as propriedades definidas anteriormente.
//• A lista de produtos será um type[ ]

export type Products = {
    id: string,
    name: string,
    price: number
}

export let products: Products[] = [
{id: "um", name: "paper", price: 5.99},
{id: "dois", name: "book", price: 10.99},
{id: "tres", name: "pencil", price: 1.99}
]
