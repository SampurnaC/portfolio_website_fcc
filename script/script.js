// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        // header.classList.add('navbarDark');
        header.classList.remove('opacity-25');
        header.classList.add('opacity-75');
    }
    else {
        // header.classList.remove('navbarDark');
        header.classList.remove('opacity-75');
        header.classList.add('opacity-25');

        
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})