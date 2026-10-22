// Theme toggle (saved in localStorage)
const root = document.documentElement;
const themeBtn = document.getElementById("themeToggle");
const saved = localStorage.getItem("theme") || "dark";
setTheme(saved);

function setTheme(t) {
  root.setAttribute("data-theme", t);
  themeBtn.textContent = t === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", t);
}
themeBtn.addEventListener("click", () => {
  setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
});

// Hamburger menu
const navLinks = document.getElementById("navLinks");
document.getElementById("menuBtn").addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

// Project data (potana projects ahiya lakho)
const projects = [
    {
    title: "Hang-Out Food Zone",
    desc: "A responsive food ordering web app with a glassmorphism login page, interactive food menu, live search, add/remove items, dynamic cart total, order placement, delivery address validation and order history.",
    tech: "HTML5, CSS3, JavaScript, jQuery, Font Awesome",
    code: "https://github.com/parmarjanak9714/food-website-fronted.",
    live: "https://food-website-fronted.vercel.app/"
  },
  {
    title: "Netflix Clone (MERN)",
    desc: "A full-stack video streaming platform inspired by Netflix UI/UX. Features an auto-rotating hero banner of trending movies, genre-wise scrollable rows powered by the TMDB API, YouTube trailer popups, global search across titles, genres and cast, and personal watchlists saved in MongoDB Atlas.",
    tech: "React.js, Node.js, Express.js, MongoDB Atlas, TMDB API, Tailwind CSS, SCSS, React Router, Vercel, Render",
    code: "https://github.com/parmarjanak9714/netflix-mern-clone",
    live: "https://netflix-mern-clone-two.vercel.app/"
  },
    {
    title: "Real-Time Chat App (MERN)",
    desc: "A production-ready real-time communication platform that replicates the modern WhatsApp web experience. Includes passwordless OTP onboarding, smart conditional user routing, a persistent bottom menu optimised for mobile web, contextual media-input controls, dynamic first-letter avatars, and dedicated dark and light modes. Fully mobile responsive.",
    tech: "React.js, Node.js, Express.js, MongoDB Atlas, Socket.io, Tailwind CSS, JWT, React Router, React Hot Toast, Vercel, Render",
    code: "https://github.com/parmarjanak9714/Chat-App",
    live: "https://chat-janakparmar.vercel.app/"
  }
];

// Modal
const modal = document.getElementById("modal");
function openModal(i) {
  const p = projects[i];
  document.getElementById("mTitle").textContent = p.title;
  document.getElementById("mDesc").textContent = p.desc;
  document.getElementById("mTech").textContent = p.tech;
  document.getElementById("mCode").href = p.code;
  document.getElementById("mLive").href = p.live;
  modal.classList.add("show");
}
const closeModal = () => modal.classList.remove("show");

document.querySelectorAll(".project").forEach(card => {
  card.addEventListener("click", () => openModal(card.dataset.id));
  card.addEventListener("keydown", e => { if (e.key === "Enter") openModal(card.dataset.id); });
});
document.getElementById("closeModal").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });