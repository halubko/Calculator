export function calculate(num1, num2, operator) {
   num1 = Number(num1)
   num2 = Number(num2)

   switch (operator) {
      case "add":
         return num1 + num2
      case "subtract":
         return num1 - num2
      case "multiply":
         return num1 * num2
      case "divide":
         return num2 !== 0 ? num1 / num2 : "Division by zero"
      default:
         return "Unknown operation"
   }
}
