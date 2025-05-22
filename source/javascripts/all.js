// Complete all.js - includes all functionality inline
// Replace your entire all.js file with this content

console.log('Loading complete JavaScript bundle...');

// ===========================================
// ENERGIZE (Touch/Click handling)
// ===========================================
(function() {
    'use strict';
    var energize = function(elem, func, options) {
        options = options || {};
        var startTime = 0;
        var endTime = 0;

        function handleStart() { startTime = Date.now(); }
        function handleEnd(e) {
            endTime = Date.now();
            if (endTime - startTime < 500) {
                e.preventDefault();
                func.call(elem, e);
            }
        }
        function handleClick(e) {
            if (!startTime || Date.now() - endTime > 300) {
                func.call(elem, e);
            }
        }

        elem.addEventListener('touchstart', handleStart);
        elem.addEventListener('touchend', handleEnd);
        elem.addEventListener('click', handleClick);
    };

    window.energize = energize;
    console.log('✓ Energize loaded');
})();

// ===========================================
// LANGUAGE SWITCHING
// ===========================================
(function (global) {
    'use strict';

    var languages = [];

    function activateLanguage(language) {
        if (!language || language === "") return;

        // Update language selector active states
        var selectors = document.querySelectorAll(".lang-selector a");
        for (var i = 0; i < selectors.length; i++) {
            selectors[i].classList.remove('active');
        }
        var activeSelector = document.querySelector(".lang-selector a[data-language-name='" + language + "']");
        if (activeSelector) activeSelector.classList.add('active');

        // Hide all language-specific content
        for (var i = 0; i < languages.length; i++) {
            var highlights = document.querySelectorAll(".highlight." + languages[i]);
            var langSpecific = document.querySelectorAll(".lang-specific." + languages[i]);

            for (var j = 0; j < highlights.length; j++) highlights[j].style.display = 'none';
            for (var j = 0; j < langSpecific.length; j++) langSpecific[j].style.display = 'none';
        }

        // Show current language content
        var currentHighlights = document.querySelectorAll(".highlight." + language);
        var currentLangSpecific = document.querySelectorAll(".lang-specific." + language);

        for (var i = 0; i < currentHighlights.length; i++) currentHighlights[i].style.display = 'block';
        for (var i = 0; i < currentLangSpecific.length; i++) currentLangSpecific[i].style.display = 'block';

        // Recalculate TOC if available
        if (global.toc && global.toc.calculateHeights) {
            global.toc.calculateHeights();
        }

        // Scroll to hash if present
        if (window.location.hash) {
            setTimeout(function() {
                var target = document.querySelector(window.location.hash);
                if (target) target.scrollIntoView(true);
            }, 100);
        }
    }

    function setupLanguages(l) {
        languages = l || [];
        var defaultLanguage = localStorage.getItem("language");

        // Get language from URL
        var urlParams = new URLSearchParams(window.location.search);
        var presetLanguage = urlParams.get('language');

        if (presetLanguage && languages.indexOf(presetLanguage) !== -1) {
            activateLanguage(presetLanguage);
            localStorage.setItem("language", presetLanguage);
        } else if (defaultLanguage && languages.indexOf(defaultLanguage) !== -1) {
            activateLanguage(defaultLanguage);
        } else if (languages.length > 0) {
            activateLanguage(languages[0]);
        }
    }

    // Language click handlers
    function initLanguageHandlers() {
        var langLinks = document.querySelectorAll(".lang-selector a");
        for (var i = 0; i < langLinks.length; i++) {
            langLinks[i].addEventListener("click", function(e) {
                e.preventDefault();
                var language = this.getAttribute("data-language-name");

                // Update URL
                var newUrl = new URL(window.location);
                newUrl.searchParams.set('language', language);
                if (window.history && window.history.pushState) {
                    window.history.pushState({}, '', newUrl);
                }

                localStorage.setItem("language", language);
                activateLanguage(language);
                return false;
            });
        }
    }

    // Expose functions globally
    global.setupLanguages = setupLanguages;
    global.activateLanguage = activateLanguage;

    // Initialize when ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLanguageHandlers);
    } else {
        initLanguageHandlers();
    }

    // Handle browser back/forward
    window.addEventListener('popstate', function() {
        var urlParams = new URLSearchParams(window.location.search);
        var language = urlParams.get('language');
        if (language) activateLanguage(language);
    });

    console.log('✓ Language switching loaded');
})(window);

// ===========================================
// SEARCH FUNCTIONALITY
// ===========================================
(function () {
    'use strict';

    function initSearch() {
        var searchInput = document.getElementById('input-search');
        var searchResults = document.querySelector('.search-results');

        if (!searchInput || !searchResults) {
            console.log('Search elements not found, skipping search init');
            return;
        }

        // Build search index from headers and content
        var searchIndex = [];
        var headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

        for (var i = 0; i < headers.length; i++) {
            var header = headers[i];
            var id = header.id || 'header-' + i;
            var title = header.textContent.trim();
            var content = '';

            // Collect content after this header until next header
            var nextEl = header.nextElementSibling;
            while (nextEl && !nextEl.tagName.match(/^H[1-6]$/)) {
                if (nextEl.textContent) content += nextEl.textContent + ' ';
                nextEl = nextEl.nextElementSibling;
            }

            searchIndex.push({
                id: id,
                title: title,
                content: content.substring(0, 200), // Limit content length
                element: header
            });
        }

        function performSearch(query) {
            query = query.toLowerCase().trim();
            if (!query) return [];

            return searchIndex.filter(function(item) {
                return item.title.toLowerCase().indexOf(query) !== -1 ||
                    item.content.toLowerCase().indexOf(query) !== -1;
            }).slice(0, 8); // Limit results
        }

        function displayResults(results, query) {
            if (results.length === 0) {
                searchResults.innerHTML = '<li class="no-results">No results found for "' + query + '"</li>';
                return;
            }

            var html = '';
            for (var i = 0; i < results.length; i++) {
                var result = results[i];
                html += '<li><a href="#' + result.id + '">' + result.title + '</a></li>';
            }
            searchResults.innerHTML = html;

            // Add click handlers to results
            var resultLinks = searchResults.querySelectorAll('a');
            for (var i = 0; i < resultLinks.length; i++) {
                resultLinks[i].addEventListener('click', function(e) {
                    e.preventDefault();
                    var target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                    searchResults.classList.remove('visible');
                    searchInput.blur();
                });
            }
        }

        // Search input handler
        searchInput.addEventListener('keyup', function(e) {
            var query = this.value;

            // Clear on ESC
            if (e.keyCode === 27) {
                this.value = '';
                query = '';
            }

            if (query.trim()) {
                searchResults.classList.add('visible');
                var results = performSearch(query);
                displayResults(results, query);
            } else {
                searchResults.classList.remove('visible');
            }
        });

        // Hide results when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.classList.remove('visible');
            }
        });

        console.log('✓ Search loaded with', searchIndex.length, 'indexed items');
    }

    // Initialize when ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSearch);
    } else {
        initSearch();
    }
})();

// ===========================================
// TABLE OF CONTENTS
// ===========================================
(function (global) {
    'use strict';

    function createTOC() {
        console.log('Creating TOC...');

        // Find TOC container - try multiple selectors
        var tocContainer = document.getElementById('toc') ||
            document.querySelector('.tocify') ||
            document.querySelector('.tocify-wrapper .toc') ||
            document.querySelector('.tocify-wrapper');

        // If tocify-wrapper exists but no toc inside, create one
        if (!tocContainer) {
            var tocWrapper = document.querySelector('.tocify-wrapper');
            if (tocWrapper) {
                // Look for existing content to preserve
                var existingContent = tocWrapper.innerHTML;
                tocContainer = document.createElement('div');
                tocContainer.id = 'toc';

                // If there's existing content, append TOC after it
                if (existingContent.trim()) {
                    tocWrapper.appendChild(tocContainer);
                } else {
                    tocWrapper.innerHTML = '';
                    tocWrapper.appendChild(tocContainer);
                }
                console.log('Created TOC container in tocify-wrapper');
            } else {
                console.log('No TOC container found, cannot create TOC');
                return { calculateHeights: function() {}, setOption: function() {} };
            }
        }

        // If tocContainer is the wrapper itself, create a child div
        if (tocContainer.classList.contains('tocify-wrapper')) {
            var existingToc = tocContainer.querySelector('#toc');
            if (!existingToc) {
                var newToc = document.createElement('div');
                newToc.id = 'toc';
                tocContainer.appendChild(newToc);
                tocContainer = newToc;
            } else {
                tocContainer = existingToc;
            }
        }

        var headers = document.querySelectorAll('h1, h2, h3');
        console.log('Found', headers.length, 'headers for TOC');

        if (headers.length === 0) {
            tocContainer.innerHTML = '<div class="no-headers">No headings found</div>';
            return { calculateHeights: function() {}, setOption: function() {} };
        }

        // Build TOC HTML
        var tocHTML = '';
        for (var i = 0; i < headers.length; i++) {
            var header = headers[i];
            var id = header.id || 'toc-header-' + i;
            var text = header.textContent.trim();
            var level = parseInt(header.tagName.charAt(1));

            // Ensure header has ID
            if (!header.id) header.id = id;

            var indent = Math.max(0, (level - 1) * 15);
            var levelClass = 'toc-level-' + level;

            tocHTML += '<div class="tocify-item ' + levelClass + '" data-unique="' + id + '" style="margin-left: ' + indent + 'px;">';
            tocHTML += '<a href="#' + id + '" class="tocify-link">' + text + '</a>';
            tocHTML += '</div>';
        }

        tocContainer.innerHTML = tocHTML;
        console.log('✓ TOC HTML created');

        // Add styling if not present
        if (!document.getElementById('toc-inline-styles')) {
            var styles = document.createElement('style');
            styles.id = 'toc-inline-styles';
            styles.textContent = `
        .tocify-item { padding: 2px 0; line-height: 1.4; }
        .tocify-link { 
          display: block !important; 
          padding: 4px 8px !important; 
          text-decoration: none !important; 
          color: #333 !important;
          border-left: 3px solid transparent !important;
          transition: all 0.2s !important;
          font-size: 13px !important;
        }
        .tocify-link:hover { 
          background-color: #f0f0f0 !important; 
          border-left-color: #007acc !important;
          color: #007acc !important;
        }
        .toc-level-1 .tocify-link { font-weight: bold !important; font-size: 14px !important; }
        .toc-level-2 .tocify-link { color: #666 !important; }
        .toc-level-3 .tocify-link { color: #888 !important; font-size: 12px !important; }
        .tocify-focus .tocify-link { 
          background-color: #e6f3ff !important; 
          border-left-color: #007acc !important; 
          color: #007acc !important; 
          font-weight: bold !important; 
        }
      `;
            document.head.appendChild(styles);
        }

        // Add click handlers
        var tocLinks = tocContainer.querySelectorAll('.tocify-link');
        for (var i = 0; i < tocLinks.length; i++) {
            tocLinks[i].addEventListener('click', function(e) {
                e.preventDefault();
                var href = this.getAttribute('href');
                var target = document.querySelector(href);

                if (target) {
                    // Smooth scroll
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

                    // Update URL
                    if (window.history && window.history.pushState) {
                        window.history.pushState(null, null, href);
                    }

                    // Close mobile menu
                    closeToc();
                }
            });
        }

        // Highlight current section on scroll
        var isScrolling = false;
        function highlightCurrentSection() {
            if (isScrolling) return;

            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            var currentSection = null;

            for (var i = 0; i < headers.length; i++) {
                var header = headers[i];
                var rect = header.getBoundingClientRect();
                var elementTop = rect.top + scrollTop;

                if (elementTop - 60 <= scrollTop) {
                    currentSection = header;
                }
            }

            // Update highlighting
            var focusedItems = tocContainer.querySelectorAll('.tocify-focus');
            for (var i = 0; i < focusedItems.length; i++) {
                focusedItems[i].classList.remove('tocify-focus');
            }

            if (currentSection) {
                var currentItem = tocContainer.querySelector('[data-unique="' + currentSection.id + '"]');
                if (currentItem) {
                    currentItem.classList.add('tocify-focus');
                }
            }
        }

        // Throttled scroll handler
        var scrollTimeout;
        window.addEventListener('scroll', function() {
            if (scrollTimeout) clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(highlightCurrentSection, 100);
        });

        // Initial highlight
        setTimeout(highlightCurrentSection, 200);

        console.log('✓ TOC created successfully with', headers.length, 'items');

        return {
            calculateHeights: function() {
                highlightCurrentSection();
            },
            setOption: function(option, value) {
                // Compatibility function
            }
        };
    }

    function closeToc() {
        var tocWrapper = document.querySelector('.tocify-wrapper');
        var navButton = document.querySelector('#nav-button');

        if (tocWrapper) tocWrapper.classList.remove('open');
        if (navButton) navButton.classList.remove('open');
    }

    function initTOC() {
        console.log('Initializing TOC system...');

        // Create TOC
        global.toc = createTOC();

        // Setup mobile navigation
        var navButton = document.getElementById('nav-button');
        if (navButton) {
            navButton.addEventListener('click', function(e) {
                e.preventDefault();
                var tocWrapper = document.querySelector('.tocify-wrapper');
                if (tocWrapper) {
                    tocWrapper.classList.toggle('open');
                    navButton.classList.toggle('open');
                }
                return false;
            });
        }

        // Close TOC when clicking outside
        var pageWrapper = document.querySelector('.page-wrapper');
        if (pageWrapper) {
            pageWrapper.addEventListener('click', closeToc);
        }

        // Setup languages
        var languagesData = [];
        if (document.body && document.body.dataset && document.body.dataset.languages) {
            try {
                languagesData = JSON.parse(document.body.dataset.languages);
            } catch (e) {
                console.log('Could not parse languages data');
            }
        }

        if (typeof setupLanguages === 'function') {
            setupLanguages(languagesData);
        }

        console.log('✓ TOC system initialized');
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTOC);
    } else {
        setTimeout(initTOC, 100); // Small delay to ensure everything is ready
    }

})(window);

console.log('✓ Complete JavaScript bundle loaded successfully!');
