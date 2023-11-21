document.addEventListener('DOMContentLoaded', () => {
    let menuBtn = document.querySelector('#menu-btn');
    let searchBtn = document.querySelector('#search-btn');
    let cartBtn = document.querySelector('#cart-btn');
    let navbar = document.querySelector('.navbar');
    let searchForm = document.querySelector('.search-form');
    let cartItem = document.querySelector('.cart-items-container');

    console.log(menuBtn, searchBtn, cartBtn, navbar, searchForm, cartItem);

    menuBtn.onclick = () => {
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
        cartItem.classList.remove('active');
    }

    searchBtn.onclick = () => {
        searchForm.classList.toggle('active');
        navbar.classList.remove('active');
        cartItem.classList.remove('active');
    }

    cartBtn.onclick = () => {
        cartItem.classList.toggle('active');
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
    }
});

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

