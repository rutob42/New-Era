function calculate(operation){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result;

    if(isNaN(num1) || isNaN(num2)){
        alert('please enter valid numbers');
        return;
    }

    switch(operation){
        case 'add':
            result = num1 + num2;
            break;

        case 'Subtract':
            result = num1 - num2;
            break;

        case 'multiply':
            result = num1 * num2;
            break

        case 'divide':
            if(num2 === 0)
            {
                alert('Cannot divide by zero');
                return;
            }
            result = num1/num2;
            break
    }
    document.getElementById('result').textContent = result;
}