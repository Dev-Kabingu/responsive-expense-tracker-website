// const loginBtn = document.getElementById("login");
// const signupBtn = document.getElementById("register");

// loginBtn.addEventListener("click", function(){
//     window.location.href = "index.html";
// });


const getStarted = document.querySelector(".btn--1");
const watchVideo = document.querySelector(".btn--2");
getStarted.addEventListener("click", function(){
    window.location.href = "login.html";
});

watchVideo.addEventListener("click", function(){
    alert("Video Unavailable!");
});
// Get the hamburger and nav elements
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

// Toggle the navigation menu on hamburger click
hamburger.addEventListener('click', function() {
    navList.classList.toggle('active');
});
