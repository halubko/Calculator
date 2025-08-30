export function algorithm(num1, num2, operation) {
   num1 = Number(num1)
   num2 = Number(num2)

   switch (operation) {
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
