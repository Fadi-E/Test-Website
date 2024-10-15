// Wait until the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Select the menu icon (hamburger button) and the navigation menu
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('#nav-bar ul');
    
    // Add click event listener to the menu icon
    menuIcon.addEventListener('click', function () {
        // Toggle the 'active' class on the navigation menu (to show/hide)
        navMenu.classList.toggle('active');
        
        // Toggle the 'open' class on the menu icon (to animate the hamburger)
        if (navMenu.classList.contains('active')) {
            menuIcon.innerHTML = '&#10005;'; // Change to 'X' when menu is active
        } else {
            menuIcon.innerHTML = '&#9776;'; // Change back to hamburger icon when menu is inactive
        }
    });
});
