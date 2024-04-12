document.addEventListener("DOMContentLoaded", function() {
    var dayButton = document.getElementById("dayButton");
    var nightButton = document.getElementById("nightButton");
    dayButton.addEventListener("click", setDayMode);
    nightButton.addEventListener("click", setNightMode);

    function setDayMode() {
        var body = document.body;
        body.classList.remove('night-mode');
        body.classList.add('day-mode');
    }

    function setNightMode() {
        var body = document.body;
        body.classList.remove('day-mode');
        body.classList.add('night-mode');
    }

    const addButton = document.getElementById("addButton");
    const inputTask = document.getElementById("Task");
    const taskList = document.getElementById("tasks");

    addButton.addEventListener("click", function() {
        const taskText = inputTask.value.trim();
        if (taskText !== "") {
            addTaskToList(taskText);
            inputTask.value = "";
        }
    });

    function addTaskToList(taskText) {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = taskText;
        const completeButton = document.createElement("button");
        completeButton.textContent = "✅";
        completeButton.classList.add("completeButton");
        completeButton.addEventListener("click", function() {
            span.classList.toggle("completed");
        });
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.classList.add("deleteButton");
        deleteButton.addEventListener("click", function() {
            li.remove();
        });
        li.appendChild(span);
        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }
});
