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

function updateTaskCounts() {
    toDoCount.textContent = `(${toDoList.childElementCount})`;
    inProgressCount.textContent = `(${inProgressList.childElementCount})`;
    doneCount.textContent = `(${doneList.childElementCount})`;
}

addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("task-title").value;
    const date = document.getElementById("task-date").value;
    const priority = document.getElementById("task-priority").value;
    const category = document.getElementById("task-category").value;
    const description = document.getElementById("task-description").value;

    const taskElement = document.createElement("div");
    taskElement.classList.add("p-4", "rounded", "border", "text-gray");

  
    if (priority === "P1") {
        taskElement.classList.add("border-red-500");
    } else if (priority === "P2") {
        taskElement.classList.add("border-yellow-500");
    } else if (priority === "P3") {
        taskElement.classList.add("border-green-500");
    }

    // Faire innerHTml pour la creation du div task
    taskElement.innerHTML = `
        <h3 class="font-bold">${title}</h3>
        <p class="text-sm text-green-500">${date}</p>
        <p class="text-sm text-gray-600">${description}</p>
        <div class="flex space-x-2 mt-2">
            <button class="delete-task bg-red-500 text-white px-2 py-1 rounded">Delete</button>
            <button class="edit-task bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
        </div>
    `;


    updateTaskCounts();
    addForm.reset();
    addForm.classList.add("hidden");
    modal.classList.add("hidden");

    
    taskElement.querySelector(".delete-task").addEventListener("click", () => {
        taskElement.remove();
        updateTaskCounts();
    });
});
