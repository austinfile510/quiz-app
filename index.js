const STORE = {
  questionNumber: 0,
  score: 0,
  page: "landing",
  questions: [
    {
      title: "What was the first video game console to be sold for home use?",
      answers: [
        "Magnavox Odyssey",
        "Nintendo Entertainment System (NES)",
        "Atari 2600",
        "Sega Genesis",
      ],
      correct: 0,
    },
    {
      title:
        "Mario originally debuted in Nintendo’s Donkey Kong (1981), but he wasn’t the plumber we know and love today – what job did he have in his first appearance?",
      answers: [
        "Chef",
        "Construction Worker",
        "Private Investigator",
        "Carpenter",
      ],
      correct: 0,
    },
    {
      title: "What was the first video game console to be sold for home use?",
      answers: [
        "Magnavox Odyssey",
        "Nintendo Entertainment System",
        "Atari 2600",
        "Sega Genesis",
      ],
      correct: 0,
    },
    {
      title: "What was the first video game console to be sold for home use?",
      answers: [
        "Magnavox Odyssey",
        "Nintendo Entertainment System",
        "Atari 2600",
        "Sega Genesis",
      ],
      correct: 0,
    },
  ],
};

function render() {
  const question = STORE.questions[STORE.questionNumber];
  if (STORE.page == "landing") {
    $("main").html(`
<section>
    <h2>Test your gaming knowledge! See how many questions you can answer.</h2>
    <button id = "start">Start Quiz</button>
</section>
`);
  } else if (STORE.page == "question") {
    $("main").html(`
    <section>
    <form>
    <h2>What was the first video game console to be sold for home use?</h2>
    <input type = "radio" name = "answers"/>
    <label>${question.answers[0]}</label>
    <input type = "radio" name = "answers"/>
    <label>${question.answers[1]}</label>
    <input type = "radio" name = "answers"/>
    <label>${question.answers[2]}</label>
    <input type = "radio" name = "answers"/>
    <label>${question.answers[3]}</label>
    <button>Submit Answer</button>
    </form>
</section>
    `);
  } else if (STORE.page == "feedback") {
    $("main").html(`
    <section>
    <h3>That's correct! Good Job.</h3> <!--  Correct Answer  -->
    <h3>Sorry, that's incorrect. The correct answer is "" </h3> <!-- Wrong Answer -->
    <button>Next Question</button>
</section>
    `);
  } else if (STORE.page == "results") {
    $("main").html(`

    `);
  }
}

function eventListeners() {
  $("body").on("click", "#start", (e) => {
    STORE.page = "question";
    render();
  });
  $("body").on("submit", "form", (e) => {
    e.preventDefault();
    STORE.questionNumber++;
    STORE.page = "question";

    render();
  });
  $("body").on("click", "#next", (e) => {
    STORE.page = "question";
    render();
  });
  $("body").on("click", "#restart", (e) => {
    STORE.page = "question";
    render();
  });
}

function main() {
  render();
  eventListeners();
}

$(main);
