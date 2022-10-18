/*
input two element ids
swap the position of the elements represented by ids
returns true: valid swap
        undefined for invalid swap

assume nodes will have a value for id attribute
two args always provided

get both input nodes from two input ids
check that both ids are present in the document
  return undefined;
check that one is not the parent of the other
  call checkNotParent(elOne, elTwo) and (elTwo, elOne)
  if either returns true then return undefined;
get each parentNode
get element before each input node
  previousElementSibling: previous sibling or null

firstMove
  secondNode to firstNode
  parent.replaceChild(node, targeNode): Removes targetNode and inserts node in its place in parent.childNdes

secondMove
  firstNode move to secondNode place
  if previousElementSibling returned null then insert firstNode to the beginning of second nodes parents children
  - - `element.insertAdjacentText(position, text)`
    - Inserts Text node that contains text at position relative to element
    afterbegin: before the first child of the element
  parent.


  - `element.insertAdjacentElement(position, newElement)`:
    - Inserts newElement at position relative to element

  afterend after the element
  use the previous element to  as the element and firstNode as the newElement

Find location in childnodes array of parent node
  input child node
  get parentNode
  get childnodes array
  iterate through array
  return index when element matches child node.


> checkNotParent(elOne, elTwo);
  let currentEl = elOne
  iterate until currentEl is document body
    if currentEl equals elTwo return true
  return false

*/

// function checkIfParent(elOne, elTwo) {
//   let currentEl = elOne;
//   while (currentEl !== document.body) {
//     if (currentEl === elTwo) return true;
//     currentEl = currentEl.parentNode;
//   }
//   return false;
// }
//
// function nodeSwap(firstId, secondId) {
//   const firstNode = document.getElementById(firstId);
//   const secondNode = document.getElementById(secondId);
//
//   if (!firstNode || !secondNode) return undefined;
//   if (checkIfParent(firstNode, secondNode) || checkIfParent(secondNode, firstNode)) return undefined;
//
//   const firstParent = firstNode.parentNode;
//   const secondParent = secondNode.parentNode;
//   const firstSibling = firstNode.previousElementSibling;
//   const secondSibling = secondNode.previousElementSibling;
//
//   firstParent.replaceChild(secondNode, firstNode);
//
//   if (secondSibling === null) {
//     secondParent.insertAdjacentElement("afterbegin", firstNode);
//     return true;
//   }
//
//   secondSibling.insertAdjacentElement("afterend", firstNode);
//   return true;
// }

function checkIfParent(elOne, elTwo) {
  let currentEl = elOne;
  while (currentEl !== document.body) {
    if (currentEl === elTwo) return true;
    currentEl = currentEl.parentNode;
  }
  return false;
}

function nodeSwap(firstId, secondId) {
  const firstNode = document.getElementById(firstId);
  const secondNode = document.getElementById(secondId);

  if (!firstNode || !secondNode) return undefined;
  if (firstNode.contains(secondNode) || secondNode.contains(firstNode)) return undefined;

  const firstParent = firstNode.parentNode;
  const secondParent = secondNode.parentNode;

  const firstNodeClone = firstNode.cloneNode(true);
  const secondNodeClone = secondNode.cloneNode(true);

  firstParent.replaceChild(secondNodeClone, firstNode);
  firstParent.replaceChild(firstNodeClone, secondNode);

  return true;
}

console.log(nodeSwap(1, 20) === undefined);
console.log(nodeSwap(1, 4) === undefined);
console.log(nodeSwap(9, 3) === undefined);

//
// console.log(nodeSwap(1, 3) === true);

// //
console.log(nodeSwap(3, 1) === true);
console.log(nodeSwap(7, 9) === true);
