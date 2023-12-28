// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

// Get the main element and calculate its bottom position
var main = document.getElementById('main');
var mainBottom = main.offsetTop + main.offsetHeight;

// Define the offset (in pixels) before reaching the bottom to add the class
var offset = 100 ; // You can adjust this value as needed

// Function to handle scroll event
function onScroll() {
    // Get the current scroll position
    var scrollTop = Math.round(window.pageYOffset || document.documentElement.scrollTop);

    // Calculate the position to add the class
    var scrollPositionToAddClass = mainBottom - offset;

    // Check if the scroll position is above the designated position
    if (scrollTop > scrollPositionToAddClass) {
        document.querySelector('.nav').classList.add('past-main');
    } else {
        document.querySelector('.nav').classList.remove('past-main');
    }
}

// Attach scroll event listener to the window
window.addEventListener('scroll', onScroll);
