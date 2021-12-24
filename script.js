const navSlide = () =>{
 const burger = document.querySelector('.burger');
 const nav = document.querySelector('.menu1');
 const navLinks =document.querySelectorAll('.menu1 li');
 //show nav menu
 burger.addEventListener('click',()=>{
     nav.classList.toggle('nav-active');
 });

 //fade in and out for the links
 navLinks.forEach((link, index)=>{

    link.style.animation = '.navLinkFade 0.5s ease forwards ${idex / 7 + 2}s'

 })

}

navSlide();