let pElement = document.querySelector('p');

function changeParagraphText() {
    pElement.textContent = 'Clicked!';
    console.log('clicked');
}

pElement.addEventListener('click', changeParagraphText);

let textInput = document.querySelector('input');

function getInputText() {
    console.log(textInput.value);
}

textInput.addEventListener('input', getInputText);