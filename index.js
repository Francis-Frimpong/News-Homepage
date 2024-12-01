const hamburgerManu = document.querySelector(".icon-manu");
const closeManu = document.querySelector(".close-icon");
const mobileNavLinks = document.querySelector('.mobileNavLinks')
const overlay = document.querySelector('.overlay')

hamburgerManu.addEventListener('click', () => {
    mobileNavLinks.classList.toggle('openDrawer');
    overlay.style.display = "block";

})
closeManu.addEventListener('click', () => {
    mobileNavLinks.classList.toggle('openDrawer');
    overlay.style.display = "none";


})
