// Simple scroll animation using IntersectionObserver
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

  const text = "🚀 Welcome to my portfolio..!!";
  const typewriter = document.getElementById("typewriter");
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      typewriter.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100); // Speed (ms) between letters
    }
  }

  window.onload = typeEffect;
