let submitButton = document.querySelector("#numbersForm button");
let campoA = document.querySelector("#campoA");
let campoB = document.querySelector("#campoB");

submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        validateNumbers();
});

function validateNumbers() {
    if (campoA.value < campoB.value) {
        campoA.style.borderColor = "green";
        campoB.style.borderColor = "green";
        document.querySelector("#error-message").style.display = "none";
        document.querySelector("#success-message").style.display = "block";
    } else {
        campoA.style.borderColor = "red";
        campoB.style.borderColor = "red";
        document.querySelector("#error-message").style.display = "block";
        document.querySelector("#success-message").style.display = "none";
    }
}