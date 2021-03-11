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
    operator = '';

let $display = $('.display');

//functions 
function setPlaceholder() {
    placeholderNum = (placeholderNum + $(this).text());
    $display.val(placeholderNum);
}

function setNums() {
    firstNum = $display.val();
    $display.val('');
    placeholderNum = '';
    $display.val(operator);
}

function calculate() {
    secondNum = $display.val();
    console.log(firstNum)
    console.log(secondNum);;
    switch (operator) {
        case '+':
            $display.val(`${add(firstNum, secondNum)}`);
            break;
        case '-':
            $display.val(`${substract(firstNum, secondNum)}`);
            break;
        case '*':
            $display.val(`${multiply(firstNum, secondNum)}`);
            break;
        case '/':
            $display.val(`${divide(firstNum, secondNum)}`);
            break;
        case '÷':
            $display.val(`${divide(firstNum, secondNum)}`);
            break;
        default:
            break;
    }

    firstNum = 0;
    secondNum = 0;
    placeholderNum = '';
}


function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function substract(a, b) {
    return parseFloat(parseFloat(a) - parseFloat(b)).toFixed(2);
}

function multiply(a, b) {
    return parseFloat(parseFloat(a) * parseFloat(b)).toFixed(2);
}

function divide(a, b) {
    return parseFloat(parseFloat(a) / parseFloat(b)).toFixed(2);
}

function reset() {
    $display.val('0');
    firstNum = 0;
    secondNum = 0;
    operator = '';
    placeholderNum = '';
}

//Event listeners 
$('.calcBody').on('click', '.numbers', setPlaceholder);

$('.calcBody').on('click', '.actions', function (e) {
    operator = e.target.textContent;
    setNums();
});

$('.calcBody').on('click', '.equals', calculate);

$('.calcBody').on('click', '.reset', reset);


$('body').on('keypress', function (e) {
    if (e.key.match('^[0-9.]*$')) {
        placeholderNum = placeholderNum + e.key;
        $display.val(placeholderNum);
    } else if (e.key.match('^[\-|+|*|/]')) {
        operator = e.key;
        setNums();
    } else if (e.keyCode === 13) {
        calculate();
    };
});