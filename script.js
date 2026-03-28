// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// ── Floating Particles ──
(function () {
  var canvas = document.getElementById("particles");
  var ctx = canvas.getContext("2d");
  var particles = [];
  var count = 60;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  for (var i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.4 + 0.1,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(function (p) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 101, 34, " + p.opacity + ")";
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
    });

    // Draw connections
    for (var i = 0; i < particles.length; i++) {
      for (var j = i + 1; j < particles.length; j++) {
        var dx = particles[i].x - particles[j].x;
        var dy = particles[i].y - particles[j].y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = "rgba(255, 101, 34, " + (0.06 * (1 - dist / 120)) + ")";
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }
  draw();
})();

// ── GSAP Animations ──

// Hero load
var tl = gsap.timeline();

tl.fromTo(
  ".hero",
  { opacity: 0, y: 60, scale: 0.97 },
  { opacity: 1, y: 0, scale: 1, ease: "power3.out", duration: 1 }
);

tl.fromTo(
  ".social-link",
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0, ease: "power2.out", duration: 0.4, stagger: 0.08 },
  "-=0.4"
);

// Skills
var tlSkills = gsap.timeline({
  scrollTrigger: {
    trigger: ".skills",
    start: "0% 85%",
  },
});

tlSkills.fromTo(
  "#skill-1",
  { opacity: 0, y: 60, rotateX: 15 },
  { opacity: 1, y: 0, rotateX: 0, ease: "power2.out", duration: 0.8 }
);

tlSkills.fromTo(
  "#skill-2",
  { opacity: 0, y: 60, rotateX: 15 },
  { opacity: 1, y: 0, rotateX: 0, ease: "power2.out", duration: 0.8 },
  "-=0.5"
);

tlSkills.fromTo(
  "#skill-3",
  { opacity: 0, y: 60, rotateX: 15 },
  { opacity: 1, y: 0, rotateX: 0, ease: "power2.out", duration: 0.8 },
  "-=0.5"
);

// Info row
gsap.fromTo(
  ".info-card",
  { opacity: 0, y: 50, scale: 0.95 },
  {
    opacity: 1, y: 0, scale: 1,
    ease: "power2.out", duration: 0.8, stagger: 0.15,
    scrollTrigger: { trigger: ".info-row", start: "0% 85%" },
  }
);

// Projects
["#project-1", "#project-2", "#project-3"].forEach(function (id) {
  gsap.fromTo(
    id,
    { opacity: 0, y: 70, rotateX: 8 },
    {
      opacity: 1, y: 0, rotateX: 0,
      ease: "power2.out", duration: 1,
      scrollTrigger: { trigger: id, start: "0% 85%" },
    }
  );
});

// Small projects
gsap.fromTo(
  ".project-small",
  { opacity: 0, y: 50, scale: 0.95 },
  {
    opacity: 1, y: 0, scale: 1,
    ease: "power2.out", duration: 0.8, stagger: 0.12,
    scrollTrigger: { trigger: ".project-grid", start: "0% 85%" },
  }
);

// Contact
gsap.fromTo(
  ".contact",
  { opacity: 0, y: 60, scale: 0.97 },
  {
    opacity: 1, y: 0, scale: 1,
    ease: "power2.out", duration: 1,
    scrollTrigger: { trigger: ".contact", start: "0% 85%" },
  }
);

// ── 3D Tilt Effect ──
var tiltEls = document.querySelectorAll(
  ".hero, .skill-card, .project, .project-small, .info-card"
);

tiltEls.forEach(function (el) {
  el.addEventListener("mousemove", function (e) {
    var rect = el.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    var cx = rect.width / 2;
    var cy = rect.height / 2;
    var rx = ((y - cy) / cy) * -8;
    var ry = ((x - cx) / cx) * 8;
    el.style.transform =
      "perspective(600px) rotateX(" + rx + "deg) rotateY(" + ry + "deg) scale3d(1.02, 1.02, 1.02)";
  });

  el.addEventListener("mouseleave", function () {
    el.style.transform = "perspective(600px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
    el.style.transition = "transform 0.4s ease";
  });

  el.addEventListener("mouseenter", function () {
    el.style.transition = "transform 0.1s ease";
  });
});
