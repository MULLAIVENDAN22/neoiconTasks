var typed = new Typed("#typewriter", {
  strings: ["Software Developer", "Full Stack Developer", "Frontend Developer"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true,
});
const about = document.querySelector(".about");
const profileMain = document.querySelector(".profileMain");

if (window.matchMedia("(min-width: 10px) and (max-width: 575.9px)").matches) {
  console.log("small device");

  about.classList.add("textAlign");
  //   if (profileMain.classList.contains("px-5")) {
  //     profileMain.classList.remove("px-5");
  //   }
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    if (scrollTop + viewportHeight >= fullHeight) {
      setTimeout(() => {
        const numArray = [1, 3, 4, 300];
        const numbers = document.querySelectorAll(".numbers");
        let index = 0;
        timeinterval(index, numArray[index++], 1000);
        timeinterval(index, numArray[index++], 700);
        timeinterval(index, numArray[index++], 600);
        timeinterval(index, numArray[index++], 20);

        function timeinterval(index, text, duration) {
          let count = 0;
          const timer = setInterval(() => {
            if (count <= text) {
              numbers[index].innerHTML = `${count}`;
              count++;
            } else {
              clearInterval(timer);
              return;
            }
          }, duration);
        }
      }, 2000);
    }
  });
} else {
  if (about.classList.contains("textAlign")) {
    about.classList.remove("textAlign");
  }
}

setTimeout(() => {
  const numArray = [1, 3, 4, 300];
  const numbers = document.querySelectorAll(".numbers");
  let index = 0;
  timeinterval(index, numArray[index++], 1000);
  timeinterval(index, numArray[index++], 700);
  timeinterval(index, numArray[index++], 600);
  timeinterval(index, numArray[index++], 20);

  function timeinterval(index, text, duration) {
    let count = 0;
    const timer = setInterval(() => {
      if (count <= text) {
        numbers[index].innerHTML = `${count}`;
        count++;
      } else {
        clearInterval(timer);
        return;
      }
    }, duration);
  }
}, 2000);

const homePage = document.querySelectorAll(".homePage");
homePage.forEach((value) => {
  value.addEventListener("click", () => {
    const targetPage = "../index.html";
    window.location.href = `./loading/loading.html?next=${encodeURIComponent(targetPage)}`;
  });
});

const services = document.querySelector(".services");
services.addEventListener("click", () => {
  const targetPage = "../services/services.html";
  window.location.href = `./loading/loading.html?next=${encodeURIComponent(targetPage)}`;
});