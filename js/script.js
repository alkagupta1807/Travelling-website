// Select the navbar element
let navbar = document.querySelector('.header .flex .navbar');


// Add an event listener to the menu button for click events
document.querySelector('#menu-btn').addEventListener('click', () => {
   // Toggle the 'active' class on the navbar
   navbar.classList.toggle('active');
});

// Add an event listener to the window for scroll events
window.addEventListener('scroll', () => {
   // Remove the 'active' class from the navbar when scrolling
   navbar.classList.remove('active');
});


// Select all number input elements and add an event listener for input events
// document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
//    inputNumber.addEventListener('input', () => {
      // Ensure maxLength is set and limit the input value accordingly
//       let maxLength = inputNumber.maxLength;
//       if (maxLength > 0 && inputNumber.value.length > maxLength) {
//          inputNumber.value = inputNumber.value.slice(0, maxLength);
//       }
//    });
// });
