let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

/* Toggling the class `fa-times` and `active` on the `menu` and `header` when the user clicks on the
`menu` button. */
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

/* Removing the class `fa-times` and `active` from the `menu` and `header` when the user scrolls. */
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');

/* Toggling the theme of the page. */
themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}