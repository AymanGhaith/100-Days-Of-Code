let productNameInputElement = document.getElementById('product-name');
let remainingCharsElement = document.getElementById('remaining-chars');

let maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingChars(event) {
    let enteredText = event.target.value
    let enteredTextLength = enteredText.length;

    let remainingChars = maxAllowedChars - enteredTextLength;
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