
const range = document.querySelector("#range")

range.addEventListener("input", () => {

    const min = range.min
    const max = range.max
    const currentVal = range.value

    range.style.backgroundSize = ((currentVal - min) / (max - min)) * 100 + "% 100%"
} )