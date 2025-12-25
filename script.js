// Smooth scrolling and active navigation link highlight
const navLinks = document.querySelectorAll(".nav__link");
const sections = document.querySelectorAll("main section, header");
const navToggle = document.querySelector(".nav__toggle");
const navLinksContainer = document.querySelector(".nav__links");

// Smooth scroll behavior
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    targetElement.scrollIntoView({ behavior: "smooth" });

    // Close mobile nav
    navLinksContainer.classList.remove("open");
  });
});

// Navigation toggle (mobile)
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinksContainer.classList.toggle("open");
  });
}

// Highlight active nav link on scroll
function onScroll() {
  const scrollPosition = window.scrollY + window.innerHeight / 3;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const offsetTop = window.scrollY + rect.top;
    const offsetBottom = offsetTop + rect.height;
    const id = section.getAttribute("id");

    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom && id) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        const hrefId = link.getAttribute("href").slice(1);
        if (hrefId === id) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", onScroll);

// Simple projects slider
const sliderTrack = document.querySelector(".slider__track");
const sliderImages = document.querySelectorAll(".slider__image");
const prevBtn = document.querySelector(".slider__btn--prev");
const nextBtn = document.querySelector(".slider__btn--next");

let currentSlide = 0;

function updateSlider() {
  if (!sliderTrack) return;
  const width = sliderTrack.parentElement.offsetWidth;
  sliderTrack.style.transform = `translateX(-${currentSlide * width}px)`;
}

function goToSlide(index) {
  const totalSlides = sliderImages.length;
  currentSlide = (index + totalSlides) % totalSlides;
  updateSlider();
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => goToSlide(currentSlide - 1));
  nextBtn.addEventListener("click", () => goToSlide(currentSlide + 1));

  window.addEventListener("resize", updateSlider);
  window.addEventListener("load", updateSlider);
}

// Project modal
const projectCards = document.querySelectorAll(".project-card");
const modal = document.getElementById("projectModal");
const modalTitle = modal?.querySelector(".modal__title");
const modalDescription = modal?.querySelector(".modal__description");
const modalClose = modal?.querySelector(".modal__close");
const modalOverlay = modal?.querySelector(".modal__overlay");

const projectDetails = {
  1: {
    title: "Phishing Detection with Python",
    description:
      "A comprehensive Python-based security application designed to detect and prevent phishing attacks. This project utilizes machine learning algorithms and URL analysis techniques to identify suspicious websites and protect users from potential security threats. Features include real-time URL scanning, pattern recognition, and a user-friendly interface for threat reporting.",
  },
  2: {
    title: "Figma Project UI Design",
    description:
      "A modern and intuitive user interface design project created using Figma. This design focuses on creating an exceptional user experience with attention to visual aesthetics, accessibility, and responsive layouts. The project demonstrates proficiency in design principles, color theory, typography, and interactive prototyping.",
  },
  3: {
    title: "Ultrasonic Glass For Blind",
    description:
      "An innovative assistive technology device designed to help visually impaired individuals navigate their surroundings safely. The device uses ultrasonic sensors to detect obstacles and provides audio or haptic feedback to the user. This project combines hardware engineering with software development to create a practical solution for improving mobility and independence for the visually impaired community.",
  },
};

function openModal(projectId) {
  if (!modal || !modalTitle || !modalDescription) return;
  const data = projectDetails[projectId];
  if (data) {
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
  }
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    const id = card.getAttribute("data-project");
    if (!id) return;
    openModal(id);
  });
});

modalClose?.addEventListener("click", closeModal);
modalOverlay?.addEventListener("click", closeModal);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

// Contact form validation
const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("formSuccess");

function showError(input, message) {
  const group = input.closest(".form__group");
  const errorEl = group?.querySelector(".form__error");
  input.classList.add("error");
  if (errorEl) {
    errorEl.textContent = message;
  }
}

function clearError(input) {
  const group = input.closest(".form__group");
  const errorEl = group?.querySelector(".form__error");
  input.classList.remove("error");
  if (errorEl) {
    errorEl.textContent = "";
  }
}

function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = contactForm.querySelector("#name");
    const emailInput = contactForm.querySelector("#email");
    const subjectInput = contactForm.querySelector("#subject");
    const messageInput = contactForm.querySelector("#message");

    let isValid = true;
    successMessage.textContent = "";

    // Name
    if (!nameInput.value.trim()) {
      showError(nameInput, "Please enter your name.");
      isValid = false;
    } else {
      clearError(nameInput);
    }

    // Email
    if (!emailInput.value.trim()) {
      showError(emailInput, "Please enter your email address.");
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, "Please enter a valid email address.");
      isValid = false;
    } else {
      clearError(emailInput);
    }

    // Subject
    if (!subjectInput.value.trim()) {
      showError(subjectInput, "Please enter a subject.");
      isValid = false;
    } else {
      clearError(subjectInput);
    }

    // Message
    if (!messageInput.value.trim()) {
      showError(messageInput, "Please enter a message.");
      isValid = false;
    } else if (messageInput.value.trim().length < 10) {
      showError(messageInput, "Your message should be at least 10 characters.");
      isValid = false;
    } else {
      clearError(messageInput);
    }

    if (!isValid) return;

    // At this point, in a real project we would send the data to a server.
    // For this assignment we simply show a success message and reset the form.
    contactForm.reset();
    successMessage.textContent =
      "Thank you! Your message has been validated and is ready to be sent.";
  });
}

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}



