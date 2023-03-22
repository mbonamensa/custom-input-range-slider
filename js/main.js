
const range = document.querySelector("#input-length")

function InputChanges() {
    const min = range.min
    const max = range.max
    const val = range.value
    const calculate = ((val - min) / (max - min)) * 100 + "% 100%"

    range.style.backgroundSize = calculate

}

// Event listener
range.addEventListener("input", InputChanges)