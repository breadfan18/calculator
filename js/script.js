/* 
Calculator logic

- User clicks numbers one at a time, that updates the display 
- When user clicks on one of the actions, we capture whats on the display and store it
- user then selects another number, 
- when user click on = , we capture whats on display and store it
- based on what action was selected, we invoke the fucntion that does the math. 
*/

//variables
let placeholderNum = '',
    firstNum = 0,
    secondNum = 0,
    numArr = [],
    operator = '';

let $display = $('.display');


//functions 
function setPlaceholder() {
    placeholderNum = (placeholderNum + $(this).text());
    $display.text(placeholderNum);
}


function calculate() {
    secondNum = parseInt($display.text());
    switch (operator) {
        case '+':
            $display.text(`${add(firstNum, secondNum)}`);
            break;
        case '-':
            $display.text(`${substract(firstNum, secondNum)}`);
            break;
        case 'x':
            $display.text(`${multiply(firstNum, secondNum)}`);
            break;
        case '/':
            $display.text(`${divide(firstNum, secondNum)}`);
            break;
        default:
            break;
    }
}

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function reset() {
    $display.text('0');
    firstNum = 0;
    secondNum = 0;
    operator = '';
    placeholderNum = '';
}

//Event listeners 
$('.calcBody').on('click', '.numbers', setPlaceholder);

$('.calcBody').on('click', '.actions', function (e) {
    firstNum = parseInt($display.text());
    $display.text('');
    placeholderNum = '';
    operator = e.target.textContent;
});


$('.calcBody').on('click', '.equals', calculate);

$('.calcBody').on('click', '.reset', reset);