const productNameInputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingChars(event) {
    const enteredText = event.target.value
    const enteredTextLength = enteredText.length;

    const remainingChars = maxAllowedChars - enteredTextLength;
    remainingCharsElement.textContent = remainingChars;
    if (remainingChars <= 10) {
        remainingCharsElement.classList.add('warning');
        event.target.classList.add('warning');
    } else {
        remainingCharsElement.classList.remove('warning');
        event.target.classList.remove('warning');
    }
}

productNameInputElement.addEventListener('input', updateRemainingChars);