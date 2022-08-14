operation = '';
operationCount = 0;

buttons = document.getElementsByClassName('math-operation');

screen = document.getElementById('screen');
screen.innerHTML = operation;

buttonResult = document.getElementById('result');
buttonResult.addEventListener('mousedown',result);

buttonReset = document.getElementById('reset');
buttonReset.addEventListener('mousedown',reset);

let history = document.getElementById('history');

for(i = 0; i < buttons.length ; i++){
    value = buttons[i].innerHTML;

    buttons[i].addEventListener('mousedown', addValue.bind(this,value))
}

function updateScreen(){
    screen.innerHTML = operation;
}

function reset(){
    operation = '';
    updateScreen();
}

function addValue(value){
    operation += value;
    updateScreen();
}

function result(){
    try{ 
        let historyValue = document.createElement('div');
        let operationBefore = operation;

        operation = eval(operation);
        operationCount++;

        historyValue.innerHTML = operationCount + "=>" + operationBefore + " = " + operation;
        history.prepend(historyValue);

        updateScreen();
    }catch(erro){
        screen.innerHTML = "<div style = 'color:red'> Error </div>";
    }
}