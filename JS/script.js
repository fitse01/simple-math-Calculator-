document.addEventListener("DOMContentLoaded", function() {
    var display = document.getElementById("display");

    var buttons = document.querySelectorAll(".calculator input[type='button']");
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            var value = this.value;

            if (value === "AC") {
                display.value = "";
            } else if (value === " DC") {
                display.value = display.value.toString().slice(0, -1);
            } else if (value === "=") {
                display.value = eval(display.value);
            } else {
                display.value += value.trim();
            }
        });
    });
});