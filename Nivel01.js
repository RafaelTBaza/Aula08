//01
let chamada = ["ana", "bruno", "carla", "diego", "elena"]
function fnExibirChamada(lista){

   if(lista == "abre"){
    console.log("Quem abre a chamada é " + chamada[0])
   }
   if(lista == "fecha"){
    console.log("Quem abre a chamada é " + chamada[4])
   }
if(lista == "qnt"){
    console.log("Há " + chamada.length + " Alunos na lista de chamada")
   }


}

//02
let produtos = ["Teclado Mecanico", "Mouse Gamer"]
 function fnAdicionarProduto(lista, novoItem){

   if(lista == produtos){
      produtos.push(novoItem)
   }
   console.log(produtos)
 }

 //03
 let filaPostoSaude = ["Marcos", "Juliana", "Roberto"]
 function fnEncaixarPrioridade(fila, nomePaciente){
   if(fila == filaPostoSaude && nomePaciente == "Dona Clara(Idosa)"){
      filaPostoSaude.unshift(nomePaciente)

   }else{
      filaPostoSaude.push(nomePaciente)
   }
   console.log(filaPostoSaude)
 }

 //04
 let primeiroFila = filaPostoSaude.shift()
 function fnChamarProximo(fila){
if(fila == filaPostoSaude){
   console.log("O proximo paciente é: " + primeiroFila)
   console.log("pacientes na fila: " + filaPostoSaude)
}
 }

 //05
 let editorTexto = ["Escreveu título", "Aplicou negrito", "Inseriu tabela"]
function fnDesfazerAcao(lista){
   if(lista == editorTexto){
      editorTexto.pop()
      console.log(editorTexto)
   }
}

//06
let almoxarifado = ["Camiseta", "Calça", "Tênis", "Boné"]
function fnVerificarEstoque(lista){
if(lista == almoxarifado){
   console.log("há " + almoxarifado.length + " itens na lista")
}
}

//07
let listaOficial = ["Lucas", "Mariana", "Thiago", "Beatriz"]
function fnEstaNaLista(lista, nome){
   if(lista.includes(nome)){
      console.log(nome + " Esta na lista")
   }else{
      console.log(nome + " Não esta na lista")
   }
}

//08
let corredor = ["Arroz", "Feijão", "Açucar", "Café", "Sal"]
function fnConsultarCorredor(lista, item){
   if(lista == corredor && item == corredor[0] || corredor[1] || corredor[2] || corredor[3] || corredor[4]){
    console.log(item + " Esta na lista de corredores")
   }else{
      console.log(item + "Não Consta na lista de Corredores")
   }
   if(lista == corredor && item == "Café"){
      console.log(item + " Se encontra no 4° Corredor ")
   }
   if(lista == corredor && item == "Arroz"){
      console.log(item + " Se encontra no 1° Corredor ")
   }
   if(lista == corredor && item == "Feijão"){
      console.log(item + " Se encontra no 2° Corredor ")
   }
   if(lista == corredor && item == "Açucar"){
      console.log(item + " Se encontra no 3° Corredor ")
   }
   if(lista == corredor && item == "Sal"){
      console.log(item + " Se encontra no 5° Corredor ")
   }
   
   
   
   
   }

//09
let precoLanche = ["15.00", "25.00", "40.00"]
function fnAtualizarPreco(lista, indice, novoValor){
   if(lista == precoLanche && indice == precoLanche[0]){
      precoLanche[0] = novoValor
      console.log("Alteração de valores concluida")
      console.log(precoLanche)
   }
      if(lista == precoLanche && indice == precoLanche[1]){
      precoLanche[1] = novoValor
      console.log("Alteração de valores concluida")
      console.log(precoLanche)
   }
      if(lista == precoLanche && indice == precoLanche[2]){
      precoLanche[2] = novoValor
      console.log("Alteração de valores concluida")
      console.log(precoLanche)
   }
}

//10
function fnCriarBoletim(nota1, nota2, nota3){
   let notasAluno = [nota1, nota2, nota3]

console.log("Boletim:" + notasAluno)

}
