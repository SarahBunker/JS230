/*
add the class .generation-color to color the given generation

assume only non negative integers will be provided as arguments
the generations for this sample code is from 1-7 so 0 and 8 don't color anything.

return if targetGen is less then 1.

walk through the tree starting with body

callback
if generation finder returns value equal to the targetGen add the class to the currentNode

generation finder
  input current element
  initialize generation count to 0
  while current element !== to body
    set current element to parent of current element
    add one to generation count
  return generation count
*/

function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

function generationFinder(currentNode) {
  let generationCount = 0;
  while (currentNode != document.body) {
    currentNode = currentNode.parentNode;
    generationCount += 1;
  }
  return generationCount
}

function colorGeneration(targetGen) {
  if (targetGen < 1) return;
  const ELEMENT_NODE = 1;
  walk(document.body, node => {
    if (node.nodeType !== ELEMENT_NODE) return;
    const gen = generationFinder(node);
    if (gen === targetGen) {
      node.classList.add("generation-color");
    }
  })
}

colorGeneration(-1);

// let node4 = document.getElementById(24);
//
// console.log(generationFinder(node4))
