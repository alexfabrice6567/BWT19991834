// Empty script file to start with

//after the user has entered a list description,
// the user will click on the Add Task button
//that list decription should be added to the list as the list item
// and should be preceded by a checkbox

// Step 1 - grab an element from the DOM and assign into a variable
//Step 2 - Write a function to handle the event
// Step 3 - Connect the variable and the finction via the event listener
//        so that an 'event' triggers the update of the DOM

// Step 1

let addButton = document.getElementById("add-task");
let newTaskInput = document.getElementById("task-input");
let todoListContainer = document.getElementById("todo-list");

let templateElement = document.getElementById("list-item-template"); // grabbing from HTML
let template = templateElement.innerHTML;

// Update the taskname in the template for the li text/placeholder

// Step 2
function onAddTaskClicked(e) {
  // retrieve the value of the task unput and assign to a variable
  // let taskName= newTaskInput.value;
  let taskName = newTaskInput.value;

  // Step 1 homework
  // CREATE an li element
  // add the description in between the li tags
  // append the li to the todoListContainer

  //apprend the taskHTML to my ul
  //Step 2
  // CREATE an li element example homework
  // Create a checkboc element
  // add the description in between the label tags for the checkbox
  // append the checkbox and label to the li,
  //then append the li to the todoListContainer

  newTaskInput.value = "";
  if (taskName !== "") {
    let taskHTML = template.replace("<!-- TASK_NAME -->", taskName);
    todoListContainer.insertAdjacentHTML("afterbegin", taskHTML);
    saveTask(taskName, false);
  }
}

function onToDoListClicked(e) {
  let targetElement = e.target;
  while (!targetElement.classList.contains("task")) targetElement.parentElement;

  let checkbox = targetElement.querySelector(".checkbox");

  if (checkbox.checked) targetElement.classList.add("task-completed");
  else targetElement.classList.remove("task-completed");

  let taskNameElement = targetElement.querySelector(".task-name");
  let taskName = taskNameElement.innerText;

  saveTask(taskName, checkbox.checked);
}

let showActiveButton = document.getElementById("show-active");
function showActiveTask(e) {
  let tasks = document.getElementsByClassName("task");
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].classList.contains("task-completed"))
      tasks[i].style.display = "none";
    else tasks[i].style.display = "block";
  }
}

function saveTask(name, isCompleted) {
  localStorage.setItem(name, isCompleted);
}

function renderTasks() {
  for (let i = 0; i < localStorage.length; i++) {
    let taskName = localStorage.key(i);
    let isCompleted = localStorage.getItem(taskName) == "true";

    let taskHTML = template.replace("<!-- TASK_NAME -->", taskName);

    if (!isCompleted) {
      todoListContainer.insertAdjacentHTML("afterbegin", taskHTML);
    }
  }
}

// Step 3
addButton.addEventListener("click", onAddTaskClicked);
todoListContainer.addEventListener("click", onToDoListClicked);
showActiveButton.addEventListener("click", showActiveTask);
renderTasks();
