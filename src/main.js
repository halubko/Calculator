import "./assets/styles/styles.scss"
import { createCalculator } from "./calculator"

const calculator = createCalculator()

document.getElementById("app").innerHTML = `
<div class="wrapper">
            <div class="screen">
               <label for="output">
                  <input type="text" id="output" value="0" pattern="[0-9]*\\.?[0-9]*" />
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
               <button class="input_btn" input_data="0" id="zero">0</button>
               <button class="input_btn" input_data=".">.</button>
               <button class="functional" operator="equals">=</button>
            </div>
         </div>
`

//Input(text) validation
document.getElementById("output").addEventListener("input", (e) => {
   e.target.value = e.target.value.replace(/[^0-9.]/g, "")
})

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
