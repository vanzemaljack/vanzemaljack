const swup = new Swup();
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const contact = document.querySelector("#contact");

url = "http://127.0.0.1:5501";

let myInterval = setInterval(() => {
    nav_color();
    load_project_vv();
    load_project_slackeala();
}, 500);

// setTimeout(()=>{clearInterval(myInterval)}, 10000);

function nav_color() {
    if (window.location.href === `${url}/index.html`) {
        home.style.color = "#7eca9c";
        about.style.color = "#ffff";
        projects.style.color = "#ffff";
    } else if (window.location.href === `${url}/about.html`) {
        about.style.color = "#7eca9c";
        home.style.color = "#ffff";
        projects.style.color = "#ffff";
    } else if (window.location.href === `${url}/projects.html`) {
        projects.style.color = "#7eca9c";
        about.style.color = "#ffff";
        home.style.color = "#ffff";
    }
}

function load_project_vv() {
    let link_project = document.querySelector("#link-pr-vv");
    if (link_project) {
        link_project.onclick = () => {
            location.href = "/vidriosvilardo.html";
        };
        link_project.addEventListener("keyup", (e) => {
            if (e.keyCode === 13) {
                return (location.href = "/vidriosvilardo.html");
            }
        });
    }
}

function load_project_slackeala() {
    let link_project = document.querySelector("#link-pr-slackeala");
    if (link_project) {
        link_project.onclick = () => {
            location.href = "/slackeala.html";
        };
        link_project.addEventListener("keyup", (e) => {
            if (e.keyCode === 13) {
                return (location.href = "/slackeala.html");
            }
        });
    }
}

// const navSlide = () => {
//     const burger = document.querySelector(".burger");
//     const nav = document.querySelector(".nav-links");
//     const navLinks = document.querySelectorAll(".nav-links li");
//     //Toggle Nav

//     burger.addEventListener("click", () => {
//         nav.classList.toggle("nav-a");
//         setTimeout(() => {
//             nav.classList.toggle("nav-active");

//             //Animate Links
//             navLinks.forEach((link, index) => {
//                 if (link.style.animation) {
//                     link.style.animation = "";
//                 } else {
//                     link.style.animation = `navLinkFade 0.5s ease forwards ${
//                         index / 7 + 0.5
//                     }s`;
//                 }
//             });
//             //burger animation
//             burger.classList.toggle("toggle");
//         }, 50);
//     });
// };

// navSlide();


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}