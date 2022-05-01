const display1E1 = document.querySelector('.display-1');
const display2E1 = document.querySelector('.display-2');
const resultDisplayE1 = document.querySelector('.result-display');
const numberE1 = document.querySelectorAll('.number');
const operationE1 = document.querySelectorAll('.operation');
const equalE1 = document.querySelector('.equal');
const clearE1 = document.querySelector('.all-clear');
const clearLastE1 = document.querySelector('.clear-lastaction');


let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveFullstop = false;

numbersE1.forEach( number => (  
    
    number.addEventlistener( 'click', (e)=> (
    if( e.target.innerText === '.' &&  |haveFullstop){
        haveFullstop = true;
    }else if( e.target.innerText === '.'  &&  haveFullstop){
        result;
        }
      dis2Num += e.target.innerText;
      display2E1.innerText = dis2Num;


}) 

});



    