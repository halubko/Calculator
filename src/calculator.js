import { calculate } from "./calculate"

export function createCalculator() {
   let num1 = null
   let selected_operator = null
   let output = null
   let clearScreen = false

   document.addEventListener("DOMContentLoaded", () => {
      output = document.getElementById("output");
   })

   return {
      clearBtn() {
         if (output.value === "0") {
            selected_operator = null
            num1 = null

            document.querySelectorAll(".functional").forEach((btn) => {
               btn.removeAttribute("id")
            })
            document.getElementById("clear").innerText = "AC"
         } else if (output.value.length <= 1 || output.value === "0.") {
            document.getElementById("clear").innerText = "AC"
            output.value = "0"
         } else {
            output.value = output.value.slice(0, -1)
         }
      },

      funcBtn(btn, operator) {
         if (operator !== "equals") {
            document.querySelectorAll(".functional").forEach((past) => {
               past.removeAttribute("id")
            })
            btn.id = "active"
            if (!selected_operator || clearScreen) {
               num1 = output.value
            }
            num1 = output.value
            clearScreen = true
            selected_operator = operator
         }

         if (operator === "equals") {
            const active_btn = document.getElementById("active")
            if (active_btn) {
               output.value = calculate(num1, output.value, selected_operator)

               if (output.value === "0") {
                  selected_operator = null
                  num1 = null
                  document.getElementById("clear").innerText = "AC"
               }

               document.querySelectorAll(".functional").forEach((btn) => {
                  btn.removeAttribute("id")
                  selected_operator = null
               })
            }
         }
      },

      inputNumber(input_data) {
         if (input_data === "." && output.value.includes(".")) {
            return
         }

         if (clearScreen) {
            output.value = ""
            clearScreen = false
         }

         if (output.value === "0" && input_data !== ".") {
            output.value = ""
            output.value += input_data
            document.getElementById("clear").innerText = `C`
         } else {
            document.getElementById("clear").innerText = `C`
            output.value += input_data
         }
      },

      countPercent() {
         const percentage = 100

         if (selected_operator === "add" || selected_operator === "subtract") {
            output.value = (num1 * output.value) / percentage
         } else {
            output.value = output.value / percentage
         }
      },
   }
}
