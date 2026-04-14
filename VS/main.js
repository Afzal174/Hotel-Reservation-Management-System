let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let profileIcon = document.getElementById('login-btn');
let logoutIcon = document.getElementById('logout-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn= document.querySelectorAll('.vid-btn');
let loginBtn = document.querySelector("#login")
let loginFormSubmit = document.querySelector("#loginForm")

function handleForm(event) { event.preventDefault(); } 
loginFormSubmit.addEventListener('submit', handleForm);

window.onload = () =>{
    checkUserLoggedIn()
}

logoutIcon.addEventListener('click', () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    checkUserLoggedIn();
    window.location.reload();
});

function checkUserLoggedIn() {
    let email = localStorage.getItem('email');
    if(email != null){
        profileIcon.style.display = "none";
        logoutIcon.style.display = "inline";
        console.log("user already logged in")
    } else {
        profileIcon.style.display = "inline";
        logoutIcon.style.display = "none";
        loginForm.classList.add('active');
    }
}

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    // loginForm.classList.remove('active');
}
menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
loginBtn.addEventListener('click',() =>{
    console.log("login")
    let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
console.log(email, password)

if(email == "" || password == ""){
    alert("Please enter email and password");
    return
}

localStorage.setItem("email", email);
localStorage.setItem("password", password);
loginForm.classList.remove('active');
checkUserLoggedIn()
});

searchBtn.addEventListener('click',() =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
formBtn.addEventListener('click',() =>{
    loginForm.classList.add('active');
});
formClose.addEventListener('click',() =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', () =>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640:{
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        }, 1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450:{
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        }, 
        991:{
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    },
});


function loadPage(url) {
    // fetch(url)
    //     .then(response => response.text())
    //     .then(data => {
           
            window.history.pushState({ path: url }, '', url);
        // })
        // .catch(error => console.error('Error loading page:', error));
}

window.onpopstate = function(event) {
    if (event.state && event.state.path) {
        loadPage(event.state.path);
    }
};
function changeVideo(id) {
    document.querySelector(".video-container iframe").src =
    "https://drive.google.com/file/d/" + id + "/preview";
}