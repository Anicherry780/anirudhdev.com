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

// typing effect
const typingEl = document.querySelector(".typing");
if (typingEl) {
  const text = typingEl.getAttribute("data-text");
  let i = 0;
  function type() {
    if (i < text.length) {
      typingEl.textContent += text.charAt(i);
      i++;
      setTimeout(type, 60);
    } else {
      setTimeout(() => typingEl.classList.add("done"), 1500);
    }
  }
  setTimeout(type, 400);
}

// staggered scroll-in
const animEls = document.querySelectorAll("[data-animate]");
const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries.filter((e) => e.isIntersecting);
    visible.forEach((entry, i) => {
      setTimeout(() => {
        entry.target.classList.add("visible");
      }, i * 100);
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.15 }
);

animEls.forEach((el) => observer.observe(el));
