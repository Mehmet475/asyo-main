/* ================================================================
   TATCO — Industrial Fire Safety Solutions
   Main JavaScript File
   ================================================================ */

(function () {
  'use strict';

  /* ---- 1. AOS Init ---- */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      easing: 'ease-out-quart',
      once: true,
      offset: 60,
      delay: 0,
    });
  }

  /* ---- 2. Preloader ---- */
  var preloader = document.getElementById('preloader');
  if (preloader) {
    /* Only show the preloader on the very first page load of a session.
       On subsequent page navigations the preloader is hidden instantly
       to prevent the "flash" between pages. */
    if (sessionStorage.getItem('tatco_visited')) {
      preloader.style.display = 'none';
    } else {
      sessionStorage.setItem('tatco_visited', '1');
      function hidePreloader() {
        if (preloader.classList.contains('fade-out')) return;
        preloader.classList.add('fade-out');
        setTimeout(function () { preloader.style.display = 'none'; }, 450);
      }
      window.addEventListener('load', function () { setTimeout(hidePreloader, 300); });
      setTimeout(hidePreloader, 1500);
    }
  }

  /* ---- 3. Navbar Scroll Effect ---- */
  var mainNav = document.getElementById('mainNav');
  if (mainNav) {
    window.addEventListener('scroll', function () {
      mainNav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  /* ---- 4. Back to Top ---- */
  var backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---- 5. Counter Animation ---- */
  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    if (isNaN(target)) return;
    var duration = 1800;
    var step = target / (duration / 16);
    var current = 0;
    var timer = setInterval(function () {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current) + suffix;
    }, 16);
  }

  var countersObserved = false;
  var counterEls = document.querySelectorAll('[data-count]');
  if (counterEls.length > 0 && 'IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !countersObserved) {
          counterEls.forEach(animateCounter);
          countersObserved = true;
          counterObserver.disconnect();
        }
      });
    }, { threshold: 0.3 });
    counterObserver.observe(counterEls[0]);
  }

  /* ---- 6. Product Filter (products page) ---- */
  var filterBtns = document.querySelectorAll('.filter-btn');
  if (filterBtns.length > 0) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = this.getAttribute('data-filter');
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');
        var cards = document.querySelectorAll('.product-card[data-category]');
        cards.forEach(function (card) {
          var parent = card.closest('[data-aos]') || card.parentElement;
          parent.style.display = (filter === 'all' || card.getAttribute('data-category') === filter) ? '' : 'none';
        });
        var catHeaders = document.querySelectorAll('[data-div-category]');
        catHeaders.forEach(function (h) {
          h.style.display = (filter === 'all' || h.getAttribute('data-div-category') === filter) ? '' : 'none';
        });
      });
    });
  }

  /* ---- 7. Form Validation & Submission ---- */
  var QUOTE_FORM_IDS = ['quoteForm', 'productQuoteForm'];

  var forms = document.querySelectorAll('.needs-validation');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (form.checkValidity()) {
        var formId  = form.getAttribute('id') || '';
        var isQuote = QUOTE_FORM_IDS.indexOf(formId) !== -1 ||
                      (!formId && form.querySelector('[name="Message"]') !== null);
        var btn = form.querySelector('[type="submit"]');
        var originalHTML = btn ? btn.innerHTML : '';

        if (isQuote) {
          /* Teklif formu: FormSubmit.co native POST ile gönder */
          if (btn) {
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            btn.disabled = true;
          }
          form.submit();
        } else {
          /* Diğer formlar: sadece doğrulama göster */
          if (btn) {
            btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
            btn.style.background = '#198754';
            btn.style.borderColor = '#198754';
            setTimeout(function () {
              btn.innerHTML = originalHTML;
              btn.disabled = false;
              btn.style.background = '';
              btn.style.borderColor = '';
              form.reset();
              form.classList.remove('was-validated');
            }, 3500);
          }
        }
      }

      form.classList.add('was-validated');
    });
  });

  /* ---- 8. Active Nav Link ---- */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-navbar .nav-link[data-page]').forEach(function (link) {
    if (link.getAttribute('data-page') === currentPage) link.classList.add('active');
  });

  /* ---- 9. Smooth Scroll ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* ---- 10. Spec Table Responsive ---- */
  var specTable = document.getElementById('specTable');
  if (specTable && specTable.parentElement) {
    specTable.parentElement.style.overflowX = 'auto';
  }

  /* ---- 11. Hero Slider ---- */
  var heroCarouselEl = document.getElementById('heroCarousel');
  if (heroCarouselEl && typeof bootstrap !== 'undefined') {
    var heroCarousel = new bootstrap.Carousel(heroCarouselEl, {
      interval: 5000,
      ride: true,
      wrap: true
    });
    heroCarousel.cycle();
  }

  /* ---- 12. Navbar collapse on link click (mobile) ---- */
  var navCollapse = document.getElementById('navMenu');
  if (navCollapse) {
    navCollapse.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth < 992) {
          var bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
          if (bsCollapse) bsCollapse.hide();
        }
      });
    });
  }

})();
