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
