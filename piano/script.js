let btnDetails = document.querySelectorAll(".btn-details");
let divAboutCoffee = document.querySelectorAll('.about-coffee');


for (let i = 0; i < btnDetails.length; i++) {
    btnDetails[i].onclick = function () {
        divAboutCoffee[i].style.transform = 'translateY(-100%)'
    }
}
for (let i = 0; i < divAboutCoffee.length; i++) {
    divAboutCoffee[i].onclick = function () {
        divAboutCoffee[i].style.transform = 'translateY(0%)'
    }
}
window.addEventListener('scroll', function () {
    let height = window.innerHeight;
    let btnTop = document.querySelector('.btn-Top');
    if (window.scrollY > height) {
        btnTop.style.display = 'flex'
    }
    else {
        btnTop.style.display = 'none'
    }
});

ScrollReveal().reveal('.piano-p', { reset: true,  delay: 700, interval: 500,distance: '50px' });
