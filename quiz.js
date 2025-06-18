function checkAnswer() {
    // Step 1: Identify the correct answer
    var correctAnswer = "4";

    // Step 2: Retrieve the user's answer
    var userAnswer = document.querySelector('input[name="quiz"]:checked');
    if (userAnswer) {
        userAnswer = userAnswer.value;
    } else {
        userAnswer = null;
    }

    // Step 3: Compare the user's answer with the correct answer
    var feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Step 4: Add event listener to the submit button
var submitButton = document.getElementById("submit-answer");
if (submitButton) {
    submitButton.addEventListener("click", checkAnswer);
}  