const addbtn = document.querySelector(".add");
const result = document.querySelector(".result");
result

addbtn.addEventListener("click", () => {
  const input = document.querySelector("input");
  if (input.value == "") {
    input.setAttribute("placeholder", "Input is empty");
    setTimeout(() => {
      input.setAttribute("placeholder", "Enter here");
    }, 1000);
    return;
  } else {
    result.innerHTML += `<div class="list">
          <div class="left">
            <span class="round"></span>
            <h3>${input.value}</h3>
          </div>
          <img class="image" src="icons8-dustbin-66 (1).png" alt="" srcset="" />
        </div>`;
    setTimeout(() => {
      input.value = "";
    }, 300);
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("image")) deletebtn(e.target);
  if (e.target.classList.contains("round")) strike(e.target);
});

function deletebtn(e) {
  e.closest(".list").remove();
}

function strike(e) {
  e.nextElementSibling.classList.toggle("text");
  e.classList.toggle("circle");
}
