console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
let node1 = document.getElementById("node1");
node1.textContent = "I used the getElementById('node1') method to access this";

// Select Node #2 and change the text to: "I used the getElementsByClassName("node2") method to access this" */

let node2 = document.getElementsByClassName("node2")[0];
node2.textContent =
  "I used the getElementsByClassName('node2') method to access this";

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */

let h3s = document.getElementsByTagName("h3");

for (let ele of h3s) {
  ele.textContent =
    "I used the getElementByTagName('h3') method to access all of these";
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"

let newP = document.createElement("p");
newP.textContent = "This node was created using the createElement() method";

// TODO: Append the created node to the parent node using the element.appendChild() method

let parentId = document.querySelector("#parent");
parentId.appendChild(newP);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"

let link = document.createElement("a");
link.textContent = "I am an <a> tag";

// BONUS: Add a link href to the <a>

link.href = "www.linkedin.com/in/calebstuffle/";
link.target = "_blank";

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

parentId.insertBefore(link, newP);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"

let exercise3Parent = document.querySelector("#exercise-container3");
let oldChild = document.querySelector("#N1");

let newChild = document.createElement("p");
newChild.textContent = "New Child Node";

exercise3Parent.replaceChild(newChild, oldChild);

// TODO: Remove the "New Child Node"

exercise3Parent.removeChild(newChild);

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [
  "apples",
  "bananas",
  "carrots",
  "dragon fruit",
  "eggplant",
  "fish",
  "grapes",
  "honey",
  "ice bag",
  "juice (any kind)",
];

// TODO: Create an unordered list element

let exercise4List = document.createElement("ul");

// TODO: Iterate over the array values, and create a list item element for each

list.forEach((item) => {
  let li = document.createElement("li");
  li.textContent = item;

  // TODO: Append the new list items to the unordered list element
  exercise4List.appendChild(li);
});

// TODO: Append the unordered list to the `div#container` under exercise 4
// let exercise4Parent = document.querySelector("#container");
// exercise4Parent.appendChild(exercise4List);
// OR..
document.querySelector("#container").appendChild(exercise4List);

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
function show() {
  let modalContainer = document.createElement("div");
  let modalCard = document.createElement("div");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let exit = document.createElement("button");

  h2.textContent = "Modal h2";
  p.textContent =
    "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
  exit.textContent = "x";

  exit.addEventListener("click", () => {
    document.body.removeChild(modalContainer);
  });

  modalCard.append(h2, p, exit);
  modalCard.classList.add("modal-card");

  modalContainer.id = "modal";
  modalContainer.appendChild(modalCard);

  document.body.appendChild(modalContainer);
}

let button = document.querySelector("#btn");
button.addEventListener("click", show);
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
