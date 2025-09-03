const sideArray = [
  { h3: "Vanillia", img: "https://wallpapercave.com/wp/wp8868150.jpg" },
  {
    h3: "Chocalate",
    img: "https://w0.peakpx.com/wallpaper/754/603/HD-wallpaper-chocolate-ice-cream-close-up-sweets-ice-cream-balls-ice-cream.jpg",
  },
];

let sidecount = 0;

const sideBtn = document.querySelectorAll(".sidebtn");
const side = document.querySelectorAll(".side");

sideBtn[1].addEventListener("click", () => {
  sidecount++;
  console.log(sidecount, " next is clicked");

  if (sidecount > 1) {
    return;
  }
  side[0].innerHTML = ` <h1 class="fw-semibold">Real Icream For Real Ice</h1>
            <h1>Cream Lovers</h1>
            <p class="fw-medium mt-3 fs-5">Sweet Icream for Pleasure Seekers</p>
            <h3 class="mt-4" style="color: #264fd4">${sideArray[sidecount].h3}</h3>
            <button class="btn btn-secondary fw-medium mt-3" type="button">
              Buy Now
            </button>`;

  side[1].innerHTML = ` <img
              class="img-fluid"
              style="object-fit: cover"
              src="${sideArray[sidecount].img}"
              alt=""
              srcset=""
            />  `;
});

sideBtn[0].addEventListener("click", () => {
  sidecount--;
  console.log(sidecount, " next is clicked");

  if (sidecount < 0) {
    return;
  }
  side[0].innerHTML = ` <h1 class="fw-semibold">Real Icream For Real Ice</h1>
            <h1>Cream Lovers</h1>
            <p class="fw-medium mt-3 fs-5">Sweet Icream for Pleasure Seekers</p>
            <h3 class="mt-4" style="color: #264fd4">${sideArray[sidecount].h3}</h3>
            <button class="btn btn-secondary fw-medium mt-3" type="button">
              Buy Now
            </button>`;

  side[1].innerHTML = ` <img
              class="img-fluid"
              style="object-fit: cover"
              src="${sideArray[sidecount].img}"
              alt=""
              srcset=""
            />`;
});

document.querySelectorAll("ul li a").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(e.target.getAttribute("href")).scrollIntoView({
      behaviour: "smooth",
    });
  });
});
