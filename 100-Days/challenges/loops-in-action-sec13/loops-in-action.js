// First Example: Sum numbers

const calculateSumButton = document.querySelector('#calculator button');

function calculateSum(target) {
    let sum = 0;
    for (let i = 0; i <= target; i++) {
        sum += i;
    }
    return sum;
}

function updateCalculatedSum() {
    const userInputValue = document.getElementById('user-number').value;
    const calculatedSum = calculateSum(userInputValue);
    const calculatedSumElement = document.getElementById('calculated-sum');
    calculatedSumElement.textContent = calculatedSum;
    calculatedSumElement.style.display = 'block';
}

calculateSumButton.addEventListener('click', updateCalculatedSum);