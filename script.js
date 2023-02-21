
let example2 = document.querySelector("p");
console.log(example2);
example2.textContent = "Hello world!";
let example1 = document.querySelector("article");
console.log(example1);

let example3 = document.querySelector(".example-3");
console.log(example3);
example3.textContent =" This is the third paragraph " + example3.textContent
example3.style.color = "Tomato";
let example4 = document.querySelector("#example-4");
console.log(example4);
example4.style.border = "2px solid green";
example4.textContent = "This is the fourth paragraph"
let example5 = document.querySelector("p:nth-child(4)");
console.log(example5);

let example6 = document.querySelector("p:nth-child(10)");
example6.style.color = "blue";
let example7 = document.querySelectorAll("article p");
for(let i =0; i < example7.length; i++){
  let paragraph = example7[i];
  paragraph.textContent += "@";
}


let example8 = document.createElement("p");
example8.textContent = "How are you?";
document.body.append(example8);
// "prepend" vstavlayet v nachalo


let example9 = document.createElement("ul");
