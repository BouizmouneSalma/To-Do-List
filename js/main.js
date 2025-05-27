const addBtn = document.getElementById("task");
const addForm = document.getElementById("task-form");
const cancelBtn = document.getElementById("cancel");
const toDoList = document.getElementById("to-do-list");
const modal = document.getElementById("modal");
const inProgressList = document.getElementById("in-progress-list");
const doneList = document.getElementById("done-list");
const serch=document.getElementById("serch");
const toDoCount = document.getElementById("to-do-count");
const inProgressCount = document.getElementById("in-progress-count");
const doneCount = document.getElementById("done-count");

let isEditMode = false;

let Tcurrent = null;

addBtn.addEventListener("click", () => {
    isEditMode = false;
    modal.classList.remove("hidden");
    addForm.reset();
});

cancelBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});

serch.addEventListener("input", search);

function search() {
    const query = serch.value.toLowerCase();

    const allTasks = [
        ...toDoList.children,
        ...inProgressList.children,
        ...doneList.children
    ];

    allTasks.forEach(task => {
        const title = task.querySelector(".task-title").textContent.toLowerCase();
        const desc = task.querySelector(".task-desc").textContent.toLowerCase();

        if (title.includes(query) || desc.includes(query)) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
}

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

    if (isEditMode && Tcurrent) {
        
        Tcurrent.querySelector(".task-title").textContent = title;
        Tcurrent.querySelector(".task-date").textContent = date;
        Tcurrent.querySelector(".task-desc").textContent = description;

        Tcurrent.classList.remove("border-red-500", "border-yellow-500", "border-green-500");
        if (priority === "P1") {
            Tcurrent.classList.add("border-red-500");
        } else if (priority === "P2") {
            Tcurrent.classList.add("border-yellow-500");
        } else if (priority === "P3") {
            Tcurrent.classList.add("border-green-500");
        }

        isEditMode = false;
        Tcurrent = null;
    } else {
        const taskElement = document.createElement("div");
        taskElement.classList.add("p-4", "rounded", "border", "shadow-sm", "bg-white");

        // Ajout de border en fonction de la priorité
        if (priority === "P1") {
            taskElement.classList.add("border-red-500");
        } else if (priority === "P2") {
            taskElement.classList.add("border-yellow-500");
        } else if (priority === "P3") {
            taskElement.classList.add("border-green-500");
        }

        taskElement.innerHTML = `
            <div class="flex justify-between items-center">
                <h3 class="font-bold text-gray-800 task-title">${title}</h3>
                <p class="text-sm text-green-500 task-date">${date}</p>
            </div>
            <p class="text-sm text-gray-600 task-desc mt-1">${description}</p>
            <div class="flex space-x-2 mt-2">
                <button class="delete-task bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
                <button class="edit-task bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">Edit</button>
            </div>
        `;

        // Ajout de la tâche dans la loiste de la tache
        if (category === "to-do-list") {
            toDoList.appendChild(taskElement);
        } else if (category === "in-progress-list") {
            inProgressList.appendChild(taskElement);
        } else if (category === "done-list") {
            doneList.appendChild(taskElement);
        }

        updateTaskCounts();

        // EventListener pour supprimer la tâche
        taskElement.querySelector(".delete-task").addEventListener("click", () => {
            taskElement.remove();
            updateTaskCounts();
        });

        // EventListener pour éditer la tâche
        taskElement.querySelector(".edit-task").addEventListener("click", () => {
            isEditMode = true;
            Tcurrent = taskElement;
            modal.classList.remove("hidden");

            document.getElementById("task-title").value = title;
            document.getElementById("task-date").value = date;
            document.getElementById("task-priority").value = priority;
            document.getElementById("task-category").value = category;
            document.getElementById("task-description").value = description;
        });
    }
    //pour faire reset a formulaire
    addForm.reset();
    modal.classList.add("hidden");
});
