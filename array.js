//[] colchetes = significa um array
// os valores são separador por virgula 
let nomes = ["Isa", "Victor", "Pedro", "Samuel", "Geovana"]

//console.log(nomes)
//console.log(nomes[3]) //consulta de posição (obs. a contagem de array começa em zero)

nomes[4] = "caleb" // substitui um valor em uma posição expecifica 

//console.log(nomes)

//console.log(nomes.length) // conta quantas informações eu tenho mo meu array

nomes[nomes.length] = "Geovana"

//console.log(nomes)

nomes.push("Nicolas") // adiciona um valor ao FINAL do array

//console.log(nomes)

nomes.unshift("Ro") // adiciona um valor ao COMEÇO do array

//console.log(nomes)

// remover valores

//nomes.pop() //.pop - remove o ultimo valor
//console.log(nomes)

//nomes.shift() //.shift - remove o primeiro valor 
//console.log(nomes)

// se eu queiser extrair a informaçã eu posso colocar dentro de uma variavel

//let ultimoNome = nomes.pop() // remove o ultimo valor porém guarda o valor em uma variavel 
//let primeiroNome = nomes.shift() // remove o primeiro valor porém guarda o valor em uma variavel 

//atividades
// 1 - faça uam lista com o nome de 5 colegas
// 2 - adicione no final dessa lista o nome de +1 colega
// 3 - adicione no começo dessa lista  o nome de um pet
// 4 - adicione agora no final da lista o nome de mais 2 a 5 colegas
// 5 - mostre a informação que esta salva na 4 posição
// 6 - extraia a primeira informação e salve na variavel PETS

// e se eu precisar validar que existe uma informação no array?
//console.log(nomes.includes("Samuel"))

// e se eu precisar saber em que posição (indiçe) essa informação esta?
//console.log(nomes.indexOf("Samuel"))

// e se eu precisar correr todo o array?
// => arrow function usado para definir uma função anonima
// () => {} declaração da função anomima
nomes.forEach((linha,contador)=>{
    console.log("O " + (contador + 1) + "º registro é " + linha)

 
})
