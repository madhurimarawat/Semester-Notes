/*
*********************************************************************************************
* File: commands.js
* Author: Madhurima Rawat
* Date: May 28, 2025
* Description: JavaScript file for study materials website commands section, providing
*              functionality to dynamically change color schemes based on user-selected seasons. 
*              This also contains the code which allows to copy commands from website.
* Version: 1.0
* GitHub Repository: https://github.com/madhurimarawat/Semester-Notes
* Issues/Bugs: For any issues or bugs, please visit the GitHub repository issues section.
* Comments: This JS file defines functions to update the primary color variable of the root
*           element based on the provided season. It enhances user experience by allowing
*           dynamic customization of the color scheme.
* Dependencies: None
*********************************************************************************************
*/

// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
    // Apply saved theme from localStorage if available
    const savedColorTheme = localStorage.getItem('colorTheme');
    if (savedColorTheme) {
        changeColor(savedColorTheme);
    }

    // Select all elements with class 'copy-button'
    const copyButtons = document.querySelectorAll('.copy-button');

    // Iterate over each 'copy-button' element
    copyButtons.forEach(button => {
        // Add a click event listener to each button
        button.addEventListener('click', function () {
            const commandBox = this.closest('.command-box');
            const commandText = commandBox.querySelector('.command').textContent.trim();

            const textarea = document.createElement('textarea');
            textarea.value = commandText;
            textarea.setAttribute('readonly', '');
            textarea.style.position = 'absolute';
            textarea.style.left = '-9999px';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);

            const initialText = this.textContent;
            this.textContent = 'Copied!';
            setTimeout(() => {
                this.textContent = initialText;
            }, 1500);
        });
    });
});

/**
 * This function takes the color from the index page and then returns the variable value according to that
 * It also stores the selected color theme in localStorage
 * @param {string} Color - The selected theme keyword (e.g., 'autumn', 'summer', etc.)
 */
function changeColor(Color) {
    let color;
    let button;

    switch (Color) {
        case 'autumn':
            color = 'coral';
            button = '#BA68C8';
            break;
        case 'summer':
            color = '#ffc107';
            button = '#4D94FF';
            break;
        case 'rainy':
            color = '#00CED1';
            button = '#c65b5b';
            break;
        case 'winter':
            color = 'rgb(242, 82, 175)';
            button = '#4CAF50';
            break;
        default:
            color = '#28a745';
            button = '#ffc107';
    }

    // Apply colors to CSS variables
    document.documentElement.style.setProperty('--primary-color', color);
    document.documentElement.style.setProperty('--button-color', button);

    // Store selected color theme in localStorage
    localStorage.setItem('colorTheme', Color);
}

/**
 * Toggles Dark Mode with support for icon/text update and user preference saving.
 */
function toggleDarkMode() {
    const darkModeId = 'dark-mode-stylesheet';
    const highlightsDarkModeId = 'highlights-dark-stylesheet';

    const toggleLink = document.getElementById('dark-mode-toggle');
    const icon = toggleLink.querySelector('i');
    const text = toggleLink.querySelector('.mode-text');

    const isDarkMode = !document.getElementById(darkModeId);

    if (isDarkMode) {
        // Enable dark mode
        const darkStyle = document.createElement('link');
        darkStyle.rel = 'stylesheet';
        darkStyle.href = 'css/index-dark.css';
        darkStyle.id = darkModeId;
        document.head.appendChild(darkStyle);

        const highlightsStyle = document.createElement('link');
        highlightsStyle.rel = 'stylesheet';
        highlightsStyle.href = 'css/commands-dark.css';
        highlightsStyle.id = highlightsDarkModeId;
        document.head.appendChild(highlightsStyle);

        if (icon) icon.classList.replace('fa-moon', 'fa-sun');
        if (text) text.textContent = ' Light Mode';

        localStorage.setItem('colorMode', 'dark');
    } else {
        // Disable dark mode
        document.getElementById(darkModeId)?.remove();
        document.getElementById(highlightsDarkModeId)?.remove();

        if (icon) icon.classList.replace('fa-sun', 'fa-moon');
        if (text) text.textContent = ' Dark Mode';

        localStorage.setItem('colorMode', 'light');
    }
}

/**
 * Apply saved theme preference or system default on page load.
 */
function applyPreferredMode() {
    const savedMode = localStorage.getItem('colorMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedMode === 'dark' || (!savedMode && prefersDark)) {
        toggleDarkMode();
    }
}

document.addEventListener('DOMContentLoaded', applyPreferredMode);