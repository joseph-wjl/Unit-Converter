const convertBtn = document.getElementById("convert")
const input = document.getElementById("input")
const length = document.getElementById("length")

convertBtn.addEventListener("click", function () {
    length.textContent = `${input.value} meters = ${input.value * 3.281} feet | ${input.value} feet = ${input.value * 0.304} meters`
    volume.textContent = `${input.value} liters = ${input.value * 0.264} gallons | ${input.value} gallons = ${input.value * 3.785} liters`
    mass.textContent = `${input.value} kilograms = ${input.value * 2.204} pounds | ${input.value} liters = ${input.value * 0.453} gallons`
})