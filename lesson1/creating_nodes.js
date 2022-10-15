// let paragraph = document.createElement('p');
// paragraph.textContent = 'This is a test.';
// document.body.appendChild(paragraph);

let text = document.createTextNode('This is a test.');
let paragraph = document.createElement('p');
paragraph.appendChild(text);
document.body.appendChild(paragraph);

let paragraph2 = paragraph.cloneNode(true);
document.body.appendChild(paragraph2);

paragraph.remove();
paragraph2.remove();
