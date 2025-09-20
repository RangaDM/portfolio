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

// testimonials and modal handling (scoped per article)
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");

function getScopedModalElements(triggerElem) {
  const article = triggerElem.closest("article");
  if (!article) return null;

  const container = article.querySelector("[data-modal-container]");
  if (!container) return null;

  return {
    article,
    container,
    overlay: container.querySelector("[data-overlay]"),
    closeBtn: container.querySelector("[data-modal-close-btn]"),
    modalImg: container.querySelector("[data-modal-img]"),
    modalTitle: container.querySelector("[data-modal-title]"),
    modalText: container.querySelector("[data-modal-text]"),
    modalDate: container.querySelector("[data-modal-date]"),
    modalDate2: container.querySelector("[data-modal-date2]")
  };
}

function toggleScopedModal(container, overlayElem) {
  container.classList.toggle("active");
  if (overlayElem) overlayElem.classList.toggle("active");
  if (window.innerWidth <= 767) {
    document.body.classList.toggle("no-scroll");
  }
}

// open modal from clicked testimonial card (in About or Portfolio)
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    const scoped = getScopedModalElements(this);
    if (!scoped) return;

    const avatar = this.querySelector("[data-testimonials-avatar]");
    const title = this.querySelector("[data-testimonials-title]");
    const text = this.querySelector("[data-testimonials-text]");
    const date = this.querySelector("[data-testimonials-date]");
    const date2 = this.querySelector("[data-testimonials-date2]");

    if (avatar && scoped.modalImg) {
      scoped.modalImg.src = avatar.src;
      scoped.modalImg.alt = avatar.alt || "";
    }
    if (title && scoped.modalTitle) {
      scoped.modalTitle.innerHTML = title.innerHTML;
    }
    if (text && scoped.modalText) {
      scoped.modalText.innerHTML = text.innerHTML;
    }
    if (date && scoped.modalDate) {
      scoped.modalDate.innerHTML = date.innerHTML;
    }
    if (date2 && scoped.modalDate2) {
      scoped.modalDate2.innerHTML = date2.innerHTML;
    }

    toggleScopedModal(scoped.container, scoped.overlay);
  });
}

// bind close and overlay clicks per modal instance
const allModalContainers = document.querySelectorAll("[data-modal-container]");
allModalContainers.forEach(container => {
  const overlayElem = container.querySelector("[data-overlay]");
  const closeBtn = container.querySelector("[data-modal-close-btn]");
  const boundToggle = () => toggleScopedModal(container, overlayElem);
  if (closeBtn) closeBtn.addEventListener("click", boundToggle);
  if (overlayElem) overlayElem.addEventListener("click", boundToggle);
});

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