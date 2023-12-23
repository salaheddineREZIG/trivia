document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#form1").addEventListener("click", function(event) {
        let answer = "January 31st 2023";
        let tries = document.querySelectorAll("button");
        let answered = false;

        for (let i = 0; i < tries.length; i++) {

            if (tries[i].textContent === answer) {
                if (event.target === tries[i]) {
                    alert("Correct answer");
                    answered = true;
                    break;
                }
            }
        }

        if (!answered) {
            alert("Wrong answer");
        }

        event.preventDefault();
    });
});