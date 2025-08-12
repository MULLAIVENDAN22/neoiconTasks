const btn = document.querySelectorAll(".btnbuttons");
const buttonClick = document.querySelectorAll(".buttonClick");

for (let index = 0; index < 4; index++) {
  btn[index].addEventListener("click", () => {
    buttonClick.forEach((value, index2) => {
      btn[index2].classList.remove("btncolor");
      value.classList.add("d-none");
    });
    buttonClick[index].classList.remove("d-none");
    btn[index].classList.add("btncolour")
  });
}

const homePage = document.querySelectorAll(".homePage");
homePage.forEach((value) => {
  value.addEventListener("click", () => {
    let targetPage = "../index.html";
    window.location.href = `../loading/loading.html?next=${encodeURIComponent(targetPage)}`;
  });
});

const services = document.querySelector(".services");
services.addEventListener("click", () => {
  let targetPage = "../services/services.html";
  window.location.href = `../loading/loading.html?next=${encodeURIComponent(targetPage)}`;
});

const resume = document.querySelector(".resume");
resume.addEventListener("click", () => {
  let targetPage = "../resume/resume.html";
  window.location.href = `../loading/loading.html?next=${encodeURIComponent(targetPage)}`;
});

const contact = document.querySelectorAll(".contact");
contact.forEach((value)=>{
  value.addEventListener("click", () => {
  let targetPage = "../contact/contact.html";
  window.location.href = `../loading/loading.html?next=${encodeURIComponent(targetPage)}`;
});
})

const work = document.querySelector(".work");
work.addEventListener("click", () => {
  let targetPage = "../work/work.html";
  window.location.href = `../loading/loading.html?next=${encodeURIComponent(targetPage)}`;
});