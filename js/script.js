console.log("script.js connected!");

// Find the questions, results button, and result box
const questionBlocks = document.querySelectorAll(".question-block");
const resultsButton = document.getElementById("show-results");
const resultContainer = document.getElementById("result-container");

// Save one answer for each question
// Zero means no answer has been picked yet
const answers = [0, 0, 0, 0];

// Go through each question
questionBlocks.forEach(function (question, questionIndex) {
  const buttons = question.querySelectorAll(".answer-btn");

  // Add a click event to each answer button
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {

      // Clear the old choice for this question
      buttons.forEach(function (answerButton) {
        answerButton.classList.remove("selected");
        answerButton.setAttribute("aria-pressed", "false");
      });

      // Mark the answer that was clicked
      button.classList.add("selected");
      button.setAttribute("aria-pressed", "true");

      // Turn the answer value into a number and save it
      answers[questionIndex] = Number(button.dataset.answer);

      // Clear the old result when an answer changes
      resultContainer.textContent = "";

      // Check the answers in the console
      console.log(answers);
    });
  });
});

// Add the points and show the result
function displayResult() {
  let total = 0;

  for (let i = 0; i < answers.length; i++) {

    // Check that every question has an answer
    if (answers[i] === 0) {
      resultContainer.textContent =
        "Please answer all four questions first.";
      return;
    }

    // Add this answer to the total
    total = total + answers[i];
  }

  console.log("Total points:", total);

  // 4 to 5 points gives Cozy Cat
  if (total <= 5) {
    resultContainer.textContent =
      "You are a Cozy Cat! You enjoy naps, soft blankets, and relaxing at home.";

  } else if (total === 6) {
    // 6 points means an even mix of both
    resultContainer.textContent =
      "You are a Balanced Cat! You enjoy a good nap and a good adventure.";

  } else {
    // 7 to 8 points gives Curious Cat
    resultContainer.textContent =
      "You are a Curious Cat! You enjoy playing, exploring, and trying new things.";
  }
}

// Run the function when Show Results is clicked
resultsButton.addEventListener("click", displayResult);