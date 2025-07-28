
document.addEventListener("click",()=>{
    const input = document.querySelectorAll("input")
    const result = document.querySelector(".result")
    result.textContent = `${Number(input[0].value)+Number(input[1].value)}`
})