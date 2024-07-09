const bmiForm = document.getElementById('bmiForm');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const resultElement = document.getElementById('result');

bmiForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const height = parseFloat(heightInput.value) / 100; // Convert height to meters
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight)) {
        resultElement.textContent = 'Please enter valid height and weight.';
        return;
    }

    const bmi = calculateBMI(height, weight);
    const bmiCategory = getBMICategory(bmi);
    const message = `Your BMI is ${bmi.toFixed(1)} (${bmiCategory}).`;

    resultElement.textContent = message;
});

function calculateBMI(height, weight) {
    return weight / (height * height);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obesity';
    }
}
