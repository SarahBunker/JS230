// <div id="1">
//   <h1 id="2">Hello, <em id="3">World</em></h1>
//   <p id="4">
//     Welcome to wonderland. This is an
//     <span id="5">awesome</span> place.
//   </p>
//   <a href="#" id="6"><strong id="7">Enter</strong></a>
//   <div id="8"><p id="9"><a href="#" id="10">Go back</a></p></div>
// </div>

// // sample output
// > childNodes(1);
// = [9, 12]
// > childNodes(4);
// = [3, 1]
// > childNodes(9);
// = [1, 1]

/*
write code to get the count of all direct and indirect childnodes of each parent node

input(id) of parent node
output array of [direct, indirect] children



algorithm
- access the parent node using getElementById('id')
- initialize results array
- calculate direct children
  - store in results array
- initialize indirect {count: 0}
  countIndirectChildren(nodes of element);


helper
- direct children is length of array object returned by childNodes on parent node

countIndirectChildren
  - input array of children
  - iterate through children
    - calculate direct children
    - increment propery count in indirect
    - if  count > 0
      recursively call countIndirectChildren(currentNode.childNodes)
*/

// function childNodes(id) {
//   let parent = document.getElementById(id);
//   let children = parent.childNodes;
//   let indirect = {count: 0};
//   let i;
//   for (i = 0; i < children.length; i += 1) {
//     let child = children[i]
//     countIndirectChildren(child, indirect);
//   }
//   return [children.length, indirect.count];
// }

// function countChildren(node) {
//   return node.childNodes.length;
// }
//
// function countIndirectChildren(parent, indirect) {
//   let children = parent.childNodes
//   for (let i = 0; i < children.length; i ++) {
//     let currentNode = children[i];
//     let count = countChildren(currentNode);
//     indirect.count += count;
//     if (count > 0) countIndirectChildren(currentNode, indirect)
//   }
// }
//
// console.log(childNodes(1));

// ----------------------------------------------------------------------------------

/*
count the number of child nodes
if any of the child nodes are parent nodes count

indirect
  input node
  calculate children
  initialize indirectCount
  iterate through children
    if child is not parent skip
    child is parent
      calculate direct and indirect as array array.
      add indirect into indirectCount
  return array of direct and indirect
*/

function checkParentNode(node) {
  return node.childNodes.length > 0;
}

function childNodes(id) {
  let parent = document.getElementById(id);
  return countChildren(parent);
}

function countChildren(parent) {
  let children = parent.childNodes;
  let indirectCount = 0;
  let i;
  for (i = 0; i < children.length; i ++) {
    let child = children[i];
    if (!checkParentNode(child)) {
      continue;
    }
    let [direct, indirect] = countChildren(child);
    indirectCount = indirectCount + direct + indirect;
  };
  return [children.length, indirectCount];
}

// Testing Code

function testReturn (trueArray, testArray) {
  return trueArray[0] === testArray[0] && trueArray[1] === testArray[1]
}

console.log(testReturn(childNodes(1), [9,12]));
console.log(testReturn(childNodes(2), [2,1]));
console.log(testReturn(childNodes(3), [1,0]));
console.log(testReturn(childNodes(4), [3,1]));
console.log(testReturn(childNodes(5), [1,0]));
console.log(testReturn(childNodes(6), [1,1]));
console.log(testReturn(childNodes(7), [1,0]));
console.log(testReturn(childNodes(8), [1,2]));
console.log(testReturn(childNodes(9), [1,1]));
console.log(testReturn(childNodes(10), [1,0]));

// console.log(childNodes(1)[0] === 9);
// console.log(childNodes(1)[1] === 12);
// console.log(childNodes(2)[0] === 2);
// console.log(childNodes(2)[1] === 1);
// console.log(childNodes(3)[0] === 1);
// console.log(childNodes(3)[1] === 0);
// console.log(childNodes(4)[0] === 3);
// console.log(childNodes(4)[1] === 1);
// console.log(childNodes(5)[0] === 1);
// console.log(childNodes(5)[1] === 0);
// console.log(childNodes(6)[0] === 1);
// console.log(childNodes(6)[1] === 1);
// console.log(childNodes(7)[0] === 1);
// console.log(childNodes(7)[1] === 0);
// console.log(childNodes(8)[0] === 1);
// console.log(childNodes(8)[1] === 2);
// console.log(childNodes(9)[0] === 1);
// console.log(childNodes(9)[1] === 1);
// console.log(childNodes(10)[0] === 1);
// console.log(childNodes(10)[1] === 0);
