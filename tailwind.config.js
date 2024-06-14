/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,html}"],
  darkMode: "media",
  prefix: "wf-",
  theme: {
    extend: {
      boxShadow: {
        intense: "0 0 5px 5px rgba(0, 0, 0, 0.25)"
      }
    }
  }
}
