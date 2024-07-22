/*
*********************************************************************************************
* File: index.js
* Author: Madhurima Rawat
* Date: July 18, 2024
* Description: JavaScript file for study materials website, providing
*              functionality to dynamically change color schemes based on user-selected seasons.
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
 * The JavaScript code includes functions to center align content using Flexbox, change colors based on
 * a parameter, and handle smooth scrolling for dropdown items using jQuery.
 * @param Color - The `Color` parameter in the `changeColor` function is used to determine the color
 * scheme for the page based on different seasons. The function sets the primary color and button color
 * variables in the CSS root element based on the provided color parameter.
 */

// Run when DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Center align contentRow element using Flexbox
  var contentRow = document.getElementById("contentRow_1");
  if (contentRow) {
    contentRow.classList.add("d-flex", "justify-content-center");
  }
});

// Run when DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Center align contentRow element using Flexbox
  var contentRow = document.getElementById("contentRow_2");
  if (contentRow) {
    contentRow.classList.add("d-flex", "justify-content-center");
  }
});

// Function to change colors based on the Color parameter
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

  // Set the '--button-color' CSS variable of the root element to the determined button color
  document.documentElement.style.setProperty('--button-color', button);
}

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
