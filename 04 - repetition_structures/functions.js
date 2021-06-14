/*
Estrtura de repetição
    FOR

    for ([inicialização]; [condição]; [expressão final])
   declaração

   ex: 
   for (var i = 0; i < 9; i++) {
   console.log(i);
   // more statements
}

*/

//Padrão
for(let i=0; i <10; i++){
    console.log(i)
}

console.log("++++++++++++++++++(º____º)++++++++++++++++++")

/*for com opcionais (Break)
    Break ==> utilizado para parar o codigo em certo ponto no caso do exemplo a 
baixo ele para no 50
*/

for(let n=100; n > 0; n--){
    if(n === 50){
        break
    }
    
    console.log(n)
}

console.log("++++++++++++++++++(º____º)++++++++++++++++++")

/*for com opcionais (continue)
    Continue ==> utilizado para pular um ponto no codigo, exemplo a 
baixo ele pula o 5 e contnua 
*/
for(let m=10; m > 0; m--){
    if(m === 5){
        continue
    }
    
    console.log(m)
}