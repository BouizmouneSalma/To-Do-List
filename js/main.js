const addTaskBtn = document.getElementById("task");
const addForm = document.getElementById("task-form");
const modal = document.getElementById("modal");

addTaskBtn.addEventListener("click", () => {
modal.classList.remove("hidden");
addForm.classList.remove("hidden"); // Affiche le formulaire
});

