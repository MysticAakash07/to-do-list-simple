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

    // Function to toggle between task sections
    function openTab(evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("task-content");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.classList.add("active");
    
        // Update the complete button style based on the active task section
        updateCompleteButtonStyle(tabName);
    }

    function updateCompleteButtonStyle(activeSection) {
        const completeButtons = document.querySelectorAll(".completeButton");
        completeButtons.forEach(button => {
            if (activeSection === "currentTasks") {
                button.textContent = "✅"; // Set check mark for "Current Tasks" section
            } else if (activeSection === "completedTasks") {
                button.textContent = "↩️"; // Set left arrow for "Completed Tasks" section
            }
        });
    }

    // Display "Current Tasks" section by default
    document.getElementById("currentTasks").style.display = "block";
    document.getElementById("currentTasksBtn").classList.add("active");

    // Add event listeners to task buttons
    var currentTasksBtn = document.getElementById("currentTasksBtn");
    var completedTasksBtn = document.getElementById("completedTasksBtn");
    currentTasksBtn.addEventListener("click", function(event) {
        openTab(event, 'currentTasks');
    });
    completedTasksBtn.addEventListener("click", function(event) {
        openTab(event, 'completedTasks');
    });

    const addButton = document.getElementById("addButton");
    const inputTask = document.getElementById("Task");
    const currentTasksList = document.getElementById("currentTasksList");
    const completedTasksList = document.getElementById("completedTasksList");

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
        completeButton.textContent = "✅"; // Set initial text content to a checkmark;
        completeButton.classList.add("completeButton");
        completeButton.addEventListener("click", function() {
            span.classList.toggle("completed");
            const task = this.parentElement;
            const list = task.parentElement.id === "currentTasksList" ? completedTasksList : currentTasksList;
            list.appendChild(task);
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
        currentTasksList.appendChild(li);
    }
});
