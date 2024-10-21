const surveyForm = document.getElementById("surveyForm");
const result = document.getElementById("result");
const responseName = document.getElementById("responseName");
const responseEmail = document.getElementById("responseEmail");
const responseFeedback = document.getElementById("responseFeedback");
const responseRatings = document.getElementById("responseRatings");
// const submit=document.getElementById("submit");

// we can directly add submit event to form
surveyForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const feedback = document.getElementById("feedback").value;
  const rating = document.getElementById("ratings").value;

  responseName.textContent = `Name: ${name}`;
  responseEmail.textContent = `Email: ${email}`;
  responseFeedback.textContent = `Feedback: ${feedback}`;
  responseRatings.textContent = `Ratings: ${rating}`;

  result.classList.remove("hidden");
});
