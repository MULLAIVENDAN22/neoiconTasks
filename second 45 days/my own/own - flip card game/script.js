const content = document.querySelector(".content");
const fruit = [
  "🍇",
  "🍈",
  "🍉",
  "🍊",
  "🍋",
  "🍋‍🟩",
  "🍌",
  "🍍",
  "🥭",
  "🍎",
  "🍏",
  "🍐",
];
const allFruits = [...fruit, ...fruit];
const randomFruit = [];
let firstChild, secondChild;

let count = 1,
  points = 0,
  remainingLife = 10,
  boolean = false;

function clicked(no) {
  if (boolean) return;
  console.log(no, " card was clicked");
  rotate(no);
  if (count === 1) {
    firstChild = no;
    ++count;
    console.log("count : ", count, "firstchild : ", firstChild);
  } else if (count === 2) {
    boolean = true;
    secondChild = no;
    console.log("count : ", count, "firstchild : ", secondChild);
    setTimeout(() => {
      match(firstChild, secondChild);
      boolean = false;
    }, 1000);
  }
}

function rotate(no) {
  const fruitCard = document.querySelector(`.cards:nth-child(${no})`);
  fruitCard.classList.toggle("rotate");
  fruitCard.classList.add("clickEvents");
  setTimeout(() => {
    fruitCard.children[0].classList.toggle("hide");
  }, 400);
}

function match(first, second) {
  let card1 = document.querySelector(`.cards:nth-child(${first})`);
  let card2 = document.querySelector(`.cards:nth-child(${second})`);
  const score = document.querySelector(".score");
  const life = document.querySelector(".life");
  if (card1.children[0].innerText == card2.children[0].innerText) {
    console.log(
      randomFruit[first - 1],
      randomFruit[second - 1],
      " are correct"
    );
    score.innerHTML = `score : ${++points}`;
    if (points === 24) won();
  } else {
    console.log(randomFruit[first - 1], randomFruit[second - 1], " are wrong");
    life.innerHTML = `life : ${--remainingLife}`;
    if (remainingLife < 1) loose();
    card1.classList.remove("clickEvents");
    card1.children[0].classList.toggle("hide");
    card1.classList.toggle("rotate");
    card2.classList.remove("clickEvents");
    card2.children[0].classList.toggle("hide");
    card2.classList.toggle("rotate");
  }
  count = 1;
}

function won() {
  const wining = document.querySelector(".msg1");
  wining.classList.remove("hide");
  wining.classList.add("won");
}

function loose() {
  const losing = document.querySelector(".msg2");
  losing.classList.remove("hide");
  losing.classList.add("loose");
}

document.addEventListener("DOMContentLoaded", () => {
  //   const wining = document.querySelector(".won");
  //   const losing = document.querySelector(".loose");
  //   wining.classList.add("hide");
  //   losing.classList.add("hide");
  console.log(allFruits);
  const makingRandomFruit = (array) => {
    const set = new Set();
    while (set.size < array.length) {
      let random = Math.floor(Math.random() * array.length);
      if (set.has(random)) continue;
      else {
        set.add(random);
        randomFruit.push(array[random]);
      }
    }
    console.log(randomFruit);
  };
  makingRandomFruit(allFruits);

  let no = 1;
  randomFruit.forEach((value) => {
    const maincard = document.createElement("div");
    maincard.setAttribute("data-set", no++);
    maincard.classList.add("cards");
    const card = document.createElement("div");
    card.innerText = value;
    card.classList.toggle("hide");
    maincard.appendChild(card);
    content.appendChild(maincard);
  });

  let cards = document.querySelectorAll(".cards");
  cards.forEach((element) => {
    element.addEventListener("click", (e) => {
      clicked(e.currentTarget.dataset.set);
    });
  });
});
