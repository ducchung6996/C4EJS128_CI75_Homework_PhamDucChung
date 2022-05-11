const operator = prompt('Enter operator ( either +, -, * or / ): ');

switch (operator) {
    case "+":
        a = Number(prompt('First number'))
        b = Number(prompt('Second number'))
        alert('Result is ' + (a + b))
        break;

    case "-":
        a = Number(prompt('First number'))
        b = Number(prompt('Second number'))
        alert('Result is ' + (a - b))
        break;

    case "*":
        a = Number(prompt('First number'))
        b = Number(prompt('Second number'))
        alert('Result is ' + (a * b))
        break;
        
    case "/":
        a = Number(prompt('First number'))
        b = Number(prompt('Second number'))
        alert('Result is ' + (a / b))
        break;
    
    default:
        break;
}