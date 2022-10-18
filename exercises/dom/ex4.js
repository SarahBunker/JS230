/*
input starting id, ending id
output array of strings with tagnames

rules
 - inclusive of both the parent and innermost child tag names
 - the end index doesn't have to be the innermost childs node
 - only considers element nodes
 - only elements that have `body` as an ancestory are sliceable
 - if the start or end id is not the attribute of an element in the DOM returns undefined
 - if the slice isn't feasible - no path, return undefined.


check that both nodes are elements of the dom
  return undefined otherwise

initialize tagArray
currentEl is the element with end id
iteration
  tagname of currentEl
  add tagname to front of tagArray
  check if element is body element
    return undefined
  check if element is start node
    break
  currentEl is parent of currentEl
return tagArray
*/

function sliceTree(startID, endID) {
  const startNode = document.getElementById(startID);
  const endNode = document.getElementById(endID);
  if (!startNode || !endNode) return undefined;
  let currentEl = endNode;
  const tagArray = [];
  while (true) {
    tagArray.unshift(currentEl.tagName);
    if (currentEl === document.body) return undefined;
    if (startNode === currentEl) break;
    currentEl = currentEl.parentNode;
  }
  return tagArray;
}

console.log(sliceTree(1, 4)  ); // ["ARTICLE", "HEADER", "SPAN", "A"]
console.log(sliceTree(1, 76) === undefined); // undefined // no id 76
console.log(sliceTree(2, 5)  === undefined); // undefined // no path from 2 to 5
console.log(sliceTree(5, 4)  === undefined); // undefined // no path from 5 to 4
console.log(sliceTree(1, 23) ); // ["ARTICLE", "FOOTER"]
console.log(sliceTree(1, 22) ); // ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
console.log(sliceTree(11, 19)); // ["SECTION", "P", "SPAN", "STRONG", "A"]
