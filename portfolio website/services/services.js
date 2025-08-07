const homePage = document.querySelectorAll(".homePage");
homePage.forEach((value) => {
  value.addEventListener("click", () => {
    let targetPage = "../index.html";
    window.location.href = `../loading/loading.html?next=${encodeURIComponent(targetPage)}`;
  });
});

const services = document.querySelector(".services");
services.addEventListener("click", () => {
  let targetPage = "services.html";
  window.location.href = `../loading/loading.html?next=${encodeURIComponent(targetPage)}`;
});
