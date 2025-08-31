import "./assets/styles/styles.scss"
import { createCalculator } from "./calculator"
import { changeTheme, initTheme } from "./theme"

document.addEventListener("DOMContentLoaded", () => {
   initTheme()
})

const calculator = createCalculator()

document.getElementById("app").innerHTML = `
<div class="wrapper">
            <div class="screen">
               <label for="output">
                  <input type="text" id="output" value="0" readonly />
               </label>
            </div>
            <div class="buttons">
               <button class="top" id="clear">AC</button>
               <button class="top" id="invert">+/-</button>
               <button class="top" id="percent">%</button>
               <button class="functional" operator="divide">/</button>
               <button class="input_btn" input_data="7">7</button>
               <button class="input_btn" input_data="8">8</button>
               <button class="input_btn" input_data="9">9</button>
               <button class="functional" operator="multiply">x</button>
               <button class="input_btn" input_data="4">4</button>
               <button class="input_btn" input_data="5">5</button>
               <button class="input_btn" input_data="6">6</button>
               <button class="functional" operator="subtract">-</button>
               <button class="input_btn" input_data="1">1</button>
               <button class="input_btn" input_data="2">2</button>
               <button class="input_btn" input_data="3">3</button>
               <button class="functional" operator="add">+</button>
               <button class="input_btn" input_data="0" >0</button>
               <button class="theme" >Auto</button>
               <button class="input_btn" input_data=".">.</button>
               <button class="functional" operator="equals">=</button>
            </div>
         </div>
`

//Input with calculator's keyboard
document.querySelectorAll(".input_btn").forEach((btn) =>
   btn.addEventListener("click", () => {
      const input_data = btn.getAttribute("input_data")
      calculator.inputNumber(input_data)
   })
)

//AC button
document.getElementById("clear").addEventListener("click", () => {
   calculator.clearBtn()
})

//Functional buttons
document.querySelectorAll(".functional").forEach((btn) =>
   btn.addEventListener("click", () => {
      const operator = btn.getAttribute("operator")

      calculator.funcBtn(btn, operator)
   })
)

//Invert button
document.getElementById("invert").addEventListener("click", () => {
   const output = document.getElementById("output")
   output.value = -output.value
})

//Percent button
document.getElementById("percent").addEventListener("click", () => {
   calculator.countPercent()
})

//Theme button
document.querySelector(".theme").addEventListener("click", () => {
   changeTheme()
})

//Keyboard input
document.addEventListener("keydown", (e) => {
   const inputBtns = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."]
   const funcBtns = {
      Enter: "equals",
      "=": "equals",
      "*": "multiply",
      x: "multiply",
      х: "multiply",
      "/": "divide",
      "+": "add",
      "-": "subtract",
   }
   const topBtns = {
      Backspace: "clear",
      "%": "percent",
   }

   if (inputBtns.includes(e.key)) {
      e.preventDefault()
      document.querySelector(`.input_btn[input_data="${e.key}"]`).click()
      document.querySelector(`.input_btn[input_data="${e.key}"]`).classList.toggle("active")
   }

   if (funcBtns[e.key]) {
      e.preventDefault()
      document.querySelector(`.functional[operator="${funcBtns[e.key]}"]`).click()
   }
   if (topBtns[e.key]) {
      e.preventDefault()
      document.getElementById(topBtns[e.key]).click()
   }
})
