const hamburgerManu = document.querySelector(".icon-manu");
const closeManu = document.querySelector(".close-icon");
const mobileNavLinks = document.querySelector('.mobileNavLinks')

hamburgerManu.addEventListener('click', () => {
    mobileNavLinks.classList.toggle('openDrawer');

})
closeManu.addEventListener('click', () => {
    mobileNavLinks.classList.toggle('openDrawer');

})
