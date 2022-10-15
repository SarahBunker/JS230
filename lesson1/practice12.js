let headingsH2 = document.body.getElementsByTagName("h2");

let wordCounts = [];

for (let i = 0; i < headingsH2.length; i ++) {
  let text = headingsH2[i].textContent
  let words = text.match(/\b[a-z]+\b/ig);
  wordCounts.push(words.length);
}

console.log(wordCounts);

// method 1 using class name
// let tableOC = document.body.getElementsByClassName("toc");
// console.log(tableOC);

// method 2 using css selector
let tableOC = document.querySelector(".toc");
console.log(tableOC);

// method 3 using the css selector that returns all and selecting the first one
// let tableOC = document.querySelectorAll(".toc")[0];
// console.log(tableOC);

// let tocLinks = tableOC.getElementsByTagName("a")
// tocLinks = [].slice.call(tocLinks);
// tocLinks.forEach( (link, index) => {
//   if (index % 2 === 1) {
//     link.style.color = "green";
//   }
// })

let links = document.querySelectorAll(".toc a");
links = [].slice.call(links);
links.forEach( (link, index) => {
  if (index % 2 === 1) {
    link.style.color = "green";
  }
})

let thumbnailNodes = document.querySelectorAll(".thumbcaption");
let texts = [];
for (let i = 0; i < thumbnailNodes.length; i ++) {
  texts.push(thumbnailNodes[i].textContent.trim());
}
console.log(texts);
console.log(texts[0]);

let keys = ['Kingdom', 'Phylum', 'Clade', 'Class', 'Order', 'Suborder', 'Family',
            'Genus', 'Species'];
let classification = {};
let tds = document.querySelectorAll(".infobox td");
let cell;
let link;

for (let index = 0; index < tds.length; index += 1) {
  cell = tds[index];

  keys.forEach( key => {
    if (cell.textContent.indexOf(key) !== -1) {
      link = cell.nextElementSibling.firstElementChild;
      classification[key] = link.textContent;
    }
  });
}

console.log(classification);
