// ================= Active Navbar Highlight =================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 130;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ================= Card Glow Effect =================

document
  .querySelectorAll(".card, .about-cards article, .cert-card, .education-content, .experience-card")
  .forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.background = `
        radial-gradient(circle at ${x}px ${y}px, rgba(139, 92, 246, 0.28), rgba(13, 18, 37, 0.92) 42%)
      `;
    });

    card.addEventListener("mouseleave", () => {
      card.style.background = "";
    });
  });

// ================= Visitor Counter =================

const VISITOR_API_URL = "https://lc4974ybqd.execute-api.eu-west-2.amazonaws.com/visitors";

async function updateVisitorCounter() {
  const counterElement = document.getElementById("visitor-count");

  if (!counterElement) return;

  try {
    const response = await fetch(VISITOR_API_URL);
    const data = await response.json();

    counterElement.textContent = data.visitor_count;
  } catch (error) {
    console.error("Visitor counter error:", error);
    counterElement.textContent = "unavailable";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateVisitorCounter();
});

// ================= Mobile Menu =================

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.querySelector(".nav-links");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });
  });
}