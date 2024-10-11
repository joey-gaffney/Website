// Set current year in footer
const year = document.getElementById("current-year");
year.textContent = new Date().getFullYear();

// Toggle mobile menu
const toggleMenu = document.getElementById("toggle-menu");
const navLinks = document.getElementById("nav-links");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  navLinks.classList.toggle("show");
});

// Project modal data
const projects = [
  {
    id: 1,
    title: "React pricing feature",
    description:
      "I replicated this responsive design from Frontendmentor.io using React and vanilla CSS. The project includes a pricing feature with a toggle button to switch between different plans.",
    image: "images/pricing-app.png",
    demo: "https://joey-gaffney.github.io/pricingfeature/",
    code: "https://github.com/joey-gaffney/pricingfeature",
  },
];

// DOM element references
const modalOverlay = document.getElementById("modal-overlay");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalImage = document.getElementById("modal-image");
const demoLink = document.getElementById("demo-link");
const codeLink = document.getElementById("code-link");
const closeBtn = document.getElementById("close-btn");

// Open modal function
function openModal(projectId) {
  const project = projects.find((proj) => proj.id === Number(projectId));

  if (project) {
    // Set project details
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalImage.src = project.image;
    demoLink.href = project.demo;
    codeLink.href = project.code;
    // Disable body scroll
    document.body.classList.add("no-scroll");
    // Display and activate modal
    requestAnimationFrame(() => modalOverlay.classList.add("is-active"));
    // Delay rendering of close button
    setTimeout(() => {
      closeBtn.classList.add("is-visible");
    }, 1000); // 1 second delay
  }
}

// Close modal function
function closeModal() {
  modalOverlay.classList.remove("is-active");
  // Reset the close button visibility immediately
  closeBtn.classList.remove("is-visible");
  // Enable body scroll
  document.body.classList.remove("no-scroll");
}

// Event delegation for project links
document.querySelectorAll(".project-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const projectId = link.getAttribute("data-id");
    openModal(projectId);
  });
});

// Close modal when clicking the close button or outside the modal content
closeBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modalOverlay.classList.contains("is-active")) {
    closeModal();
  }
});
