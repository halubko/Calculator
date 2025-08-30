import "./assets/styles/styles.scss"
import { algorithm } from "./algorithms"

//Input(text) validation
document.getElementById("output").addEventListener("input", (e) => {
   e.target.value = e.target.value.replace(/[^0-9.]/g, "")
})

//Input with calculator's keyboard
document.querySelectorAll(".input_btn").forEach((btn) =>
   btn.addEventListener("click", () => {
      const input_data = btn.getAttribute("input_data")
      const output = document.getElementById("output")

      if (input_data === "." && output.value.includes(".")) {
         return
      }

      if (output.getAttribute("number2") === "true") {
         output.value = ""
         output.removeAttribute("number2")
      }

      if (output.value === "0" && input_data !== ".") {
         output.value = ""
         output.value += input_data
      } else {
         output.value += input_data
      }
   })
)

//AC button
document.getElementById("clear").addEventListener("click", () => {
   document.getElementById("output").value = "0"
   document.querySelectorAll(".functional").forEach((btn) => {
      btn.removeAttribute("id")
   })
})

//Functional buttons
document.querySelectorAll(".functional").forEach((btn) =>
   btn.addEventListener("click", () => {
      const output = document.getElementById("output")
      const operator = btn.getAttribute("operator")

      if (operator !== "equals") {
         document.querySelectorAll(".functional").forEach((past) => {
            past.removeAttribute("id")
         })
         btn.id = "active"
         btn.setAttribute("number1", output.value)
         output.setAttribute("number2", "true")
      }

      if (operator === "equals") {
         const active_btn = document.getElementById("active")
         if (active_btn) {
            const num1 = active_btn.getAttribute("number1")
            const selected_operator = active_btn.getAttribute("operator")

            output.value = algorithm(num1, output.value, selected_operator)

            document.querySelectorAll(".functional").forEach((btn) => {
               btn.removeAttribute("id")
               btn.removeAttribute("number1")
            })
         }
      }
   })
)

//Invert button
document.getElementById("invert").addEventListener("click", () => {
   const output = document.getElementById("output")
   output.value = -output.value
})
