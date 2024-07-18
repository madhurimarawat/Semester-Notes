/*
*********************************************************************************************
* File: commands.js
* Author: Madhurima Rawat
* Date: July 18, 2024
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

/**
 * The script waits for the DOM to load, enables copying text to clipboard on button click, and changes
 * color variables based on a parameter.
 * @param Color - The `Color` parameter in the `changeColor` function is a string that represents a
 * specific color theme. The function then determines the corresponding color values for the primary
 * color and button color based on the provided `Color` parameter. The function sets CSS variables
 * `--primary-color` and `--button
 */

// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with class 'copy-button'
    const copyButtons = document.querySelectorAll('.copy-button');

    // Iterate over each 'copy-button' element
    copyButtons.forEach(button => {
        // Add a click event listener to each button
        button.addEventListener('click', function () {
            // Find the closest ancestor element with class 'command-box'
            const commandBox = this.closest('.command-box');

            // Find the text content of the element with class 'command' inside 'command-box'
            const commandText = commandBox.querySelector('.command').textContent.trim();

            // Create a temporary textarea element to copy text to clipboard
            const textarea = document.createElement('textarea');
            textarea.value = commandText; // Set textarea value to command text
            textarea.setAttribute('readonly', ''); // Make textarea readonly
            textarea.style.position = 'absolute';
            textarea.style.left = '-9999px'; // Move outside the screen to make it invisible

            // Append textarea to the body
            document.body.appendChild(textarea);

            // Select the content of the textarea
            textarea.select();

            // Execute copy command to copy selected text to clipboard
            document.execCommand('copy');

            // Remove the temporary textarea from the DOM
            document.body.removeChild(textarea);

            // Change button text temporarily to indicate successful copy
            const initialText = this.textContent; // Store the initial button text
            this.textContent = 'Copied!'; // Change button text to 'Copied!'

            // Restore original button text after 1.5 seconds
            setTimeout(() => {
                this.textContent = initialText;
            }, 1500);
        });
    });
});

// This function takes the color from the index page and then returns the variable value according to that
function changeColor(Color) {
    let color;
    let button;

    // Determine the color based on the provided Color parameter
    switch (Color) {
        case 'autumn':
            color = 'coral'; // Autumn: Coral
            button = '#BA68C8'; // Button color: Purple
            break;
        case 'summer':
            color = '#ffc107'; // Summer: Gold
            button = '#4D94FF'; // Button color: Blue
            break;
        case 'rainy':
            color = '#00CED1'; // Rainy: Dark Turquoise
            button = '#c65b5b'; // Button color: Red
            break;
        case 'winter':
            color = 'rgb(242, 82, 175)'; // Winter: Deep Pink
            button = '#4CAF50'; // Button color: Dark Green
            break;
        default:
            color = '#28a745'; // Default color (Green)
            button = '#ffc107'; // Default button color: Gold
    }

    // Set the '--primary-color' CSS variable of the root element to the determined color
    document.documentElement.style.setProperty('--primary-color', color);

    // Set the '--primary-color' CSS variable of the root element to the determined color
    document.documentElement.style.setProperty('--button-color', button);
}

