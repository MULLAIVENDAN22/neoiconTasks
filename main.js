let child1 = document.querySelector(".child1")

let parent = child1.parentElement     // selects parent element
console.log(child1.nextElementSibling);   // selects next element that is next sibling
console.log(parent.children[2].previousElementSibling);   // selects previous element that is previous sibling

console.log(child1.closest(".parent"));   // selects only parent and grandparent and ancestores
console.log("child1",parent.children[0]);   // selects the children in terms of array


