const questions = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    answer: "Mars",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Leo Tolstoy",
      "George Orwell",
      "Mark Twain",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    answer: "Canberra",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Osmium", "Oxygen", "Oxide", "Oganesson"],
    answer: "Oxygen",
  },
  {
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    question: "Who is known as the Father of India?",
    options: [
      "Jawaharlal Nehru",
      "B. R. Ambedkar",
      "Mahatma Gandhi",
      "Sardar Patel",
    ],
    answer: "Mahatma Gandhi",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Diamond", "Iron", "Quartz"],
    answer: "Diamond",
  },
  {
    question: "Which country is the largest by area?",
    options: ["Canada", "China", "USA", "Russia"],
    answer: "Russia",
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
    answer: "Carbon Dioxide",
  },
  {
    question: "Which organ in the human body is responsible for pumping blood?",
    options: ["Lungs", "Kidneys", "Heart", "Liver"],
    answer: "Heart",
  },
];

let count = 0;
let questionNumbers = 1;
let score = 0;
let timer = [4, 59];
let currentAnswer;

const timing = document.querySelector(".timing");

const timeout = setInterval(() => {
  if (timer[1] < 0) {
    if (timer[0] == 0) {
      document.querySelector(".menuh2").textContent = `Time out`;
      won();
      clearInterval(timeout);
    } else {
      timer[0]--;
      timer[1] = 59;
    }
  } else {
    let time1 = "0" + timer[0];
    let time2 = timer[1] < 10 ? "0" + timer[1] : timer[1];
    timing.textContent = `${time1} : ${time2}`;
    timer[1]--;
  }
}, 1000);

const questionNumber = document.querySelector(".questionNumber");

const quiz = document.querySelector(".quiz");

const h2 = quiz.querySelector("h2");

const option = quiz.querySelectorAll(".option");

// const previousbtn = document.querySelector(".previous");
const nextbtn = document.querySelector(".next");
const submitbtn = document.querySelector(".submit");

document.addEventListener("DOMContentLoaded", () => {
  insertingQuestions();
});

option.forEach((value) => {
  value.addEventListener("click", (e) => {
    option.forEach((opt) => opt.classList.remove("clicked"));
    console.log(value.textContent, " is clicked");
    e.target.classList.toggle("clicked");
    currentAnswer = e.target.textContent;
  });
});

nextbtn.addEventListener("click", () => {
  if (
    ![...option].some((value) => {
      return value.classList.contains("clicked");
    })
  ) {
    return;
  }
  // previousbtn.classList.remove("hide");
  if (currentAnswer.toLowerCase() == questions[count].answer.toLowerCase()) {
    console.log("correct ans ", currentAnswer);
    score++;
    console.log("score", score);

    currentAnswer = "";
  }
  option.forEach((opt) => opt.classList.remove("clicked"));
  ++questionNumbers;
  ++count;
  console.log(count, questionNumbers);
  if (questionNumbers >= 10) {
    nextbtn.classList.add("fullHide");
    submitbtn.classList.remove("fullHide");
  }
  insertingQuestions();
});

function insertingQuestions() {
  questionNumber.textContent = `Question ${questionNumbers}`;
  h2.innerText = questions[count].question;
  option.forEach((value, index) => {
    value.innerText = questions[count].options[index];
  });
}

submitbtn.addEventListener("click", () => {
  if (currentAnswer.toLowerCase() == questions[count].answer.toLowerCase()) {
    console.log("correct ans ", currentAnswer);
    score++;
    console.log("score", score);
    currentAnswer = "";
  }
  document.querySelector(".menuh2").textContent = `Your Score is : ${score}`;
  won();
});

function won() {
  const wining = document.querySelector(".msg1");
  wining.classList.remove("hide");
  wining.classList.add("final");
}
