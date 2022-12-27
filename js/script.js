let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
let themeToggler = document.querySelector('#theme-toggler');



// the light and dark theme manager for the web browser
themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}



// the comnand for the navigation Bar in our website

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}



