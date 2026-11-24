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