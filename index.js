const domain = "https://pphs-quiz-machine.herokuapp.com";
function getQuiz(event) {
  fetch(domain + "/quizzes/" + event.target.id)
    .then(response => {
      return response.json();
    })
    .then(quiz => {
      const quizHTML = `<h1>${
        quiz.question
      }</h1><form action="/answers" method="POST"></form>`;
      document.getElementById("quiz").innerHTML;
    });
}

function getQuizzes() {
  fetch(domain + "/quizzes")
    .then(response => {
      return response.json();
    })
    .then(quizzes => {
      let quizzesHTML = quizzes.map(quiz => {
        return `
          <section>
            <a href="${domain}/quizzes/${quiz.id}">
              ${quiz.question}
            </a>
            <br>
            Number correct: ${quiz.correct}
            <br>
            Number incorrect: ${quiz.incorrect}
           </section>`;
      });
      document.getElementById("quizzes").innerHTML = quizzesHTML.join("");
    });
}

setInterval(getQuizzes, 1000);
