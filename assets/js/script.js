/* ==========================================================================
   Dumi's Kitchen — site JavaScript
   Every feature below checks the page actually has the relevant elements
   before attaching anything, so this one file can be safely linked from
   every page without throwing errors where a feature isn't used.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  renderMenuItems();       // must run before the lightbox/search features below
  initMenuLightbox();
  initMenuSearchAndFilter();
  initFaqAccordion();
  initFormValidation();
  initDynamicFooterYear();
});

/* ==========================================================================
   Dynamic content: menu items are generated from data, not hardcoded HTML
   (Part 3, "Dynamic Content" — use JavaScript to dynamically load content)
   ========================================================================== */
var menuData = {
  mains: [
    { name: "Fully Loaded Kota", price: "R70", img: "../assets/images/fully-loaded-kota.jpeg", alt: "Fully Loaded Kota" },
    { name: "Loaded Kota", price: "R50", img: "../assets/images/loade-kota.jpeg", alt: "Loaded Kota" },
    { name: "Juicy Steak Full Plate", price: "R70", img: "../assets/images/juicy-steak.jpeg", alt: "Juicy Steak Full Plate" },
    { name: "Wors, Steak and Sides Full Plate", price: "R100", img: "../assets/images/fully-loaded-platter.jpeg", alt: "Wors, Steak and Sides Full Plate" },
    { name: "Fully Loaded Platter", price: "R150", img: "../assets/images/fully-loaded-platter.jpeg", alt: "Fully Loaded Platter" }
  ],
  sides: [
    { name: "Spicy Chakalaka", price: "R15", img: "../assets/images/spicy-chakalaka.jpeg", alt: "Spicy Chakalaka" },
    { name: "Mild Chakalaka with Dumi's recipe", price: "R15", img: "../assets/images/mild-chakalaka.jpeg", alt: "Mild Chakalaka" },
    { name: "Spicy Atchar with Dumi's recipe", price: "R15", img: "../assets/images/spicy-atchar.jpeg", alt: "Spicy Atchar" },
    { name: "Coleslaw", price: "R15", img: "../assets/images/coleslaw.jpeg", alt: "Coleslaw" },
    { name: "Spicy Salsa", price: "R15", img: "../assets/images/spicy-salsa.jpeg", alt: "Spicy Salsa" }
  ],
  drinks: [
    { name: "CocaCola", price: "R18", img: "../assets/images/coca-cola.jpeg", alt: "CocaCola" },
    { name: "Oreo Milkshake", price: "R35", img: "../assets/images/oreo-milkshake.jpeg", alt: "Oreo Milkshake" },
    { name: "Mineral Water", price: "R15", img: "../assets/images/mineral-water.jpeg", alt: "Mineral Water" },
    { name: "Strawberry Milkshake", price: "R30", img: "../assets/images/strawberry-milkshake.jpeg", alt: "Strawberry Milkshake" }
  ]
};

function renderMenuItems() {
  var grids = {
    mains: document.getElementById('mains-grid'),
    sides: document.getElementById('sides-grid'),
    drinks: document.getElementById('drinks-grid')
  };
  if (!grids.mains && !grids.sides && !grids.drinks) return; // not on the menu page

  Object.keys(menuData).forEach(function (category) {
    var grid = grids[category];
    if (!grid) return;

    menuData[category].forEach(function (item) {
      var card = document.createElement('div');
      card.className = 'menu-item';
      card.setAttribute('data-category', category);
      card.innerHTML =
        '<div class="menu-item-media"><img src="' + item.img + '" alt="' + item.alt + '" loading="lazy"></div>' +
        '<div class="menu-item-body">' +
          '<p class="menu-item-name">' + item.name + '</p>' +
          '<span class="menu-item-price">' + item.price + '</span>' +
        '</div>';
      grid.appendChild(card);
    });
  });
}

/* ---- Menu image lightbox (animates via the .visible class in CSS) ---- */
function initMenuLightbox() {
  var images = document.querySelectorAll('.menu-item-media img');
  var overlay = document.getElementById('lightbox');
  if (!images.length || !overlay) return;

  var lightboxImg = document.getElementById('lightbox-img');
  var closeBtn = document.getElementById('lightbox-close');

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeLightbox() {
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
  }

  images.forEach(function (img) {
    img.addEventListener('click', function () {
      openLightbox(img.src, img.alt);
    });
  });

  closeBtn.addEventListener('click', closeLightbox);

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeLightbox();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('visible')) closeLightbox();
  });
}

/* ---- Menu search + category filter ---- */
function initMenuSearchAndFilter() {
  var searchInput = document.getElementById('menu-search');
  var filterButtons = document.querySelectorAll('.filter-btn');
  var menuItems = document.querySelectorAll('.menu-item');
  var emptyMessage = document.getElementById('menu-empty-message');
  if (!searchInput || !menuItems.length) return;

  var currentFilter = 'all';

  function applyFilters() {
    var query = searchInput.value.trim().toLowerCase();
    var visibleCount = 0;

    menuItems.forEach(function (item) {
      var nameEl = item.querySelector('.menu-item-name');
      var name = nameEl ? nameEl.textContent.toLowerCase() : '';
      var category = item.getAttribute('data-category');
      var matchesFilter = currentFilter === 'all' || category === currentFilter;
      var matchesSearch = name.indexOf(query) !== -1;
      var show = matchesFilter && matchesSearch;

      item.style.display = show ? '' : 'none';
      if (show) visibleCount++;
    });

    if (emptyMessage) {
      emptyMessage.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  searchInput.addEventListener('input', applyFilters);

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterButtons.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      currentFilter = btn.getAttribute('data-filter');
      applyFilters();
    });
  });
}

/* ---- FAQ accordion (animates open/closed via the .open class in CSS) ---- */
function initFaqAccordion() {
  var questions = document.querySelectorAll('.accordion-question');
  if (!questions.length) return;

  questions.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var answer = btn.nextElementSibling;
      var icon = btn.querySelector('.accordion-icon');
      var isOpen = answer.classList.contains('open');

      if (isOpen) {
        answer.style.maxHeight = null;
        answer.classList.remove('open');
      } else {
        answer.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }

      btn.setAttribute('aria-expanded', String(!isOpen));
      if (icon) icon.textContent = isOpen ? '+' : '\u2212';
    });
  });
}

/* ---- Form validation (Part 3: Form Functionality and Validation) ---- */
function initFormValidation() {
  initEnquiryForm();
  initContactForm();

  document.querySelectorAll('form input, form select, form textarea').forEach(function (field) {
    field.addEventListener('input', function () {
      if (field.classList.contains('invalid') && field.value.trim() !== '') {
        clearFieldError(field);
      }
    });
  });
}

function showFieldError(input, message) {
  input.classList.add('invalid');
  input.setAttribute('aria-invalid', 'true');
  var errorEl = document.getElementById(input.id + '-error');
  if (errorEl) errorEl.textContent = message;
}

function clearFieldError(input) {
  input.classList.remove('invalid');
  input.setAttribute('aria-invalid', 'false');
  var errorEl = document.getElementById(input.id + '-error');
  if (errorEl) errorEl.textContent = '';
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value) {
  var digits = value.replace(/\D/g, '');
  return digits.length >= 9 && digits.length <= 12;
}

function validateField(input, rule, message) {
  if (!rule(input.value.trim())) {
    showFieldError(input, message);
    return false;
  }
  clearFieldError(input);
  return true;
}

function initContactForm() 
{
  var form = document.getElementById('contact-form'); // match your form's id
  if (!form) return;

  var name = document.getElementById('contact-name');
  var email = document.getElementById('contact-email');
  var phone = document.getElementById('contact-phone');

  form.addEventListener('submit', function (e) {
    var ok = true;
    ok = validateField(name, function (v) { return v.length >= 2; }, 'Please enter your name.') && ok;
    ok = validateField(email, isValidEmail, 'Enter a valid email address.') && ok;
    ok = validateField(phone, isValidPhone, 'Enter a valid phone number.') && ok;
    if (!ok) e.preventDefault();
    var oldMsg = form.querySelector('.form-success');
    if (oldMsg) oldMsg.remove();
  });
}

function showFormSuccess(form, message) {
  var existing = form.querySelector('.form-success');
  if (existing) existing.remove();
  var success = document.createElement('p');
  success.className = 'form-success';
  success.setAttribute('role', 'status');
  success.textContent = message;
  form.appendChild(success);
}

/* ---- Enquiry form (enquiry.html) ---- */
function initEnquiryForm() {
  var form = document.getElementById('enquiry-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var cellphone = document.getElementById('cellphone');
    var enquiryType = document.getElementById('Enquiry_type');
    var message = document.getElementById('contact-message');

    var valid = true;

    if (name.value.trim().length < 2) {
      showFieldError(name, 'Please enter your name (at least 2 characters).');
      valid = false;
    } else {
      clearFieldError(name);
    }

    if (!isValidEmail(email.value.trim())) {
      showFieldError(email, 'Please enter a valid email address.');
      valid = false;
    } else {
      clearFieldError(email);
    }

    if (!isValidPhone(cellphone.value.trim())) {
      showFieldError(cellphone, 'Please enter a valid phone number (9-12 digits).');
      valid = false;
    } else {
      clearFieldError(cellphone);
    }

    if (!enquiryType.value) {
      showFieldError(enquiryType, 'Please select an enquiry type.');
      valid = false;
    } else {
      clearFieldError(enquiryType);
    }

    if (message.value.trim().length < 10) {
      showFieldError(message, 'Please provide a bit more detail (at least 10 characters).');
      valid = false;
    } else {
      clearFieldError(message);
    }

    if (!valid) {
      form.querySelector('.invalid').focus();
      return;
    }

    // No backend exists for this static site, so submission is simulated:
    // the delay mimics an async request, and a success message confirms
    // it without a full page reload.
    var submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    setTimeout(function () {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit';
      form.reset();
      showFormSuccess(form, 'Thank you! Your enquiry has been received - we\'ll be in touch within 24 hours.');
    }, 700);
  });
}

/* ---- Contact form (contact-us.html) ---- */
function initContactForm() {
  var form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = document.getElementById('contact-name');
    var email = document.getElementById('contact-email');
    var phone = document.getElementById('contact-phone');
    var preferred = document.getElementById('preferred-contact');
    var msgType = document.getElementById('message-type');
    var message = document.getElementById('contact-message');

    var valid = true;

    if (name.value.trim().length < 2) {
      showFieldError(name, 'Please enter your name (at least 2 characters).');
      valid = false;
    } else {
      clearFieldError(name);
    }

    if (!isValidEmail(email.value.trim())) {
      showFieldError(email, 'Please enter a valid email address.');
      valid = false;
    } else {
      clearFieldError(email);
    }

    if (!isValidPhone(phone.value.trim())) {
      showFieldError(phone, 'Please enter a valid phone number (9-12 digits).');
      valid = false;
    } else {
      clearFieldError(phone);
    }

    if (!preferred.value) {
      showFieldError(preferred, 'Please choose a preferred contact method.');
      valid = false;
    } else {
      clearFieldError(preferred);
    }

    if (!msgType.value) {
      showFieldError(msgType, 'Please choose a message type.');
      valid = false;
    } else {
      clearFieldError(msgType);
    }

    if (message.value.trim().length < 10) {
      showFieldError(message, 'Please provide a bit more detail (at least 10 characters).');
      valid = false;
    } else {
      clearFieldError(message);
    }

    if (!valid) {
      form.querySelector('.invalid').focus();
      return;
    }

    // This site has no backend, so a true AJAX POST isn't possible.
    // Once validated, the message is handed to the visitor's own email
    // client via mailto - the realistic equivalent for a static site.
    var body = encodeURIComponent(
      'Name: ' + name.value.trim() +
      '\nEmail: ' + email.value.trim() +
      '\nPhone: ' + phone.value.trim() +
      '\nPreferred contact: ' + preferred.value +
      '\nMessage type: ' + msgType.value +
      '\n\n' + message.value.trim()
    );
    var mailtoUrl = 'mailto:info@dumiskitchen.co.za?subject=Website%20Contact%20Message&body=' + body;

    showFormSuccess(form, 'Thanks! Opening your email app to send your message...');
    setTimeout(function () {
      window.location.href = mailtoUrl;
    }, 600);
  });
}

/* ==========================================================================
   DOM manipulation example: footer copyright year updates itself every
   year automatically, on every page, instead of being hardcoded.
   ========================================================================== */
function initDynamicFooterYear() {
  var yearEls = document.querySelectorAll('.footer-copyright');
  if (!yearEls.length) return;
  var year = new Date().getFullYear();
  yearEls.forEach(function (el) {
    el.textContent = '\u00A9 ' + year + ' Dumi\'s Kitchen. All rights reserved.';
  });
}
                        