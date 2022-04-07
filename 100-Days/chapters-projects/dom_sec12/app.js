// ADD AN ELEMENT
// 1. Create the element
let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://www.google.com";
newAnchorElement.textContent = "Go to Google";

// 2. Get access to the parent element that should holds the new element
let firstParagraph = document.querySelector("p");

// 3. Insert the new element into the parent element content
firstParagraph.append(newAnchorElement);

// REMOVE ELEMENTS
// 1. Select the element
let firstH1Element = document.querySelector('h1');

// 2. Remove it
firstH1Element.remove();
