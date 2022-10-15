let body = document.body;
let navHeader = document.querySelector("body > header");

body.insertAdjacentElement("afterbegin", navHeader);
//
let linkToSite = document.querySelector("h1 > a");
let mySiteHeading = linkToSite.parentNode;
//
navHeader.insertAdjacentElement("afterbegin", mySiteHeading);
//
let figures = document.querySelectorAll("figure");
let article = document.querySelector("article");

let figcaptions = [];

for (let i = 0; i < figures.length; i ++ ) {
  figcaptions.push(figures[i].querySelector("figcaption"))
}

let chin_stick = figures[1]
let baby_mop = figures[0]

baby_mop.insertAdjacentElement("beforeend", figcaptions[1]);
chin_stick.insertAdjacentElement("beforeend", figcaptions[0]);

article.insertAdjacentElement("beforeend", chin_stick);
article.insertAdjacentElement("beforeend", baby_mop);
