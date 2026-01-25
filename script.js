// footer year
document.getElementById("year").textContent = new Date().getFullYear();

// theme toggle
const root = document.documentElement;
const btn = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
  btn.textContent = savedTheme === "dark" ? "Light" : "Dark";
}

btn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  btn.textContent = next === "dark" ? "Light" : "Dark";
});
