const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;  
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        
        display.value = "Error";
        setTimeout(clearDisplay,500)
    }
    
}

function clearDisplay(){
    display.value = "";
}