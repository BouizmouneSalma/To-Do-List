const addTaskBtn = document.getElementById("task");
const addForm = document.getElementById("task-form");
const cancelBtn = document.getElementById("cancel");
const toDoList = document.getElementById("to-do-list");
const modal = document.getElementById("modal");
const inProgressList = document.getElementById("in-progress-list");
const doneList = document.getElementById("done-list");

const toDoCount = document.getElementById("to-do-count");
const inProgressCount = document.getElementById("in-progress-count");
const doneCount = document.getElementById("done-count");

addTaskBtn.addEventListener("click", () => {
    modal.classList.remove("hidden"); // remove  hidde
    addForm.classList.remove("hidden"); // Affiche le formulaire
});

cancelBtn.addEventListener("click", () => {
    addForm.classList.add("hidden"); // Cache le formulaire
    modal.classList.add("hidden"); // Cache le modal
});



