let operand1 = "";
let operator = "";
let operand2 = "";

function displayDoubleZeros()
{
    let result = document.getElementById("result");

    if (operator === "") 
    {
        if(operand1 === "" || operand1 === "0")
        {

        }
        else
        {
            operand1 += "00";
            result.value = operand1;
        }
    } 

    else 
    {
        operand2 += "00";
        result.value = operand1 + " " + operator + " " + operand2;
   }
}

function displayNum(button) {
    let result = document.getElementById("result");

    if (operator === "") 
    {
        if (operand1 === '0') 
        {
            operand1 = button.value;
        } 
        else
        {
            operand1 += button.value;
        }

        result.value = operand1;
    } 

    else 
    {
        operand2 += button.value;
        result.value = operand1 + " " + operator + " " + operand2;
    }
}


function displayOperators(op) {
    let result = document.getElementById("result");
    let resultInput = result.value;
    let lastChar = resultInput.slice(-1);

    // Check if the last character and the new operator are both operators
    if (resultInput === "" || /[x/%+-]/.test(lastChar) && /[x/%+-]/.test(op.value)) 
    {
        // Do Nothing
    } 

    else 
    { 
        if (lastChar === " ") {
            // If the last character is a space (operator was removed by "Del"), replace it with the new operator
            result.value = resultInput.slice(0, -2) + op.value;
        } else {
            // Otherwise, append the new operator
            result.value += " " + op.value;
        }

        operator = op.value;
    }
}


function clearField()
{
    let result = document.getElementById("result");
    result.value = "";
    operand1 = "";
    operator = "";
    operand2 = "";
}

function deleteDigit() {
    let result = document.getElementById("result");

    if (operator === "") 
    {
        operand1 = operand1.slice(0, -1);
        result.value = operand1;
    } 

    else 
    {
        
        operand2 = operand2.slice(0, -1);
        result.value = operand1 + " " + operator + " " + operand2;
    }
}



function displayDecimal() {
    let result = document.getElementById("result");

    if (operator === "") 
    {
        if(operand1 === "" || operand1.includes('.'))
        {

        }
        else
        {
            operand1 += '.';
            result.value = operand1;
        }
    } 

    else 
    {
        if(operand2 === "" || operand2.includes('.'))
        {

        }
        else
        {
            operand2 += '.';
            result.value = operand2;
            result.value = operand1 + " " + operator + " " + operand2;
        }
    }
}

function calculate() {
    let result = document.getElementById("result");

    // Split the input into operands based on the operator
    let operands = result.value.split(operator);

    if (operands.length === 2) {
        operand1 = parseFloat(operands[0]);
        operand2 = parseFloat(operands[1]);

        switch (operator) {
            case '+':
                result.value = (operand1 + operand2);
                break;
            case '-':
                result.value = (operand1 - operand2);
                break;
            case 'x':
                result.value = (operand1 * operand2);
                break;
            case '/':
                result.value = (operand1 / operand2);
                break;
            case '%':
                result.value = (operand1 % operand2);
                break;
            default:
                break;
        }
    }

    // Reset operands and operator for the next calculation
    operand1 = result.value;
    operator = "";
    operand2 = "";
}
