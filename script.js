// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    }
  });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.querySelectorAll(".animate-on-scroll").forEach((el) => {
  observer.observe(el);
});

// Mobile menu toggle
const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
  if (navLinks.style.display === "flex") {
    navLinks.style.position = "absolute";
    navLinks.style.top = "100%";
    navLinks.style.left = "0";
    navLinks.style.right = "0";
    navLinks.style.backgroundColor = "#0D47A1";
    navLinks.style.flexDirection = "column";
    navLinks.style.padding = "1rem";
    navLinks.style.gap = "1rem";
  }
});

// Form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(this);
  const name = formData.get("name");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const service = formData.get("service");
  const message = formData.get("message");

  // Simple validation
  if (!name || !phone || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  // Here you would typically send the data to your server
  // For demonstration purposes, we'll just log it to the console
  alert("Thank you for your message! We'll get back to you within 24 hours.");

  // Reset form
  this.reset();
});

// Header background change on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(13, 71, 161, 0.98)";
  } else {
    header.style.background = "rgba(13, 71, 161, 0.95)";
  }
});

// Add click-to-call functionality
document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    // On mobile devices, this will automatically trigger the phone dialer
    console.log("Calling:", this.href);
  });
});

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease-in-out";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

// Service card hover effects
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Testimonial card animations
document.querySelectorAll(".testimonial-card").forEach((card, index) => {
  card.style.animationDelay = `${index * 0.2}s`;
});

// Add form validation styling
document.querySelectorAll("input, textarea, select").forEach((input) => {
  input.addEventListener("blur", function () {
    if (this.hasAttribute("required") && !this.value.trim()) {
      this.style.borderColor = "#FF6B35";
    } else {
      this.style.borderColor = "#2196F3";
    }
  });
});

// Lazy loading for images
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          imageObserver.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });
}
