// First Challenge: Sum numbers

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

// First Challenge: Highlight links

const highlightLinksButton = document.querySelector('#highlight-links button');

function highlightLinks() {
    const linkElements = document.getElementById('highlight-links').getElementsByTagName('a');
    for (link of linkElements) {
        link.classList.add('highlight');
    }
}

highlightLinksButton.addEventListener('click', highlightLinks)
