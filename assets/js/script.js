/*Dumi's kitchen - Site JavaScript */

document.addEventListener('DOMContentLoaded', 
    function() {
        initMenuLightbox();
        initMenuSearchAndFilter();
        initFaqAccordion();
    });

    /* --- Menu image lightbox --- */
    function initMenuLightbox() {
        var images = document.querySelectorAll('.menu-item img');
        var overlay = document.getElementById('lightbox');
        if (!images.length || !overlay) return;

        var lightboxImg = document.getElementById('lightbox-img');
        var closeBtn = document.getElementById('lightbox-close');

        function openLightbox(src, alt) {
            lightboxImg.src = src;
            lightboxImg.alt = alt;
            overlay.hidden = false;
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
            closeBtn.focus(); // Set focus to close button for accessibility    
        }

        function closeLightbox() {
            overlay.hidden = true;
            lightboxImg.src = '';
            document.body.style.overflow = ''; // Restore background scrolling
        }

        images.forEach(function(img) {
            img.addEventListener('click', function() {
                openLightbox(img.src, img.alt);
            });
        });

        closeBtn.addEventListener('click', closeLightbox);
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) closeLightbox();
            });

            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && !overlay.hidden) {
                    closeLightbox();
                });
            }

            /* --- Menu search and category filter --- */
            function initMenuSearchAndFilter() {
                var searchInput = document.getElementById('menu-search');
                var filterButtons = document.querySelectorAll('.filter-btn');
                var menuItems = document.querySelectorAll('.menu-item');
                var emptyMessage = document.getElementById('menu-empty-message');
                if (!searchInput || !filterButtons.length || !menuItems.length) return;

                var currentFilter = 'all';

                function applyFilters() {
                    var query = searchInput.value.toLowerCase();
                    var visibleCount = 0;

                    menuItems.forEach(function(item) {
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

                filterButtons.forEach(function(btn) {
                    btn.addEventListener('click', function() {
                        filterButtons.forEach(function(b) { b.classList.remove('active'); 
                            b.setAttribute('aria-pressed', 'false');
                        });
                        btn.classList.add('active');
                        btn.setAttribute('aria-pressed', 'true');
                        currentFilter = btn.getAttribute('data-filter');
                        applyFilters();
                    });
                });
            }

            /* --- FAQ accordion --- */
            function initFaqAccordion() {
                var questions = document.querySelectorAll('.faq-question');
                if (!questions.length) return;

                questions.forEach(function (btn) {
                    btn.addEventListener('click', function () {
                        var expanded = btn.getAttribute('aria-expanded') === 'true';
                        var answer = btn.nextElementSibling;
                        var icon = btn.querySelector('.accordion-icon');

                        btn.setAttribute('aria-expanded', String(!expanded));
                        answer.hidden = expanded;
                        if (icon) {
                            icon.textContent = expanded ? '+' : '\u2212'; // Unicode minus sign 
                        });
                    });
                }
                        