function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

// let paragraphs = []
//
// walk(document, node => {
//   if (node.nodeName === 'P') {
//     paragraphs.push(node);
//   }
// });
//
// console.log(paragraphs);

// function findAllParagraphs() {
//   let matches = [];
//   let nodes = document.body.childNodes;
//
//   for (let i = 0; i < nodes.length; i ++) {
//     let node = nodes[i];
//     if (node instanceof HTMLParagraphElement) matches.push(node);
//   }
//
//   return matches;
// }
//
// function addClassToNodes(nodes, className) {
//   for (let i = 0; i < nodes.length; i++) {
//     nodes[i].classList.add(className);
//   }
// }
//
// console.log(findAllParagraphs());
// let paragraphs = findAllParagraphs();
// addClassToNodes(paragraphs, 'article-text')

// function getElementsByTagName(tagName) {
//   let matches = [];
//
//   walk(document, node => {
//      if (node.tagName === tagName) {
//        matches.push(node);
//      }
//    });
//
//   return matches;
// }
//
// function addClassToNodes(nodes, className) {
//   for (let i = 0; i < nodes.length; i++) {
//     nodes[i].classList.add(className);
//   }
// }
//
// console.log(getElementsByTagName("P"));
// let paragraphs = getElementsByTagName("P")
// addClassToNodes(paragraphs, 'article-and-text')

// function getElementsByTagName(tagName) {
//   let matches = [];
//
//   walk(document, node => {
//      if (node.tagName === tagName) {
//        matches.push(node);
//      }
//    });
//
//   return matches;
// }
//
// function addClassToNodes(nodes, className) {
//   for (let i = 0; i < nodes.length; i++) {
//     nodes[i].classList.add(className);
//   }
// }
//
// console.log(getElementsByTagName("P"));
// let paragraphs = getElementsByTagName("P")
// addClassToNodes(paragraphs, 'article-and-text')

// function getElementsByTagName(tagName) {
//   let matches = [];
//
//   walk(document.body, (node) => {
//     if (node.nodeName.toLowerCase() === tagName) {
//       matches.push(node);
//     }
//   });
//
//   return matches;
// }


// let paragraphs = document.getElementsByTagName("p")
// paragraphs = [].slice.call(paragraphs)
// console.log(paragraphs);
//
// paragraphs.forEach((paragraph) =>
//   paragraph.classList.add("article-text")
// );

let introDivs = document.getElementsByClassName("intro");
introDivs = [].slice.call(introDivs);
let nestedParagraphs = introDivs.forEach( div => {
  let paragraphs = div.getElementsByTagName('p');
  for (let i = 0; i < paragraphs.length; i ++) {
    paragraphs[i].classList.add("article-text");
  }
})
