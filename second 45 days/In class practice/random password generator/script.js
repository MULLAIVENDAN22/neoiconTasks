const generatebtn = document.querySelector(".generate");

const alphaNumericArray =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");

generatebtn.addEventListener("click", randomGenerate);

function randomGenerate() {
  function Random() {
    return Math.trunc(Math.random() * alphaNumericArray.length);
  }
  let str = "";
  for (let index = 0; index < 6; index++) {
    str += alphaNumericArray[Random()];
  }
  const pattern1 = /^[a-zA-z0-9]+$/;
  const pattern2 = /\d.*\d/;
  const pattern3 = /[a-zA-z].*[a-zA-z]/;
  if (pattern1.test(str) && pattern2.test(str) && pattern3.test(str)) {
    generatebtn.nextElementSibling.textContent = str;
  } else {
    randomGenerate();
    return;
  }
}
