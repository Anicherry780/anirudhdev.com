// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// ── GSAP Animations ──

// Hero load animation
var tl = gsap.timeline();

tl.fromTo(
  ".about-left",
  { opacity: 0, y: 80 },
  { opacity: 1, y: 0, ease: "power2.out", duration: 0.7 }
);

tl.fromTo(
  ".about-right",
  { opacity: 0, y: 80 },
  { opacity: 1, y: 0, ease: "power2.out", duration: 0.7 },
  "-=0.4"
);

tl.fromTo(
  ".social-link",
  { opacity: 0, y: 30 },
  { opacity: 1, y: 0, ease: "power2.out", duration: 0.5, stagger: 0.1 },
  "-=0.3"
);

// Skills scroll animation
var tlSkills = gsap.timeline({
  scrollTrigger: {
    trigger: ".skills",
    start: "0% 85%",
    end: "10% 70%",
  },
});

tlSkills.fromTo(
  "#skill-1",
  { opacity: 0, y: 80 },
  { opacity: 1, y: 0, ease: "power2.out", duration: 0.8 }
);

tlSkills.fromTo(
  "#skill-2",
  { opacity: 0, y: 80 },
  { opacity: 1, y: 0, ease: "power2.out", duration: 0.8 },
  "-=0.5"
);

tlSkills.fromTo(
  "#skill-3",
  { opacity: 0, y: 80 },
  { opacity: 1, y: 0, ease: "power2.out", duration: 0.8 },
  "-=0.5"
);

// Info row animation
gsap.fromTo(
  ".info-card",
  { opacity: 0, y: 60 },
  {
    opacity: 1,
    y: 0,
    ease: "power2.out",
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".info-row",
      start: "0% 85%",
    },
  }
);

// Project animations
var projects = ["#project-1", "#project-2", "#project-3"];
projects.forEach(function (id) {
  gsap.fromTo(
    id,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      y: 0,
      ease: "power2.out",
      duration: 1,
      scrollTrigger: {
        trigger: id,
        start: "0% 85%",
      },
    }
  );
});

// Small project grid
gsap.fromTo(
  ".project-small",
  { opacity: 0, y: 60 },
  {
    opacity: 1,
    y: 0,
    ease: "power2.out",
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".project-grid",
      start: "0% 85%",
    },
  }
);

// ── 3D Tilt Effect ──
var tiltCards = document.querySelectorAll(
  ".about-left, .about-right, .skill-card, .project, .project-small, .info-card"
);

tiltCards.forEach(function (card) {
  card.style.transition = "transform 0.15s ease";
  card.style.transformStyle = "preserve-3d";

  card.addEventListener("mousemove", function (e) {
    var rect = card.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    var centerX = rect.width / 2;
    var centerY = rect.height / 2;
    var rotateX = ((y - centerY) / centerY) * -6;
    var rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform =
      "perspective(800px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale3d(1.02, 1.02, 1.02)";
  });

  card.addEventListener("mouseleave", function () {
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  });
});

// Contact animation
gsap.fromTo(
  ".contact",
  { opacity: 0, y: 80 },
  {
    opacity: 1,
    y: 0,
    ease: "power2.out",
    duration: 1,
    scrollTrigger: {
      trigger: ".contact",
      start: "0% 85%",
    },
  }
);
