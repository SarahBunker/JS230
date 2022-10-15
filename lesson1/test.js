// "use strict"
// <script src="./test.js" ></script>

function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

let count = 0

walk(document, node => {
  if (node.nodeName === 'P') {
    count++;
  }
});

console.log(count);                              // 5

function findParagraphs(node) {
  return node.nodeName === 'P';
}

// let words = [];
// function logFirstWord(node) {
//   // console.log(node);
//   if (findParagraphs(node)) {
//     let text = node.firstChild.data.trim();
//     let firstWord = text.split(" ")[0];
//     words.push(firstWord);
//     // console.log(firstWord)
//   }
// }
//
// walk(document, logFirstWord);
//
// console.log(words);

let first = true;
walk(document, node => {
  if (node.nodeName === 'P') {
    if (first) {
      first = false;
    } else {
      node.classList.add("stanza")
    }
  }
});

let images = [];
walk(document, node => {
  if (node.nodeName === 'IMG') {
    images.push(node);
  }
});

console.log(images.length);                      // 48 total images

let pngCount = images.filter(img => img.getAttribute('src').match(/png$/)).length;

console.log(pngCount);                           // 23 images in png format
