document.addEventListener('DOMContentLoaded', function() {
    var sectionFive = document.getElementById('section_five');
    if (sectionFive) {
        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                bulletElement: "span",
                clickable: true,
            },
            mousewheel: false,
            keyboard: true,
        });
    }

    VanillaTilt.init(document.querySelectorAll('.card'), {
        max: 25,
        speed: 500,
        glare: true,
        "max-glare": 0.1
    });

    window.addEventListener('scroll', function() {
        var navbar = document.getElementById('navbar');
        var sectionOne = document.getElementById('section_one');
        
        if (window.scrollY > sectionOne.offsetTop) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    
    const themeToggle = document.getElementById("theme-toggle");
    const moonImg = document.querySelector(".moon-img");
    const sunImg = document.querySelector(".sun-img");

    themeToggle.addEventListener("click", function() {
        var body = document.body;

        if (body.classList.contains("light-theme")) {
            body.classList.remove("light-theme");
            body.classList.add("dark-theme");
        } else {
            body.classList.remove("dark-theme");
            body.classList.add("light-theme");
        }

        themeToggle.classList.toggle("active");

        if (themeToggle.classList.contains("active")) {
            moonImg.style.display = "none";
            sunImg.style.display = "inline-block";
        } else {
            moonImg.style.display = "inline-block";
            sunImg.style.display = "none";
        }
    });

    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('menu');
    const menuLinks = document.querySelectorAll('.menu a');

    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
});
