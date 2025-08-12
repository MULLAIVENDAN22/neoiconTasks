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

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  emailjs
    .sendForm("service_kup4v1t", "template_53qbimd", this)
    .then(() => {
      console.log("✅ Message sent successfully!");
      this.reset();
    })
    .catch((error) => {
      console.log("❌ Failed to send message: " + error.text);
    });
});
