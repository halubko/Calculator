import "./assets/styles/styles.scss"

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
      if (output.value === "0" && input_data !== ".") {
         output.value = ""
         output.value += input_data
      } else {
         output.value += input_data
      }
   })
)
