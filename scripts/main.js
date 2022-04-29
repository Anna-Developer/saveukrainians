"use strict";

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.querySelectorAll(".mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3500); // Change image every 2 seconds
}

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substr(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}


window.onscroll = () => {
    const header = document.getElementById("header");
    const headerContent = document.getElementById("header__content");

    const scrollY = window.scrollY;
    // console.log(scrollY)
    if (scrollY > 500) {
        header.classList.add('header__fixed');
        headerContent.classList.add("header__content-fixed");
    } else {
        header.classList.remove('header__fixed');
        headerContent.classList.remove("header__content-fixed");
    }
}


const headerBurger = document.getElementById("headerBurger");
const menuBlock = document.getElementById("menuBlock");

function switchMenu() {
    menuBlock.classList.toggle('d-none');    
}
headerBurger.addEventListener('click', switchMenu);