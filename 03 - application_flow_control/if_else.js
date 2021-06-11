/* if ... else

if (condição1)
   instrução1
else if (condição2)
   instrução2
else if (condição3)
   instrução3
...
else
   instruçãoN

*/
// let temperature = 36

// if(temperature >= 37.5){
//     console.log('febre alta')
// }else if (temperature < 37.5 && temperature >=37) {
//     console.log('Febre moderada')
// }else {
//     console.log('Saudável')
// }


/*
    Melhorando o codigo 
*/

let temperature = 36

let highTemperature = temperature >=37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature){
    console.log('febre alta')
}else if (mediumTemperature) {
    console.log('Febre moderada')
}else {
    console.log('Saudável')
}
