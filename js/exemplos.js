
// variáveis em javascript
let nome = "Luiz"           /* pode ter o valor alterado */
const idade = 23            /* não pode ter seu valor alterado */
var cidade = "Limeira"      /* uso genérico */

// Usando concatenação
console.log(nome + " tem " + idade + " e mora em " + cidade)

// Usando template string
console.log(`${nome} tem ${idade} e mora em ${cidade}`)

// Estruturas condicionais
if (idade >= 18) {
    console.log("É maior de idade ")
} else {
    console.log("É menor de idade ")
}

// Mesmo exemplo acima, usando operador ternário
let resultado = idade >= 18 
    ? "Maior de idade" 
    : "Menor de idade"
console.log(resultado)

// Estruturas de repetição
const lista_de_pizzas = ["Portuguesa", "Frango", "Quatro queijos", "Peperoni", "Americana", "Bacon"]

console.log(lista_de_pizzas[0])

// Foreach para iterar sobre o array
lista_de_pizzas.forEach(
    function (pizza) {
        console.log(pizza)
    }
)

// Exemplo de tabuada
for (let i = 1; i <= 10; i++) {
    console.log(`Tabuada do ${i}`)
    for (let x = 1; x <= 10; x++) {
        let resultado = i * x
        console.log(`${i} x ${x} = ${resultado}`)
    }
}


// Uso de funções no javascript. 1 - Funções do Javascript. 2 - Funções de usuários

const texto = "Hoje é segunda-feira, dia de estudar muito."
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
let palavras = texto.split("-")
console.log(palavras)

const dataUsuario = "04/11/2024"
const itens = dataUsuario.split("/")
console.log(itens)
const dataBanco = `${itens[2]}-${itens[1]}-${itens[0]}`
console.log(dataBanco)

// Exemplo de função de usuário
function dataformatada(data,formato){
    //alert("a função foi chamada e recebeu como parâmetro: " + data)
    if (formato == "uTOb") {
        const itens = data.split("/")
        const dataFinal = `${itens[2]}-${itens[1]}-${itens[0]}`
        return dataFinal
    } else {
        const itens = data.split("-")
        const dataFinal = `${itens[2]}/${itens[1]}/${itens[0]}`
        return dataFinal
    }
}

let dataFormatoBanco = dataformatada("22/12/2024","uTOb")
console.log("A data no formato banco é: " + dataFormatoBanco)

let dataFormatoUsuario = dataformatada("2024-11-09","bTOu")
console.log("A data no formato usuário é: " + dataFormatoUsuario)

// Objeto em Javascript
const pessoa = {
    nome: "João",           // propriedade chave: valor
    idade: 25,
    cidade: "Limeira"
}
console.log(pessoa.nome)








