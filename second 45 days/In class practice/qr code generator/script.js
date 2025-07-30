const generatebtn = document.querySelector(".generate");
const canvas = document.querySelector("canvas");

generatebtn.addEventListener("click", () => {
  // document.querySelector(".result").innerHTML = ""
  canvas.innerHTML = "";
  const input = document.querySelector("input");
  QRCode.toCanvas(
    canvas,
    input.value.trim(),
    {
      width: 170,
      height: 170,
      color: {
        dark: "#e40d6eff",
        light: "#FFFFFF",
      },
      margin: 2,
    },
    (err) => {
      if (err) console.log(err);
    }
  );
});
