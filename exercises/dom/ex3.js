/*
trace the dom Tree

input element id
output nested array of each level of the tree until you get to the top parent which has id 1

rules
  first subarray is current element with it's siblings
  next subarray is the parent of the previous element and its siblings
  ...
  final subarray is the element with id of 1


#domTreeTracer
find element with id << firstEl
initialize tree array << treeArray
return result of calling traceDom passing firstEl and treeArray

#traceDom
inputs
  currentEl
  treeArray
find parent
find all children of parent
add array of children to treeArray
if current element has id 1 return treeArray
return call traceDom passing currentElement and treeArray;
*/

function domTreeTracer(id) {
  const firstEl = document.getElementById(id);
  const treeArray = [];
  return traceDom(firstEl, treeArray);
}

function traceDom(currentEl, treeArray) {
  const parent = currentEl.parentNode;
  let children = parent.children;
  children = [].slice.call(children);
  treeArray.push(children);
  const idCurrentNode = currentEl.getAttribute("id");
  if (idCurrentNode === "1") return treeArray;
  return traceDom(parent, treeArray);
}

console.log(domTreeTracer(1));
// = [["ARTICLE"]]
console.log(domTreeTracer(2));
// = [["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
console.log(domTreeTracer(22));
// = [["A"], ["STRONG"], ["SPAN", "SPAN"], ["P", "P"], ["SECTION", "SECTION"], ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
