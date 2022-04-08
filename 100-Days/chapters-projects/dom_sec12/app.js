let pElement = document.querySelector('p');

function changeParagraphText() {
    pElement.textContent = 'Clicked!';
    console.log('clicked');
}

pElement.addEventListener('click', changeParagraphText);

let textInput = document.querySelector('input');

function getInputText(event) {
    // let inputText = textInput.value;
    let inputText = event.target.value;
    console.log(inputText);
    console.log(event)
}

textInput.addEventListener('input', getInputText);