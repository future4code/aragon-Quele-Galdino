// Exercicio 2

// Crie um função que receba uma string com o nome e outra string com uma data de nascimento (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato: 
// • Formato esperado de saída → “Olá, me chamo {NOME}, nasci no dia {DIA}, no mês de {MÊS} e ano de {ANO}.”
// • Entrada esperada → string, string
// • Saída esperada → string

// Dica: Para dividir a string da data utilize o método .split()

//console.log("20/09/75".split("/"))
function dados (nome: string, nascimento: string): string {
const data = nascimento.split("/")
return ` ola, meu nome é ${nome} e nasci no dia ${data[0]}, no mes ${data [1]}, no ano ${data [2]} `
}
console.log(dados("Quele", "20/09/75"))

