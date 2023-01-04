const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');

const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelector('.menu-nav__item')

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);


function toggleMenu() {
    if(!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        Object.keys(navItems).forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        Object.keys(navItems).forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}


const menuNavItem = document.querySelectorAll(".menu-nav__item")
menuNav.addEventListener("click", function(e){

   const navItem =  e.target.closest(".menu-nav__item")
   if(navItem){

       menuNavItem.forEach((e)=> {
           e.classList.remove("active")
       })
       navItem.classList.add("active")
   }
})
