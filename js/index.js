document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const page = button.getAttribute('data-page');
            if (page === 'home') {
                // Navigate to index.html for the home button
                window.location.href = 'index.html';
            } else {
                // Navigate to the corresponding HTML file in the pages folder for other buttons
                window.location.href = `pages/${page}.html`;
            }
        });
    });
});