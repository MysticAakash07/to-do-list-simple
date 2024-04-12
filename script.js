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
});
