const hamMenu = document.getElementsByClassName("hamburger")[0];
const navMenu = document.querySelector(".nav-menu");
const body = document.getElementsByTagName("body")[0];
console.log(body);

hamMenu.addEventListener("click",()=>{
    hamMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("active");
});