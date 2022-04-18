const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para1 = document.createElement("p");
para1.textContent = "Hey I'm red!";
para1.style.cssText = "color: red;";

container.appendChild(para1);

const smallHeader = document.createElement("h3");
smallHeader.textContent = "I'm a blue h3!";
smallHeader.style.cssText = "color: blue;";

container.appendChild(smallHeader);

const pinkDiv = document.createElement("div");
pinkDiv.style.border = "5px dotted black";
pinkDiv.style.backgroundColor = "pink";

container.appendChild(pinkDiv);

const bigHeader = document.createElement("h1");
bigHeader.textContent = "I'm in a div";

pinkDiv.appendChild(bigHeader);

const para2 = document.createElement("p");
para2.textContent = "ME TOO!";

pinkDiv.appendChild(para2);

const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World~");

const btn3 = document.querySelector("#btn3");
// btn3.addEventListener("click", () => {
//   alert("Hello World!");
// });

// named functions
// Using named functions can clean up your code considerably, and is a really good idea if the function is something that you are going to want to do in multiple places.
// Method 1.1
function alertFunction() {
  alert("YAY! YOU DID IT!");
}
// Method 2
btn.onclick = alertFunction;
// Method 3
// btn3.addEventListener("click", alertFunction);
// test 1.1
// btn3.addEventListener("click", function (e) {
//   console.log(e);
// });
// test 1.2
// btn3.addEventListener("click", function (e) {
//   console.log(e.target);
// });
// test 1.3
btn3.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
