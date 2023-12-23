document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#form2").addEventListener("submit", function(event) {
        answer = document.querySelector("#favorite").value;
        if (answer === "mohamed" || answer === "sawsan") {
            alert("Wrong answer");
        } else if (answer === "salah" || answer === "all") {
            alert("Correct answer");
        } else {
            alert("Wrong answer");
        }
        event.preventDefault();
    });
});