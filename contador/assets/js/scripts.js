htmlCurrentNumber= document.getElementById("currentNumber")
 let count = 0;

function decrement (){
    count--;
    htmlCurrentNumber.innerHTML = count
    
}
function increment (){
    count++;
    htmlCurrentNumber.innerHTML = count
    
}


// com eventos

let btnIncrement = document.getElementById("increment") 
let btnDecrement = document.getElementById("decrement") 

const htmlcurrentNumberEvent = document.getElementById("currentNumberEvent")
const alert = document.getElementById("alert")
let countEvent = 0

function color(){
    if (countEvent > 0){
        htmlcurrentNumberEvent.style.color="#0000FF";
    }else if(countEvent < 0 ){
        htmlcurrentNumberEvent.style.color="#FF0000";
    }else if(countEvent == 0){
        htmlcurrentNumberEvent.style.color="#FFF";
    }
}
function alertText(){
    if (countEvent >=10){
        btnIncrement.setAttribute("disabled", "disabled")
        alert.innerHTML = "O contador chegou ao numero limite"
    }else if(countEvent <10 || countEvent == 0) {
        btnIncrement.removeAttribute("disabled", "disabled")
        alert.innerHTML = ""
    }
}

function decrementEvent (){
    countEvent--;
    htmlcurrentNumberEvent.innerHTML = countEvent
    }
    
function incrementEvent (){
    countEvent++;
    htmlcurrentNumberEvent.innerHTML = countEvent
}

btnDecrement.addEventListener("click", decrementEvent);
btnDecrement.addEventListener("click", color);
btnDecrement.addEventListener("click", alertText);

btnIncrement.addEventListener("click", incrementEvent,)
btnIncrement.addEventListener("click", color,)
btnIncrement.addEventListener("click", alertText,)