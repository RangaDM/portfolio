'use strict';

// element toggle function
const elementToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
}

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Enhanced sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { 
  elementToggleFunc(sidebar);
  
  // Add animation class for mobile
  if (window.innerWidth <= 767) {
    sidebar.classList.toggle("mobile-active");
  }
});

// Close sidebar when clicking on a nav link (mobile only)
const navigationLinks = document.querySelectorAll("[data-nav-link]");
navigationLinks.forEach(link => {
  link.addEventListener("click", function() {
    if (window.innerWidth <= 767) {
      sidebar.classList.remove("active", "mobile-active");
    }
  });
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Enhanced modal toggle function with mobile detection
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
  
  // Prevent body scrolling when modal is open on mobile
  if (window.innerWidth <= 767) {
    document.body.classList.toggle("no-scroll");
  }
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button and overlay
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { 
  elementToggleFunc(this); 
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
  
  // Scroll to top after filtering on mobile
  if (window.innerWidth <= 767) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
  
  // Better mobile form experience
  if (window.innerWidth <= 767) {
    formInputs[i].addEventListener('focus', function() {
      window.scrollTo({
        top: this.offsetTop - 100,
        behavior: 'smooth'
      });
    });
  }
}

// page navigation variables
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        
        // Smooth scroll to top on mobile
        if (window.innerWidth <= 767) {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        } else {
          window.scrollTo(0, 0);
        }
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// Handle window resize for mobile detection
window.addEventListener('resize', function() {
  // Close sidebar when switching from mobile to desktop
  if (window.innerWidth > 767 && sidebar.classList.contains('mobile-active')) {
    sidebar.classList.remove('mobile-active');
  }
});

// Initialize mobile-specific behaviors
function initMobileBehaviors() {
  if (window.innerWidth <= 767) {
    // Add any mobile-specific initialization here
  }
}

// Run initialization
document.addEventListener('DOMContentLoaded', initMobileBehaviors);