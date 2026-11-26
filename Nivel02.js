//11
let precos = [29.90, 54.00, 15.50, 80.00]

function sla(preco) {
    let soma = 0
    preco.forEach(preco => {
        soma += preco
    });
    console.log(soma);     
}
sla(precos)

//12
let nota = [6.5, 5.0, 7.5, 6.0 ]

function situacao (notas) {
    let soma = 0
    notas.forEach(notas => {
        soma += notas
    });
    media=soma/notas.length;

    if (media >= 6.0) {
        console.log ("nota: "+ media +" esta aprovado")
    } else {
         console.log ("nota: "+ media +" reprovado")
    }
}

situacao(nota)

//13
let idade = [14, 18, 25, 16, 32, 17, 19]

let maioresDeIdade = idade.filter (n => n >= 18)

console.log(maioresDeIdade)

//14
let nome = ["joao.silva", "maria.souza", "pedro.lima"]

function novoLogin (nome, novo) {
    if (nome.includes(novo)){
        console.log("login indisponivel pois ja tem user com este nome");
    }else{
        nome.unshift(novo)
        console.log("login adicionado: "+ nome);
    }
}

novoLogin (nome, "guizin.matador.de.porcox")

//15
let valores = [100, 200, 50, 80]

function aplicaDesconto(lista) {
   let novo = lista.map(lista => (lista-lista * 0.15))
   console.log(novo); 
}

aplicaDesconto(valores)

//16
let num = [12, 7, 5, 20, 33, 8, 11, 4]

function imparOuPar(num) {
    var par = 0
    var pararray = []
    var impararray = []

    var impar =0
    num.forEach(num => {
     if (num % 2 === 0){
         par ++
         pararray.push(num)
     } else {
        impararray.push(num)
        impar ++

     }
}); 
console.log(" =====ESSES SAO PAR=====\n"," ",par,pararray,"\n","=====ESSES SAO IMPAR=====\n", " ",impar,impararray);   
}
imparOuPar(num)

//17
let temp = [ 22, 29, 18, 31, 24,19]

var maior = temp[0]
var menor = temp[0]
temp.forEach(sla => {
    if (sla>maior) {
        maior=sla        
    }
    if(sla<menor){
        menor = sla
    }
});
console.log("menor valor; ", menor);
console.log("maior valor; ", maior)


//18
let sla = ["Hambúrguer", "Batata Frita", "Refrigerante", "Sobremesa"]

console.log(sla.indexOf("Batata Frita")+1)
sla.splice(1,1)
console.log(sla)

//19
let nomes = ["Amanda", "Carlos", "Arthur", "Bruna", "Alice", "Diego"]

let iniciacoma =  nome.filter(nomes => nomes.startsWith("A"))

console.log(iniciacoma);

//20


let prodQuanti = []

prodQuanti.push({name:"Notebook",quanti: 4 })
prodQuanti.push({ name:"Webcam", quanti: 0})
prodQuanti.push({name:  "Mousepad", quanti: 12})
prodQuanti.push({ name: "Cabo HDMI", quanti: 0})

prodQuanti.forEach(i => {
    if (i.quanti > 0){
        console.log(i);
        
    }
});