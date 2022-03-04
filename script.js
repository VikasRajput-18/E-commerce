const bar = document.querySelector('.bars');
const close = document.querySelector(".close");
const navItems = document.querySelector(".nav-items");
bar.addEventListener('click' , function(){
    navItems.classList.add('active');
})
close.addEventListener('click' , function(){
    navItems.classList.remove('active');
})