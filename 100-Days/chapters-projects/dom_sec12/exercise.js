// Exercise Time!

// 1. Select the <h1> element by "drilling into the DOM" and
//    save it in a variable with a name of your choice

let h1element = document.body.children[0];
console.dir(h1element)

// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)
//    BONUS: Try using the variable from (1) to get access to the
//    sibling element (i.e. the <p> element next to the <h1> element)
let h1parent = h1element.parentElement;
console.dir(h1parent);

let h1sibling = h1element.nextElementSibling;
console.dir(h1sibling);

// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)
let h1elementID = document.getElementById("header");
console.dir(h1elementID);

// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class)
//    and store it in a new variable with a name of your choice

let pElement = document.querySelector("p");
console.dir(pElement);
// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice

pElement.innerText = "This is the new text";