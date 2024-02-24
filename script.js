document.addEventListener('DOMContentLoaded', function () {
    // Get the checkbox and nav links
    var navToggle = document.getElementById('nav-toggle');
    var navLinks = document.querySelectorAll('.nav-links a');

    // Function to close the hamburger menu
    function closeHamburgerMenu() {
        navToggle.checked = false;
    }

    // Add click event listener to each nav link
    navLinks.forEach(function (link) {
        link.addEventListener('click', closeHamburgerMenu);
    });
});


AOS.init();