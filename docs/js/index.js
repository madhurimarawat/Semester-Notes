/*
*********************************************************************************************
* File: index.js
* Author: Madhurima Rawat
* Date: November 24, 2026
* Description: JavaScript file for study materials website, providing
*              functionality to dynamically change color schemes based on user-selected seasons.
* Version: 1.0
* GitHub Repository: https://github.com/madhurimarawat/Semester-Notes
* Issues/Bugs: For any issues or bugs, please visit the GitHub repository issues section.
* Comments: This JS file defines functions to update the primary color variable of the root
*           element based on the provided season. It enhances user experience by allowing
*           dynamic customization of the color scheme. It also handles mouse navigation 
*           for suggestions dropdowns.
* Dependencies: None
*********************************************************************************************
*/

/**
 * The JavaScript code includes functions to center align content using Flexbox, change colors based on
 * a parameter, and handle smooth scrolling for dropdown items using jQuery.
 * @param Color - The `Color` parameter in the `changeColor` function is used to determine the color
 * scheme for the page based on different seasons. The function sets the primary color and button color
 * variables in the CSS root element based on the provided color parameter.
 */

// Run when DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Array of contentRow IDs to center align
  var rowIds = ["centerRow_1", "centerRow_2"];

  // Loop through each ID and add the Flexbox classes if the element exists
  for (var i = 0; i < rowIds.length; i++) {
    var contentRow = document.getElementById(rowIds[i]);
    if (contentRow) {
      // Add Flexbox classes to center align the content
      contentRow.classList.add("d-flex", "justify-content-center");
    }
  }
});


// Function to change colors based on the Color parameter and store in localStorage
function changeColor(Color) {
  let color;
  let button;

  // Determine the color values based on the theme
  switch (Color) {
    case 'autumn':
      color = 'coral';             // Autumn: Coral
      button = '#BA68C8';          // Purple
      break;
    case 'summer':
      color = '#ffc107';           // Summer: Gold
      button = '#4D94FF';          // Blue
      break;
    case 'rainy':
      color = '#00CED1';           // Rainy: Dark Turquoise
      button = '#c65b5b';          // Red
      break;
    case 'winter':
      color = 'rgb(242, 82, 175)'; // Winter: Deep Pink
      button = '#4CAF50';          // Green
      break;
    default:
      color = '#28a745';           // Default: Green
      button = '#ffc107';          // Gold
  }

  // Apply the CSS variables to the document root
  document.documentElement.style.setProperty('--primary-color', color);
  document.documentElement.style.setProperty('--button-color', button);

  // Save the selected theme to localStorage
  localStorage.setItem('semester-notes-website-theme', Color);
}

// On page load, restore theme from localStorage if present
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('semester-notes-website-theme');
  if (savedTheme) {
    changeColor(savedTheme); // Apply the saved theme
  }
});


// jQuery function to handle smooth scrolling for dropdown items within the element with ID 'sem'
$(document).ready(function () {
  // Select only the dropdown items within the "Semester" section
  $("#navbarDropdownSemester + .dropdown-menu a.dropdown-item").on('click', function (event) {
    event.preventDefault();

    var target = $(this).attr("href");
    var offset;

    // Check if it's a mobile device
    if ($(window).width() < 992) {
      offset = $(target).offset().top - 75; // Manually adjust for mobile, excluding navbar height
    } else {
      offset = $(target).offset().top - $(".navbar").outerHeight() - 20; // Default offset for larger screens
    }

    // Smooth scroll to the target section
    $('html, body').animate({
      scrollTop: offset
    }, 800);

    // Collapse the navbar menu after clicking a dropdown item
    $(".navbar-collapse").collapse('hide');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Toggle visibility of the search bar
  document.getElementById("searchButton").addEventListener("click", function () {
    const searchBar = document.getElementById("search-bar");
    searchBar.classList.toggle("hidden");
  });

  const searchInput = document.getElementById('searchInput');
  const suggestions = document.getElementById('suggestions');
  const cards = {

    // 1 Semester Subjects
    'em-1-card': 'Engineering Mathematics I',
    'es-card': 'Environmental Science',
    'fee-card': 'Foundations of Electronics Engineering',
    'fcb-card': 'Fundamentals of Computational Biology',
    'lws-card': 'Language and Writing Skills',
    'lpcc-card': 'Learning Programming Concepts With C',
    'pels-card': 'Professional Ethics and Life Skills',

    // 2 Semester Subjects
    'dsa-card': 'Data Structure Using C',
    'dld-card': 'Digital Logic and Design',
    'em-2-card': 'Engineering Mathematics II',
    'entrepreneur-card': 'Entrepreneurship',
    'oop-card': 'Object-Oriented Programming',
    'pds-card': 'Python For Data Science',

    // 3 Semester Subjects
    'ada-card': 'Analysis and Design of Algorithm',
    'coa-card': 'Computer Organization and Architecture',
    'dbms-card': 'Database Management System',
    'ds-card': 'Discrete Structure',
    'ps-card': 'Probability and Statistics',
    'ipr-card': 'Independent Project',

    // 4 Semester Subjects
    'ai-card': 'Artificial Intelligence Principles and Applications',
    'cn-card': 'Computer Network',
    'dv-card': 'Data Visualization',
    'os-card': 'Operating System',
    'rds-card': 'R for Data Science',
    'toc-card': 'Theory of Computation',

    // 5 Semester Subjects
    'cc-card': 'Computational Complexity',
    'cns-card': 'Cryptography and Network Security',
    'ida-card': 'Intelligent Data Analysis',
    'nlp-card': 'Natural Language Processing',
    'prml-card': 'Pattern Recognition and Machine Learning',
    'vt-card': 'Vocational Training',
    'ann-card': 'Artificial Neural Networks',
    'pma-card': 'Predictive Modelling and Analytics',
    'mp5-card': 'Minor Project 5 Sem',

    // 6 Semester Subjects
    'intern-card': 'Internship',

    // 7 Semester Subjects
    'agt-card': 'Algorithmic Gaming Theory',
    'bda-card': 'Big Data Analytics',
    'dw-card': 'Data Wrangling',
    'ip-card': 'Image Processing',
    'mis-card': 'Management Information System',
    'se-card': 'Software Engineering',
    'bia-card': 'Business Intelligence and Analytics',
    'isr-card': 'Intelligent System and Robotics',
    'mp7-card': 'Minor Project 7 Sem',

    // 8 Semester Subjects
    'ccmp-card': 'Cloud Computing',
    'dwr-card': 'Data Warehousing',
    'aii-card': 'Artificial Intelligence for Investments',
    'hpsc-card': 'High-Performance Scientific Computing',
    'dl-card': 'Deep Learning',
    'mp8-card': 'Major Project 8 Sem'

  };

  let currentFocus = -1;

  searchButton.addEventListener("click", function () {
    searchBar.classList.toggle("hidden");
  });

  searchInput.addEventListener('input', function () {
    const filter = searchInput.value.toLowerCase();
    suggestions.innerHTML = '';

    if (filter) {
      Object.keys(cards).forEach(id => {
        const text = cards[id].toLowerCase();
        if (text.includes(filter)) {
          const listItem = document.createElement('li');
          listItem.classList.add('list-group-item');
          listItem.textContent = cards[id];
          listItem.setAttribute('data-id', id);
          suggestions.appendChild(listItem);
        }
      });
    }
  });

  searchInput.addEventListener('keydown', function (e) {
    let items = suggestions.getElementsByTagName('li');
    if (e.keyCode === 40) {
      // Arrow Down
      currentFocus++;
      addActive(items);
    } else if (e.keyCode === 38) {
      // Arrow Up
      currentFocus--;
      addActive(items);
    } else if (e.keyCode === 13) {
      // Enter
      e.preventDefault();
      if (currentFocus > -1) {
        if (items) items[currentFocus].click();
      }
    }
  });

  function addActive(items) {
    if (!items) return false;
    removeActive(items);
    if (currentFocus >= items.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = items.length - 1;
    items[currentFocus].classList.add('active');
  }

  function removeActive(items) {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('active');
    }
  }

  suggestions.addEventListener('click', function (e) {
    if (e.target && e.target.matches('li.list-group-item')) {
      const id = e.target.getAttribute('data-id');
      const element = document.getElementById(id);
      if (element) {
        let navbarHeight = document.querySelector('.navbar').offsetHeight;

        // Adjust the navbar height based on device width
        if (window.matchMedia("(max-width: 767.98px)").matches) {
          // Mobile devices
          navbarHeight += 25; // Adjust for mobile
        } else if (window.matchMedia("(min-width: 768px) and (max-width: 1199.98px)").matches) {
          // Tablets and small laptops
          navbarHeight += 30; // Adjust for tablets and small laptops
        } else if (window.matchMedia("(min-width: 1200px)").matches) {
          // Large laptops and desktops
          navbarHeight += 30; // Adjust for large laptops and desktops
        }

        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;

        // Scroll to the adjusted position
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        suggestions.innerHTML = '';
        searchInput.value = '';
      }
    }
  });
});

/**
 * Toggles between dark and light mode.
 * Applies a dark CSS file dynamically and updates the icon/text/button color.
 * Saves the user's preference in localStorage.
 * Uses system's prefers-color-scheme as a fallback on first load.
 */
function toggleDarkMode() {
  const darkModeId = 'dark-mode-stylesheet'; // ID for the dark mode stylesheet

  // Identify both toggle elements: navbar link and main button toggle
  const navToggle = document.getElementById('dark-mode-toggle'); // Navbar toggle (link)
  const btnToggle = document.getElementById('dark-mode-button'); // Main button toggle

  // Detect if dark mode is already active by checking for the dark stylesheet
  const isDarkModeActive = document.getElementById(darkModeId);

  /**
   * Helper function to update any toggle element's icon, text, and button color.
   * @param {HTMLElement} element - Button or link element
   * @param {string} mode - "dark" or "light"
   */
  function updateUI(element, mode) {
    if (!element) return; // Check if the element exists

    const icon = element.querySelector('i'); // Select the icon inside the element
    const text = element; // For the button, the text is directly inside the button

    // Swap icon and label
    if (mode === 'dark') {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
      text.innerHTML = '<i class="fas fa-sun"></i> Light Mode'; // Change text to "Light Mode" when dark mode is active
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
      text.innerHTML = '<i class="fas fa-moon"></i> Dark Mode'; // Change text to "Dark Mode" when light mode is active
    }
  }

  if (!isDarkModeActive) {
    // Dark mode not active → enable it by injecting <link> for dark mode styles
    const darkModeLink = document.createElement('link');
    darkModeLink.rel = 'stylesheet';
    darkModeLink.href = 'css/index-dark.css'; // Path to your dark mode stylesheet
    darkModeLink.id = darkModeId;
    document.head.appendChild(darkModeLink); // Add the stylesheet to the head of the document

    // Update both toggle buttons for dark mode
    updateUI(navToggle, 'dark');
    updateUI(btnToggle, 'dark');

    // Save user preference in localStorage for persistence
    localStorage.setItem('semester-notes-website-colorMode', 'dark');
    console.log('Dark mode enabled');
  } else {
    // Dark mode is active → disable it by removing the dark stylesheet
    isDarkModeActive.remove();

    // Update both toggle buttons for light mode
    updateUI(navToggle, 'light');
    updateUI(btnToggle, 'light');

    // Save user preference in localStorage for persistence
    localStorage.setItem('semester-notes-website-colorMode', 'light');
    console.log('Dark mode disabled');
  }
}

/**
 * On page load, apply user’s preferred mode.
 * Priority: localStorage → prefers-color-scheme (system theme)
 */
function applyPreferredMode() {
  const savedMode = localStorage.getItem('semester-notes-website-colorMode'); // Get saved mode from localStorage

  // Check if a preference is saved in localStorage and apply it
  if (savedMode === 'dark') {
    toggleDarkMode(); // Apply dark mode if saved preference is dark
  } else if (!savedMode) {
    // No preference saved → check system theme using prefers-color-scheme
    const prefersDark = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      toggleDarkMode(); // Apply dark if system theme prefers dark mode
    }
  }
}

// Run when DOM is ready, to apply the preferred mode
document.addEventListener('DOMContentLoaded', applyPreferredMode);


/**
 * ==========================================================
 * TRANSLATE.JS - CUSTOM SEARCHABLE LANGUAGE SELECTOR
 * ==========================================================
 *
 * Translation service: client.edge
 * Original language: English
 *
 * Features:
 * - Custom dropdown (no native browser popup)
 * - Search languages by English or native name
 * - English + native language display names
 * - Alphabetically sorted languages (A-Z)
 * - Six visible options with scrolling
 * - 15px gap above the options list
 * - Preserves original translate.js language IDs
 * - Uses translate.js language switching
 *
 * ==========================================================
 */

document.addEventListener('DOMContentLoaded', function () {

  // 1. Set original website language
  translate.language.setLocal('english');

  // 2. Configure translation service
  translate.service.use('client.edge');

  // 3. Clear previously selected language
  translate.language.clearCacheLanguage();

  // 4. Configure language selector container
  translate.selectLanguageTag.documentId = 'translate-container';
  translate.selectLanguageTag.show = true;

  // 5. Ignore language selector during translation
  translate.ignore.id.push('translate-container');

  // 6. Start translation listener
  translate.listener.start();


  // ========================================================
  // CUSTOM LANGUAGE NAMES
  // ========================================================

  const languageNames = {

    afrikaans: 'Afrikaans (Afrikaans)',
    albanian: 'Albanian (Shqip)',
    amharic: 'Amharic (አማርኛ)',
    arabic: 'Arabic (العربية)',
    armenian: 'Armenian (Հայերեն)',
    azerbaijani: 'Azerbaijani (Azərbaycan dili)',

    bengali: 'Bengali (বাংলা)',
    bosnian: 'Bosnian (Bosanski)',
    bulgarian: 'Bulgarian (Български)',
    burmese: 'Burmese (မြန်မာဘာသာ)',

    catalan: 'Catalan (Català)',
    chinese_simplified: 'Chinese (Simplified) (简体中文)',
    chinese_traditional: 'Chinese (Traditional) (繁體中文)',
    croatian: 'Croatian (Hrvatski)',
    czech: 'Czech (Čeština)',

    danish: 'Danish (Dansk)',
    dutch: 'Dutch (Nederlands)',

    english: 'English',
    estonian: 'Estonian (Eesti)',

    filipino: 'Filipino (Wikang Filipino)',
    finnish: 'Finnish (Suomi)',
    french: 'French (Français)',

    deutsch: 'German (Deutsch)',
    greek: 'Greek (Ελληνικά)',
    gujarati: 'Gujarati (ગુજરાતી)',

    haitian_creole: 'Haitian Creole (Kreyòl ayisyen)',
    hebrew: 'Hebrew (עברית)',
    hindi: 'Hindi (हिन्दी)',
    hungarian: 'Hungarian (Magyar)',

    icelandic: 'Icelandic (Íslenska)',
    inuktitut: 'Inuktitut (ᐃᓄᒃᑎᑐᑦ)',
    indonesian: 'Indonesian (Bahasa Indonesia)',
    irish: 'Irish (Gaeilge)',
    italian: 'Italian (Italiano)',

    japanese: 'Japanese (日本語)',

    kannada: 'Kannada (ಕನ್ನಡ)',
    khmer: 'Khmer (ភាសាខ្មែរ)',
    korean: 'Korean (한국어)',
    kurdish: 'Kurdish (Kurdî)',

    lao: 'Lao (ພາສາລາວ)',
    latvian: 'Latvian (Latviešu)',
    lithuanian: 'Lithuanian (Lietuvių)',

    malagasy: 'Malagasy (Malagasy)',
    malay: 'Malay (Bahasa Melayu)',
    malayalam: 'Malayalam (മലയാളം)',
    maltese: 'Maltese (Malti)',
    maori: 'Maori (Te Reo Māori)',
    marathi: 'Marathi (मराठी)',

    nepali: 'Nepali (नेपाली)',
    norwegian: 'Norwegian (Norsk)',

    oriya: 'Odia (ଓଡ଼ିଆ)',

    pashto: 'Pashto (پښتو)',
    persian: 'Persian (فارسی)',
    polish: 'Polish (Polski)',
    portuguese: 'Portuguese (Português)',
    punjabi: 'Punjabi (ਪੰਜਾਬੀ)',

    romanian: 'Romanian (Română)',
    russian: 'Russian (Русский)',

    samoan: 'Samoan (Gagana Samoa)',
    slovak: 'Slovak (Slovenčina)',
    slovene: 'Slovenian (Slovenščina)',
    spanish: 'Spanish (Español)',
    swahili: 'Swahili (Kiswahili)',
    swedish: 'Swedish (Svenska)',

    tamil: 'Tamil (தமிழ்)',
    telugu: 'Telugu (తెలుగు)',
    thai: 'Thai (ภาษาไทย)',
    tongan: 'Tongan (Lea faka-Tonga)',
    turkish: 'Turkish (Türkçe)',

    ukrainian: 'Ukrainian (Українська)',
    urdu: 'Urdu (اردو)',

    vietnamese: 'Vietnamese (Tiếng Việt)',

    welsh: 'Welsh (Cymraeg)'

  };


  // ========================================================
  // BUILD CUSTOM LANGUAGE DROPDOWN
  // ========================================================

  translate.selectLanguageTag.customUI = function (languageList) {

    const container = document.getElementById(
      translate.selectLanguageTag.documentId
    );

    if (!container) return;

    container.innerHTML = '';

    // Find currently selected language
    const currentLanguage =
      translate.to && translate.to.length > 0
        ? translate.to
        : translate.language.getLocal();

    // Sort languages alphabetically
    const sortedLanguages = [...languageList].sort(function (a, b) {

      const nameA =
        languageNames[a.id] ||
        a.name.replace(/Name$/, '').trim();

      const nameB =
        languageNames[b.id] ||
        b.name.replace(/Name$/, '').trim();

      return nameA.localeCompare(nameB, 'en', {
        sensitivity: 'base'
      });

    });


    // ======================================================
    // CREATE DROPDOWN ELEMENTS
    // ======================================================

    const dropdown = document.createElement('div');
    dropdown.className = 'custom-language-dropdown';

    // Visible selector button
    const trigger = document.createElement('button');

    trigger.type = 'button';
    trigger.className = 'language-dropdown-trigger';
    trigger.setAttribute('aria-haspopup', 'listbox');
    trigger.setAttribute('aria-expanded', 'false');

    // Dropdown panel
    const panel = document.createElement('div');
    panel.className = 'language-dropdown-panel';

    // Search input
    const searchInput = document.createElement('input');

    searchInput.type = 'search';
    searchInput.className = 'language-search-input';
    searchInput.placeholder = 'Search a language...';
    searchInput.setAttribute('aria-label', 'Search languages');
    searchInput.autocomplete = 'off';

    // Scrollable options list
    const optionsList = document.createElement('div');

    optionsList.className = 'language-dropdown-options';
    optionsList.setAttribute('role', 'listbox');

    // No-results message
    const noResults = document.createElement('div');

    noResults.className = 'language-no-results';
    noResults.textContent = 'No languages found.';
    noResults.hidden = true;


    // ======================================================
    // CREATE HIDDEN NATIVE SELECT FOR TRANSLATE.JS
    // ======================================================

    const select = document.createElement('select');

    select.id =
      translate.selectLanguageTag.documentId + 'SelectLanguage';

    select.className =
      translate.selectLanguageTag.documentId + 'SelectLanguage';

    select.setAttribute('aria-hidden', 'true');
    select.tabIndex = -1;


    // ======================================================
    // STORE LANGUAGE OPTIONS FOR SEARCH
    // ======================================================

    const languageItems = [];


    // ======================================================
    // ADD LANGUAGES
    // ======================================================

    sortedLanguages.forEach(function (lang) {

      const displayName =
        languageNames[lang.id] ||
        lang.name.replace(/Name$/, '').trim();

      // Add option to hidden native select
      const option = document.createElement('option');

      option.value = lang.id;
      option.textContent = displayName;

      if (currentLanguage === lang.id) {
        option.selected = true;
      }

      select.appendChild(option);


      // Create visible language button
      const item = document.createElement('button');

      item.type = 'button';
      item.className = 'language-dropdown-option';
      item.textContent = displayName;

      item.setAttribute('role', 'option');
      item.setAttribute('aria-selected', String(
        currentLanguage === lang.id
      ));

      item.dataset.language = lang.id;

      if (currentLanguage === lang.id) {
        item.classList.add('selected');
      }


      // Searchable text: English name, native name and language ID
      languageItems.push({
        element: item,
        searchText: (
          displayName + ' ' + lang.id
        ).toLowerCase()
      });


      // Handle language selection
      item.addEventListener('click', function () {

        // Set language on the hidden native select
        select.value = lang.id;

        // Trigger translate.js language change handler
        select.dispatchEvent(
          new Event('change', { bubbles: true })
        );

        // Update visible selector text
        trigger.textContent = displayName;

        // Update selected styling
        optionsList.querySelectorAll('.language-dropdown-option')
          .forEach(function (button) {

            const isSelected =
              button.dataset.language === lang.id;

            button.classList.toggle('selected', isSelected);

            button.setAttribute(
              'aria-selected',
              String(isSelected)
            );

          });

        // Close dropdown and reset search
        dropdown.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');

        searchInput.value = '';
        filterLanguages('');

      });


      optionsList.appendChild(item);

    });


    // ======================================================
    // INITIAL SELECTED LANGUAGE
    // ======================================================

    const selectedLanguage = sortedLanguages.find(function (lang) {
      return lang.id === currentLanguage;
    });

    trigger.textContent = selectedLanguage
      ? (
        languageNames[selectedLanguage.id] ||
        selectedLanguage.name.replace(/Name$/, '').trim()
      )
      : 'Select Language';


    // ======================================================
    // SEARCH FILTER
    // ======================================================

    function filterLanguages(query) {

      const searchTerm = query.trim().toLowerCase();

      let visibleCount = 0;

      languageItems.forEach(function (language) {

        const matches =
          language.searchText.includes(searchTerm);

        language.element.hidden = !matches;

        if (matches) {
          visibleCount++;
        }

      });

      noResults.hidden = visibleCount !== 0;

    }


    // Search as the user types
    searchInput.addEventListener('input', function () {

      filterLanguages(searchInput.value);

    });


    // Prevent clicks inside the panel from bubbling
    panel.addEventListener('click', function (event) {
      event.stopPropagation();
    });


    // ======================================================
    // OPEN / CLOSE DROPDOWN
    // ======================================================

    trigger.addEventListener('click', function (event) {

      event.stopPropagation();

      const isOpen = dropdown.classList.toggle('is-open');

      trigger.setAttribute('aria-expanded', String(isOpen));

      if (isOpen) {

        searchInput.value = '';
        filterLanguages('');

        searchInput.focus();

      }

    });


    // ======================================================
    // LANGUAGE SWITCHING
    // ======================================================

    select.addEventListener('change', function (event) {

      translate.selectLanguageTag.selectOnChange(event);

    });


    // ======================================================
    // ADD ELEMENTS TO PAGE
    // ======================================================

    panel.appendChild(searchInput);
    panel.appendChild(optionsList);
    panel.appendChild(noResults);

    dropdown.appendChild(trigger);
    dropdown.appendChild(panel);
    dropdown.appendChild(select);

    container.appendChild(dropdown);


    // ======================================================
    // CONSOLE OUTPUT
    // ======================================================

    /**
    console.log(
      'Total Available Languages:',
      sortedLanguages.length
    );

    console.table(
      sortedLanguages.map(function (lang) {
        return {
          Language_Name:
            languageNames[lang.id] ||
            lang.name.replace(/Name$/, '').trim(),

          Language_Code: lang.id
        };
      })
    );
  **/

  };


  // ========================================================
  // INITIALIZE TRANSLATION
  // ========================================================

  translate.execute();


  // ========================================================
  // FLOATING LANGUAGE BUTTON
  // ========================================================

  const button = document.getElementById('language-toggle');

  const container = document.getElementById('translate-container');

  if (button && container) {

    button.addEventListener('click', function () {

      container.classList.toggle('active');

      // Close dropdown when hiding the language panel
      const dropdown = container.querySelector(
        '.custom-language-dropdown'
      );

      if (dropdown) {

        dropdown.classList.remove('is-open');

        const trigger = dropdown.querySelector(
          '.language-dropdown-trigger'
        );

        if (trigger) {
          trigger.setAttribute('aria-expanded', 'false');
        }

      }

    });

  }


  // ========================================================
  // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  // ========================================================

  document.addEventListener('click', function (event) {

    const dropdown = document.querySelector(
      '.custom-language-dropdown'
    );

    if (dropdown && !dropdown.contains(event.target)) {

      dropdown.classList.remove('is-open');

      const trigger = dropdown.querySelector(
        '.language-dropdown-trigger'
      );

      if (trigger) {
        trigger.setAttribute('aria-expanded', 'false');
      }

    }

  });

});
