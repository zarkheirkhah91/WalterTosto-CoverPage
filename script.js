
  const watchButton = document.querySelector(".watchAndSkip");
  const video = document.getElementById("myVideo");
  const audioButton = document.querySelector(".watchAndSkip2");
  const hidden = document.getElementById('hideButton');
  const navbar = document.querySelector(".navbar");
  const closeButton = document.getElementById("close");
  const videoBackGround = document.querySelector(".videoBackground");
  // const closeButton = document.createElement("button");
  

  watchButton.addEventListener("click",() => {
    hidden.style.display = "none";
    watchButton.style.display = "none";
    audioButton.style.display = "none";
    navbar.style.display = "none";
    closeButton.style.display = "block";
    videoBackGround.style.filter = "brightness(90%)";
    // closeButton.innerText = "close";
    // closeButton.style.display = "show";
    video.muted = false;
    video.play();
  });


const navbarSearch = document.querySelector(".navbarSearch");
const logo = document.querySelector(".logo");
const searchBoxContainer = document.querySelector(".searchBoxContainer");
const hideButton = document.getElementById("hideButton");
const closeSearch = document.querySelector(".closeSearch");

navbarSearch.addEventListener("click",() => {
  logo.style.display = "none";
  hideButton.style.display = "none";
  searchBoxContainer.style.display = "block";
  closeSearch.style.display="block";
});

const closeSearchBoxButton = document.querySelector(".closeSearchBoxButton");

closeSearchBoxButton.addEventListener("click" , () => {
  logo.style.display = "block";
  hideButton.style.display = "block";
  searchBoxContainer.style.display = "none";
  closeSearch.style.display="none";
})












