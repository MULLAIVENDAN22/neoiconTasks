
setTimeout(() => {
  const boxes = document.querySelectorAll(".boxes");
  let timing1 = 500;
  boxes.forEach((value) => {
    setTimeout(() => {
      value.style.top = 0;
      value.classList.add("transition");
    }, timing1);
    timing1 += 150;
    console.log(timing1);
  });
}, 500);

setTimeout(() => {
  const boxes = document.querySelectorAll(".boxes");
  let timing1 = 0;
  boxes.forEach((value) => {
    setTimeout(() => {
      value.style.top = "100%";
    }, timing1);
    timing1 += 150;
    console.log(timing1);
  });
}, 2900);

const params = new URLSearchParams(window.location.search);
const nextPage = params.get("next");
setTimeout(() => {
  if (nextPage) {
    window.location.href = nextPage;
  } else {
    console.error("No next page specified.");
  }
}, 4700);
