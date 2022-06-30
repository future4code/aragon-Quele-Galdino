//Exercicio 2

// Crie 1 objeto que representa a sua pessoa e possua 3 propriedades:
// • nome, de tipo string;
// • idade, de tipo number;
// • corFavorita, enum das cores do arco-íris.

enum CoresFavoritas {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZULCLARO = "azul-claro",
    AZUL = "azul",
    ROXO = "roxo"
}
const pessoa: {nome: string, idade: number, cores: string} = {nome: "Quele", idade: 46, cores: CoresFavoritas.LARANJA}
console.log(pessoa)
