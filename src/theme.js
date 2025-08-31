const darkTheme = "dark-theme"
const lightTheme = "light-theme"
let isDark = null

const theme = {
   dark: "dark",
   light: "light",
   auto: "auto",
}

const setTheme = (mode) => {
   switch (mode) {
      case theme.dark: {
         document.body.classList.add(darkTheme)
         document.body.classList.remove(lightTheme)
         isDark = theme.dark
         return
      }
      case theme.light: {
         document.body.classList.add(lightTheme)
         document.body.classList.remove(darkTheme)
         isDark = theme.light
         return
      }
      default: {
         const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
         if (isDarkTheme) {
            document.body.classList.add(darkTheme)
            document.body.classList.remove(lightTheme)
         } else {
            document.body.classList.add(lightTheme)
            document.body.classList.remove(darkTheme)
         }
         isDark = theme.auto
         return
      }
   }
}

export const initTheme = () => {
   setTheme(isDark)
}

export function changeTheme() {
   if (isDark === theme.light) {
      setTheme(theme.dark)
      document.querySelector(".theme").innerText = "Dark"
   } else if (isDark === theme.dark) {
      setTheme(theme.auto)
      document.querySelector(".theme").innerText = "Auto"
   } else {
      setTheme(theme.light)
      document.querySelector(".theme").innerText = "Light"
   }
}
