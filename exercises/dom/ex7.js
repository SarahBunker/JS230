/*
write function that returns a nested array of tag names of the DOM tree

input nothing
output nested array of strings

rules
  starts with body
  every element is represented as `["PARENT_TAG_NAME", [children]]`
  where children are elements as well and have the same format
  an element that is not a parent/has no children is represented as `["PARENT_TAG_NAME", []]`

childrenFunction(element)
  input element
  if childNodes.length is zero
    return [];
  let childrenArray = [];
  iterate over childnodes
    let currentEl
    childrenArray push childrenFunction(currentEl);
  return childrenArray
*/

function nodesToArr() {
  let currentEl = document.body;
  // console.log(`${currentEl}; children: ${childrenFunction(currentEl)}`);
  return childrenFunction(currentEl);
}

function childrenFunction(element) {
  let resultsArray = [element.tagName];
  if (element.children.length === 0) {
    resultsArray.push([]);
    return resultsArray;
  }
  let childNodes = element.children;
  childNodes = [].slice.call(childNodes)
  let childrenArray = childNodes.map( node => {
    return childrenFunction(node);
  })
  resultsArray.push(childrenArray);
  return resultsArray;
}

console.log(nodesToArr());
