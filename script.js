// Get reference to the left side bar
const leftSide = document.querySelector('#leftBox');

// Add click event listener to toggle the 'expanded' class
leftSide.addEventListener('click', function() {
    // Toggle the 'expanded' class on the left side bar
    this.classList.toggle('expanded');
});
